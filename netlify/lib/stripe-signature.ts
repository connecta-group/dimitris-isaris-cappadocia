/**
 * Stripe webhook signature verification.
 *
 * Implemented directly against the documented Stripe signing scheme using
 * Node's crypto, so we depend on neither the Stripe SDK nor STRIPE_SECRET_KEY.
 * Only STRIPE_WEBHOOK_SECRET (the endpoint's `whsec_…` value) is required.
 *
 * Scheme:
 *   header  = "t=<timestamp>,v1=<sig>[,v1=<sig>…]"
 *   signed  = "<timestamp>.<raw-body>"
 *   sig     = hex( HMAC-SHA256(signed, webhook_secret) )
 */

import { createHmac, timingSafeEqual } from "node:crypto";

export class StripeSignatureError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "StripeSignatureError";
  }
}

/** Minimal shape of a Stripe event we care about. */
export interface StripeEvent {
  id: string;
  type: string;
  created: number;
  data: { object: StripeCheckoutSession };
}

/** Minimal shape of a Stripe Checkout Session. */
export interface StripeCheckoutSession {
  id: string;
  object: string;
  payment_status?: string | null;
  amount_total?: number | null;
  currency?: string | null;
  customer_details?: {
    email?: string | null;
    name?: string | null;
    phone?: string | null;
    address?: {
      city?: string | null;
      state?: string | null;
      postal_code?: string | null;
      country?: string | null;
    } | null;
  } | null;
}

interface ParsedSignatureHeader {
  timestamp: number;
  signatures: string[];
}

function parseSignatureHeader(header: string): ParsedSignatureHeader {
  let timestamp = NaN;
  const signatures: string[] = [];
  for (const part of header.split(",")) {
    const idx = part.indexOf("=");
    if (idx === -1) continue;
    const key = part.slice(0, idx).trim();
    const value = part.slice(idx + 1).trim();
    if (key === "t") timestamp = Number(value);
    else if (key === "v1") signatures.push(value);
  }
  return { timestamp, signatures };
}

/** Constant-time compare of two hex signature strings. */
function signaturesMatch(expectedHex: string, candidateHex: string): boolean {
  if (expectedHex.length !== candidateHex.length) return false;
  let a: Buffer;
  let b: Buffer;
  try {
    a = Buffer.from(expectedHex, "hex");
    b = Buffer.from(candidateHex, "hex");
  } catch {
    return false;
  }
  if (a.length !== b.length || a.length === 0) return false;
  return timingSafeEqual(a, b);
}

export interface VerifyOptions {
  /** Max allowed age of the signed timestamp, in seconds. Default 300. */
  toleranceSeconds?: number;
  /** Current time in unix seconds. Injectable for tests. */
  nowSeconds?: number;
}

/**
 * Verify a Stripe-Signature header against the raw payload. Throws
 * StripeSignatureError on any failure (missing/malformed header, timestamp
 * outside tolerance, or no matching signature).
 */
export function verifyStripeSignature(
  payload: string,
  header: string | null | undefined,
  secret: string,
  opts: VerifyOptions = {},
): void {
  if (!secret) throw new StripeSignatureError("Missing webhook secret");
  if (!header) throw new StripeSignatureError("Missing Stripe-Signature header");

  const { timestamp, signatures } = parseSignatureHeader(header);
  if (!Number.isFinite(timestamp) || signatures.length === 0) {
    throw new StripeSignatureError("Malformed Stripe-Signature header");
  }

  const tolerance = opts.toleranceSeconds ?? 300;
  const now = opts.nowSeconds ?? Math.floor(Date.now() / 1000);
  if (Math.abs(now - timestamp) > tolerance) {
    throw new StripeSignatureError("Timestamp outside tolerance window");
  }

  const expected = createHmac("sha256", secret)
    .update(`${timestamp}.${payload}`, "utf8")
    .digest("hex");

  const matched = signatures.some((sig) => signaturesMatch(expected, sig));
  if (!matched) throw new StripeSignatureError("No matching signature");
}

/**
 * Verify the signature and return the parsed event. Throws
 * StripeSignatureError if verification fails or the body is not valid JSON.
 */
export function constructEvent(
  payload: string,
  header: string | null | undefined,
  secret: string,
  opts: VerifyOptions = {},
): StripeEvent {
  verifyStripeSignature(payload, header, secret, opts);
  try {
    return JSON.parse(payload) as StripeEvent;
  } catch {
    throw new StripeSignatureError("Invalid JSON payload");
  }
}
