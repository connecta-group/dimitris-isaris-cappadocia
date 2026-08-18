import { describe, it, expect } from "vitest";
import { createHmac } from "node:crypto";
import {
  verifyStripeSignature,
  constructEvent,
  StripeSignatureError,
} from "../stripe-signature.js";

const SECRET = "whsec_test_secret_value";

/** Build a valid Stripe-Signature header for a payload at a given timestamp. */
function signHeader(payload: string, timestamp: number, secret = SECRET): string {
  const sig = createHmac("sha256", secret).update(`${timestamp}.${payload}`, "utf8").digest("hex");
  return `t=${timestamp},v1=${sig}`;
}

const NOW = 1_700_000_000;
const PAYLOAD = JSON.stringify({ id: "evt_1", type: "checkout.session.completed" });

describe("verifyStripeSignature", () => {
  it("accepts a valid signature within tolerance", () => {
    const header = signHeader(PAYLOAD, NOW);
    expect(() => verifyStripeSignature(PAYLOAD, header, SECRET, { nowSeconds: NOW })).not.toThrow();
  });

  it("rejects a tampered payload", () => {
    const header = signHeader(PAYLOAD, NOW);
    expect(() =>
      verifyStripeSignature(PAYLOAD + "x", header, SECRET, { nowSeconds: NOW }),
    ).toThrow(StripeSignatureError);
  });

  it("rejects a wrong secret", () => {
    const header = signHeader(PAYLOAD, NOW, "whsec_other");
    expect(() =>
      verifyStripeSignature(PAYLOAD, header, SECRET, { nowSeconds: NOW }),
    ).toThrow(StripeSignatureError);
  });

  it("rejects a missing header", () => {
    expect(() => verifyStripeSignature(PAYLOAD, null, SECRET, { nowSeconds: NOW })).toThrow(
      /Missing Stripe-Signature/,
    );
  });

  it("rejects a malformed header", () => {
    expect(() =>
      verifyStripeSignature(PAYLOAD, "not-a-valid-header", SECRET, { nowSeconds: NOW }),
    ).toThrow(StripeSignatureError);
  });

  it("rejects a timestamp outside tolerance", () => {
    const header = signHeader(PAYLOAD, NOW - 10_000);
    expect(() =>
      verifyStripeSignature(PAYLOAD, header, SECRET, { nowSeconds: NOW, toleranceSeconds: 300 }),
    ).toThrow(/tolerance/);
  });

  it("accepts when one of several v1 signatures matches", () => {
    const valid = createHmac("sha256", SECRET)
      .update(`${NOW}.${PAYLOAD}`, "utf8")
      .digest("hex");
    const header = `t=${NOW},v1=deadbeef,v1=${valid}`;
    expect(() => verifyStripeSignature(PAYLOAD, header, SECRET, { nowSeconds: NOW })).not.toThrow();
  });

  it("rejects an empty secret", () => {
    const header = signHeader(PAYLOAD, NOW);
    expect(() => verifyStripeSignature(PAYLOAD, header, "", { nowSeconds: NOW })).toThrow(
      /secret/,
    );
  });
});

describe("constructEvent", () => {
  it("returns the parsed event on a valid signature", () => {
    const header = signHeader(PAYLOAD, NOW);
    const event = constructEvent(PAYLOAD, header, SECRET, { nowSeconds: NOW });
    expect(event.id).toBe("evt_1");
    expect(event.type).toBe("checkout.session.completed");
  });

  it("throws on invalid JSON even with a valid signature", () => {
    const bad = "{not json";
    const header = signHeader(bad, NOW);
    expect(() => constructEvent(bad, header, SECRET, { nowSeconds: NOW })).toThrow(
      /Invalid JSON/,
    );
  });
});
