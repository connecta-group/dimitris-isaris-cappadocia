/**
 * Atomic, ownership-safe, persistent de-duplication for Purchase delivery.
 *
 * Backed by Netlify Blobs v11 conditional writes (`onlyIfNew` / `onlyIfMatch`),
 * which give an atomic compare-and-swap across concurrent function invocations.
 *
 * Ownership model
 * ---------------
 * Every claim carries TWO ownership identities:
 *   - the Blob ETag returned by the atomic write that created/updated it, and
 *   - an explicit unique `owner` token stored inside the record.
 * A worker may only mutate a claim it still owns, enforced by CAS
 * (`onlyIfMatch: <owned etag>`). The moment another worker reclaims the record,
 * the ETag changes and every operation from the previous owner fails safely.
 *
 * There are NO unconditional writes and NO unconditional deletes: `commit` and
 * `release` are both CAS operations. A stale worker therefore can never
 * overwrite or remove a newer worker's active claim.
 *
 * State machine
 * -------------
 *   (absent) --create(onlyIfNew)-->            processing(owner=W, claimedAt=t)
 *   processing(stale|released) --CAS(onlyIfMatch)--> processing(owner=W', ...)
 *   processing(owned) --commit CAS-->           done(owner=W)
 *   processing(owned) --release CAS-->          processing(owner=W, claimedAt=0)
 *                                               (0 == released == immediately reclaimable)
 *
 * Decisions returned to the handler:
 *   - already-sent (status "done")   -> HTTP 200
 *   - fresh processing claim         -> HTTP 503 (in_flight)
 *   - lost the create/reclaim race   -> HTTP 503 (in_flight)
 *   - won the claim                  -> "send" with ownership-safe commit/release
 *
 * If a CAS fails because ownership was lost, the caller does nothing harmful.
 * The Meta Purchase carries a deterministic `event_id` (`stripe_cs_<id>`), which
 * is the ultimate Meta-side dedup backstop even if two owners both send.
 */

import { getStore } from "@netlify/blobs";
import { randomUUID } from "node:crypto";

export type ClaimStatus = "processing" | "done";

export interface ClaimRecord {
  status: ClaimStatus;
  /** Unique token identifying the worker that currently owns this claim. */
  owner: string;
  /**
   * Unix ms when the current claim was taken. The sentinel `0`
   * (RELEASED_CLAIMED_AT) marks a released claim that is immediately
   * reclaimable via the same stale-reclaim CAS path.
   */
  claimedAt: number;
}

export interface StoreEntry {
  value: ClaimRecord;
  etag: string;
}

/**
 * Minimal atomic key/value contract. Deliberately exposes only conditional
 * writes — there is no unconditional set or delete, so ownership cannot be
 * clobbered.
 */
export interface ClaimStore {
  /** Read the current record + its ETag, or null if absent. */
  get(key: string): Promise<StoreEntry | null>;
  /** Create only if absent (onlyIfNew). `ok` is false if the key already exists. */
  create(key: string, record: ClaimRecord): Promise<{ ok: boolean; etag?: string }>;
  /** CAS: write only if the current ETag matches (onlyIfMatch). `ok` false on mismatch/absence. */
  update(key: string, record: ClaimRecord, etag: string): Promise<{ ok: boolean; etag?: string }>;
}

export interface CommitResult {
  committed: boolean;
  /** True if the claim was reclaimed by another worker before we committed. */
  ownershipLost: boolean;
}

export interface ReleaseResult {
  released: boolean;
  /** True if the claim was reclaimed by another worker before we released. */
  ownershipLost: boolean;
}

export type AcquireDecision =
  | { decision: "already_sent" }
  | { decision: "in_flight" }
  | {
      decision: "send";
      owner: string;
      commit: () => Promise<CommitResult>;
      release: () => Promise<ReleaseResult>;
    };

const KEY_PREFIX = "purchase/";

/** Sentinel claimedAt marking a released (immediately reclaimable) claim. */
export const RELEASED_CLAIMED_AT = 0;

export function claimKey(sessionId: string): string {
  return `${KEY_PREFIX}stripe_cs_${sessionId}`;
}

export interface AcquireOptions {
  /** Current time in unix ms. Injectable for tests. */
  now?: number;
  /** How long (ms) before a "processing" claim is considered stale. */
  staleMs?: number;
  /** Unique token generator. Injectable for tests; defaults to crypto.randomUUID. */
  newToken?: () => string;
}

/**
 * Attempt to acquire the exclusive right to send the Purchase for a session.
 * Only the "send" decision hands back ownership-safe `commit()`/`release()`.
 */
export async function acquire(
  store: ClaimStore,
  sessionId: string,
  opts: AcquireOptions = {},
): Promise<AcquireDecision> {
  const now = opts.now ?? Date.now();
  const staleMs = opts.staleMs ?? 10 * 60 * 1000; // 10 minutes
  const newToken = opts.newToken ?? randomUUID;
  const key = claimKey(sessionId);

  const existing = await store.get(key);

  if (existing) {
    if (existing.value.status === "done") {
      return { decision: "already_sent" };
    }
    // status === "processing"
    const released = existing.value.claimedAt === RELEASED_CLAIMED_AT;
    const fresh = !released && now - existing.value.claimedAt < staleMs;
    if (fresh) {
      return { decision: "in_flight" };
    }
    // Stale or released -> exactly one worker may take it over, via CAS.
    const owner = newToken();
    const reclaim = await store.update(
      key,
      { status: "processing", owner, claimedAt: now },
      existing.etag,
    );
    if (!reclaim.ok || !reclaim.etag) {
      // Another worker reclaimed first.
      return { decision: "in_flight" };
    }
    return sendDecision(store, key, reclaim.etag, owner);
  }

  // No record -> try to create the claim atomically.
  const owner = newToken();
  const created = await store.create(key, { status: "processing", owner, claimedAt: now });
  if (!created.ok || !created.etag) {
    // Lost the create race to a concurrent delivery.
    return { decision: "in_flight" };
  }
  return sendDecision(store, key, created.etag, owner);
}

/**
 * Build the "send" decision. `etag` is the ETag this worker currently owns;
 * every subsequent mutation is a CAS against it, so ownership is enforced.
 */
function sendDecision(
  store: ClaimStore,
  key: string,
  etag: string,
  owner: string,
): AcquireDecision {
  return {
    decision: "send",
    owner,
    commit: async () => {
      const rec: ClaimRecord = { status: "done", owner, claimedAt: Date.now() };
      const res = await store.update(key, rec, etag);
      if (res.ok) return { committed: true, ownershipLost: false };
      // Ownership lost: a newer worker reclaimed this claim. Do NOT overwrite
      // it. The Purchase we already sent is deduplicated by the deterministic
      // Meta event_id (stripe_cs_<id>), so no double count results.
      return { committed: false, ownershipLost: true };
    },
    release: async () => {
      const rec: ClaimRecord = { status: "processing", owner, claimedAt: RELEASED_CLAIMED_AT };
      const res = await store.update(key, rec, etag);
      if (res.ok) return { released: true, ownershipLost: false };
      // Ownership lost: a newer worker owns the claim. Must NOT delete/clobber
      // it — leave the newer claim untouched.
      return { released: false, ownershipLost: true };
    },
  };
}

// ---------------------------------------------------------------------------
// Netlify Blobs adapter
// ---------------------------------------------------------------------------

/**
 * Live ClaimStore backed by Netlify Blobs. The store is created with strong
 * consistency, and every read is strongly consistent, so idempotency state is
 * never read from an eventually-consistent replica.
 */
export function netlifyBlobStore(storeName = "purchase-dedup"): ClaimStore {
  const store = getStore({ name: storeName, consistency: "strong" });

  return {
    async get(key) {
      const res = await store.getWithMetadata(key, { type: "text", consistency: "strong" });
      if (!res || !res.etag) return null;
      return { value: JSON.parse(res.data) as ClaimRecord, etag: res.etag };
    },
    async create(key, record) {
      const res = await store.set(key, JSON.stringify(record), { onlyIfNew: true });
      return { ok: res.modified, etag: res.etag };
    },
    async update(key, record, etag) {
      const res = await store.set(key, JSON.stringify(record), { onlyIfMatch: etag });
      return { ok: res.modified, etag: res.etag };
    },
  };
}
