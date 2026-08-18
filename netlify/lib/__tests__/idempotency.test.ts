import { describe, it, expect } from "vitest";
import {
  acquire,
  claimKey,
  RELEASED_CLAIMED_AT,
  type ClaimStore,
  type ClaimRecord,
  type StoreEntry,
} from "../idempotency.js";

/**
 * In-memory ClaimStore that emulates the exact atomic semantics of Netlify
 * Blobs v11 conditional writes:
 *   - get() snapshots state + ETag at call time, then yields a microtask so
 *     concurrent acquire() calls interleave their reads before any write;
 *   - create() is an atomic check-then-set (onlyIfNew);
 *   - update() is an atomic compare-and-swap on ETag (onlyIfMatch);
 *   - every successful write mints a fresh monotonic ETag.
 * There is no unconditional write or delete, mirroring the production surface.
 */
class FakeStore implements ClaimStore {
  private map = new Map<string, { value: ClaimRecord; etag: string }>();
  private counter = 0;

  async get(key: string): Promise<StoreEntry | null> {
    const entry = this.map.get(key);
    const snapshot: StoreEntry | null = entry
      ? { value: { ...entry.value }, etag: entry.etag }
      : null;
    await Promise.resolve(); // yield to encourage interleaving
    return snapshot;
  }

  async create(key: string, record: ClaimRecord): Promise<{ ok: boolean; etag?: string }> {
    if (this.map.has(key)) return { ok: false };
    const etag = `e${++this.counter}`;
    this.map.set(key, { value: { ...record }, etag });
    return { ok: true, etag };
  }

  async update(
    key: string,
    record: ClaimRecord,
    etag: string,
  ): Promise<{ ok: boolean; etag?: string }> {
    const entry = this.map.get(key);
    if (!entry || entry.etag !== etag) return { ok: false };
    const newEtag = `e${++this.counter}`;
    this.map.set(key, { value: { ...record }, etag: newEtag });
    return { ok: true, etag: newEtag };
  }

  // Test helper — inspect raw state.
  peek(key: string): ClaimRecord | undefined {
    return this.map.get(key)?.value;
  }
}

const SID = "cs_test_session";
const KEY = claimKey(SID);

describe("acquire — single delivery lifecycle", () => {
  it("first delivery is granted the send, then commit records 'done'", async () => {
    const store = new FakeStore();

    const first = await acquire(store, SID, { now: 1000, newToken: () => "A" });
    expect(first.decision).toBe("send");
    expect(store.peek(KEY)).toMatchObject({ status: "processing", owner: "A", claimedAt: 1000 });

    if (first.decision !== "send") throw new Error("unreachable");
    const c = await first.commit();
    expect(c).toEqual({ committed: true, ownershipLost: false });
    expect(store.peek(KEY)).toMatchObject({ status: "done", owner: "A" });
  });

  it("returns already_sent (-> HTTP 200) once committed", async () => {
    const store = new FakeStore();
    const first = await acquire(store, SID, { now: 1000 });
    if (first.decision !== "send") throw new Error("expected send");
    await first.commit();

    const second = await acquire(store, SID, { now: 2000 });
    expect(second.decision).toBe("already_sent");
  });

  it("returns in_flight (-> HTTP 503) while a fresh claim is processing", async () => {
    const store = new FakeStore();
    const first = await acquire(store, SID, { now: 1000 });
    expect(first.decision).toBe("send");

    const second = await acquire(store, SID, { now: 1500, staleMs: 10_000 });
    expect(second.decision).toBe("in_flight");
  });
});

describe("acquire — ownership-safe release", () => {
  it("release marks the claim reclaimable, and a later delivery can send again", async () => {
    const store = new FakeStore();
    const first = await acquire(store, SID, { now: 1000, newToken: () => "A" });
    if (first.decision !== "send") throw new Error("expected send");

    const r = await first.release();
    expect(r).toEqual({ released: true, ownershipLost: false });
    // Not deleted — transitioned to a released (immediately reclaimable) state.
    expect(store.peek(KEY)).toMatchObject({ status: "processing", claimedAt: RELEASED_CLAIMED_AT });

    const retry = await acquire(store, SID, { now: 1200, newToken: () => "B" });
    expect(retry.decision).toBe("send");
    expect(store.peek(KEY)).toMatchObject({ status: "processing", owner: "B", claimedAt: 1200 });
  });
});

describe("acquire — stale reclaim", () => {
  it("reclaims a stale 'processing' claim exactly once", async () => {
    const store = new FakeStore();
    const first = await acquire(store, SID, { now: 1000, staleMs: 1000, newToken: () => "A" });
    expect(first.decision).toBe("send"); // never commits (simulated crash)

    const early = await acquire(store, SID, { now: 1500, staleMs: 1000 });
    expect(early.decision).toBe("in_flight"); // not yet stale

    const late = await acquire(store, SID, { now: 3000, staleMs: 1000, newToken: () => "B" });
    expect(late.decision).toBe("send"); // stale -> reclaimed
    expect(store.peek(KEY)).toMatchObject({ status: "processing", owner: "B", claimedAt: 3000 });
  });
});

/**
 * The core race-condition suite requested: a stale worker A must never be able
 * to overwrite (commit) or delete (release) a newer worker B's active claim.
 */
describe("acquire — stale-owner cannot clobber a reclaimed claim", () => {
  async function setupReclaimed() {
    const store = new FakeStore();
    const a = await acquire(store, SID, { now: 1000, staleMs: 1000, newToken: () => "A" });
    const b = await acquire(store, SID, { now: 3000, staleMs: 1000, newToken: () => "B" });
    if (a.decision !== "send" || b.decision !== "send") throw new Error("expected both send");
    return { store, a, b };
  }

  it("A: stale A cannot commit over B's reclaimed claim", async () => {
    const { store, a } = await setupReclaimed();
    const commit = await a.commit();
    expect(commit).toEqual({ committed: false, ownershipLost: true });
    // B's claim is untouched.
    expect(store.peek(KEY)).toMatchObject({ status: "processing", owner: "B", claimedAt: 3000 });
  });

  it("B: stale A cannot release/delete B's reclaimed claim", async () => {
    const { store, a } = await setupReclaimed();
    const release = await a.release();
    expect(release).toEqual({ released: false, ownershipLost: true });
    // B's claim still present and unchanged — not deleted.
    expect(store.peek(KEY)).toMatchObject({ status: "processing", owner: "B", claimedAt: 3000 });
  });

  it("C: B commits successfully after reclaim -> final state done", async () => {
    const { store, a, b } = await setupReclaimed();
    // A's late failure attempts happen first and must be no-ops.
    await a.commit();
    await a.release();
    const commit = await b.commit();
    expect(commit).toEqual({ committed: true, ownershipLost: false });
    expect(store.peek(KEY)).toMatchObject({ status: "done", owner: "B" });

    const after = await acquire(store, SID, { now: 5000 });
    expect(after.decision).toBe("already_sent");
  });
});

describe("acquire — concurrency", () => {
  it("D: 12 concurrent initial deliveries produce exactly one send", async () => {
    const store = new FakeStore();

    const results = await Promise.all(
      Array.from({ length: 12 }, () => acquire(store, SID, { now: 1000, staleMs: 10_000 })),
    );

    const sends = results.filter((r) => r.decision === "send");
    expect(sends).toHaveLength(1);
    expect(results.every((r) => r.decision === "send" || r.decision === "in_flight")).toBe(true);
  });

  it("E: concurrent stale-reclaim attempts produce exactly one new owner", async () => {
    const store = new FakeStore();
    // Seed a stale processing claim.
    const seed = await acquire(store, SID, { now: 1000, staleMs: 1000, newToken: () => "seed" });
    expect(seed.decision).toBe("send");

    const results = await Promise.all(
      Array.from({ length: 12 }, (_, i) =>
        acquire(store, SID, { now: 3000, staleMs: 1000, newToken: () => `w${i}` }),
      ),
    );

    const sends = results.filter((r) => r.decision === "send");
    expect(sends).toHaveLength(1);
    expect(results.every((r) => r.decision === "send" || r.decision === "in_flight")).toBe(true);

    // Exactly one new owner is recorded, and it is one of the reclaimers.
    const rec = store.peek(KEY);
    expect(rec?.status).toBe("processing");
    expect(rec?.owner).toMatch(/^w\d+$/);
  });
});

describe("persistence", () => {
  it("state persists across acquire calls and sessions are independent", async () => {
    const store = new FakeStore();

    const first = await acquire(store, SID, { now: 1000, newToken: () => "A" });
    if (first.decision !== "send") throw new Error("expected send");
    expect(store.peek(KEY)).toMatchObject({ status: "processing", owner: "A", claimedAt: 1000 });

    await first.commit();
    expect(store.peek(KEY)?.status).toBe("done");

    const other = await acquire(store, "cs_other", { now: 1000 });
    expect(other.decision).toBe("send");
    expect(store.peek(claimKey("cs_other"))?.status).toBe("processing");
  });
});
