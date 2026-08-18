/**
 * Meta Conversions API — server-side Purchase event.
 *
 * This module builds and sends a standard `Purchase` event to the Meta
 * Conversions API after Stripe has confirmed a payment. It also owns all of the
 * customer-data normalisation and SHA-256 hashing required by Meta.
 *
 * PII rules enforced here:
 *   - customer identifiers are normalised then SHA-256 hashed before they leave
 *     this process;
 *   - raw PII is never logged;
 *   - hashes are never logged;
 *   - the access token is never placed in a URL and never logged.
 */

import { createHash } from "node:crypto";

/** Graph API version the Conversions API requests target. */
const GRAPH_API_VERSION = "v21.0";

/** SHA-256 hex digest of a UTF-8 string. */
export function sha256(value: string): string {
  return createHash("sha256").update(value, "utf8").digest("hex");
}

// ---------------------------------------------------------------------------
// Normalisation (per Meta's Advanced Matching requirements)
// ---------------------------------------------------------------------------

export function normalizeEmail(email?: string | null): string | undefined {
  if (!email) return undefined;
  const v = email.trim().toLowerCase();
  return v || undefined;
}

/** Digits only. Meta expects country code + number with no symbols or spaces. */
export function normalizePhone(phone?: string | null): string | undefined {
  if (!phone) return undefined;
  const v = phone.replace(/[^0-9]/g, "");
  return v || undefined;
}

/** Lowercased, trimmed, internal whitespace collapsed. */
export function normalizeName(name?: string | null): string | undefined {
  if (!name) return undefined;
  const v = name.trim().toLowerCase().replace(/\s+/g, " ");
  return v || undefined;
}

/** City: lowercase, letters only (spaces/punctuation removed). */
export function normalizeCity(city?: string | null): string | undefined {
  if (!city) return undefined;
  const v = city.trim().toLowerCase().replace(/[^a-z]/g, "");
  return v || undefined;
}

/** State/region: lowercase, letters only. */
export function normalizeState(state?: string | null): string | undefined {
  if (!state) return undefined;
  const v = state.trim().toLowerCase().replace(/[^a-z]/g, "");
  return v || undefined;
}

/** Zip/postal code: lowercase, whitespace removed. */
export function normalizeZip(zip?: string | null): string | undefined {
  if (!zip) return undefined;
  const v = zip.trim().toLowerCase().replace(/\s+/g, "");
  return v || undefined;
}

/** Country: ISO-3166-1 alpha-2, lowercase. Anything else is dropped. */
export function normalizeCountry(country?: string | null): string | undefined {
  if (!country) return undefined;
  const v = country.trim().toLowerCase();
  return /^[a-z]{2}$/.test(v) ? v : undefined;
}

/**
 * Split a full name into first/last. Best-effort: first token is the first
 * name, everything after it is the last name.
 */
export function splitName(name?: string | null): { first?: string; last?: string } {
  const n = normalizeName(name);
  if (!n) return {};
  const parts = n.split(" ");
  if (parts.length === 1) return { first: parts[0] };
  return { first: parts[0], last: parts.slice(1).join(" ") };
}

// ---------------------------------------------------------------------------
// Currency conversion (Stripe minor units -> Meta major-unit value)
// ---------------------------------------------------------------------------

/**
 * Stripe reports amounts in the smallest unit of the currency. Meta wants the
 * value in major units (e.g. 699.00 EUR). The exponent depends on the currency.
 */
const ZERO_DECIMAL_CURRENCIES = new Set([
  "bif", "clp", "djf", "gnf", "jpy", "kmf", "krw", "mga", "pyg", "rwf",
  "ugx", "vnd", "vuv", "xaf", "xof", "xpf",
]);

const THREE_DECIMAL_CURRENCIES = new Set(["bhd", "jod", "kwd", "omr", "tnd"]);

/** Number of decimal places Stripe uses for the given ISO currency code. */
export function currencyExponent(currency: string): number {
  const c = currency.trim().toLowerCase();
  if (ZERO_DECIMAL_CURRENCIES.has(c)) return 0;
  if (THREE_DECIMAL_CURRENCIES.has(c)) return 3;
  return 2;
}

/**
 * Convert a Stripe minor-unit integer amount to a major-unit number using the
 * currency's exponent. E.g. (69900, "eur") -> 699, (500, "jpy") -> 500.
 */
export function stripeAmountToMajorUnits(amountMinor: number, currency: string): number {
  if (!Number.isFinite(amountMinor)) {
    throw new MetaCapiError("Invalid Stripe amount");
  }
  const exp = currencyExponent(currency);
  const divisor = 10 ** exp;
  return Number((amountMinor / divisor).toFixed(exp));
}

// ---------------------------------------------------------------------------
// Event construction
// ---------------------------------------------------------------------------

/** Subset of Stripe `customer_details` we read. */
export interface CustomerDetails {
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  address?: {
    city?: string | null;
    state?: string | null;
    postal_code?: string | null;
    country?: string | null;
  } | null;
}

/** Meta `user_data` object — every field here is already SHA-256 hashed. */
export interface HashedUserData {
  em?: string;
  ph?: string;
  fn?: string;
  ln?: string;
  ct?: string;
  st?: string;
  zp?: string;
  country?: string;
}

/**
 * Build the hashed `user_data` block from Stripe customer details. Only fields
 * that are actually present (after normalisation) are included, and each value
 * is SHA-256 hashed. No client IP / user agent is included: the webhook request
 * comes from Stripe, not the buyer, so those would be misleading.
 */
export function buildUserData(details?: CustomerDetails | null): HashedUserData {
  const out: HashedUserData = {};
  if (!details) return out;

  const em = normalizeEmail(details.email);
  if (em) out.em = sha256(em);

  const ph = normalizePhone(details.phone);
  if (ph) out.ph = sha256(ph);

  const { first, last } = splitName(details.name);
  if (first) out.fn = sha256(first);
  if (last) out.ln = sha256(last);

  const addr = details.address ?? undefined;
  if (addr) {
    const ct = normalizeCity(addr.city);
    if (ct) out.ct = sha256(ct);
    const st = normalizeState(addr.state);
    if (st) out.st = sha256(st);
    const zp = normalizeZip(addr.postal_code);
    if (zp) out.zp = sha256(zp);
    const country = normalizeCountry(addr.country);
    if (country) out.country = sha256(country);
  }

  return out;
}

export interface PurchaseEventInput {
  /** Stripe Checkout Session id — drives the deterministic event_id. */
  sessionId: string;
  /** Unix seconds when the payment was confirmed. */
  eventTime: number;
  /** Amount actually collected, in Stripe minor units. */
  amountMinor: number;
  /** ISO currency code from Stripe (lowercase). */
  currency: string;
  customerDetails?: CustomerDetails | null;
  /** Optional URL where the conversion is attributed. */
  eventSourceUrl?: string;
}

export interface PurchaseServerEvent {
  event_name: "Purchase";
  event_time: number;
  event_id: string;
  action_source: "website";
  event_source_url?: string;
  user_data: HashedUserData;
  custom_data: {
    currency: string;
    value: number;
  };
}

/**
 * Build a Meta server event for a confirmed purchase. `event_id` is
 * deterministic (`stripe_cs_<session_id>`) so Meta can dedupe against the
 * browser Pixel and against retried webhook deliveries.
 */
export function buildPurchaseEvent(input: PurchaseEventInput): PurchaseServerEvent {
  const value = stripeAmountToMajorUnits(input.amountMinor, input.currency);
  const event: PurchaseServerEvent = {
    event_name: "Purchase",
    event_time: input.eventTime,
    event_id: `stripe_cs_${input.sessionId}`,
    action_source: "website",
    user_data: buildUserData(input.customerDetails),
    custom_data: {
      currency: input.currency.toUpperCase(),
      value,
    },
  };
  if (input.eventSourceUrl) event.event_source_url = input.eventSourceUrl;
  return event;
}

// ---------------------------------------------------------------------------
// Sending
// ---------------------------------------------------------------------------

export class MetaCapiError extends Error {
  readonly status?: number;
  constructor(message: string, status?: number) {
    super(message);
    this.name = "MetaCapiError";
    this.status = status;
  }
}

export interface SendPurchaseOptions {
  pixelId: string;
  accessToken: string;
  /** Included only when set — keeps events in Meta's Test Events tab. */
  testEventCode?: string;
  /** Injectable for tests; defaults to global fetch. */
  fetchImpl?: typeof fetch;
}

export interface MetaCapiResult {
  eventsReceived?: number;
  fbtraceId?: string;
}

/**
 * POST the purchase event to the Meta Conversions API. The access token is sent
 * in the request body (never in the URL) so it cannot leak through URL logging.
 * On any non-2xx or Meta error payload this throws MetaCapiError; the caller is
 * expected to release its idempotency claim and let Stripe retry.
 */
export async function sendPurchaseEvent(
  event: PurchaseServerEvent,
  opts: SendPurchaseOptions,
): Promise<MetaCapiResult> {
  const doFetch = opts.fetchImpl ?? fetch;
  const url = `https://graph.facebook.com/${GRAPH_API_VERSION}/${opts.pixelId}/events`;

  const body: Record<string, unknown> = {
    data: [event],
    access_token: opts.accessToken,
  };
  if (opts.testEventCode) body.test_event_code = opts.testEventCode;

  let response: Response;
  try {
    response = await doFetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch (err) {
    // Network-level failure — surface a generic message, never the token/URL.
    throw new MetaCapiError(
      `Meta CAPI request failed: ${err instanceof Error ? err.message : "network error"}`,
    );
  }

  let payload: unknown = undefined;
  const text = await response.text();
  if (text) {
    try {
      payload = JSON.parse(text);
    } catch {
      payload = undefined;
    }
  }

  if (!response.ok) {
    const message = extractMetaErrorMessage(payload) ?? `HTTP ${response.status}`;
    throw new MetaCapiError(`Meta CAPI rejected event: ${message}`, response.status);
  }

  const obj = (payload ?? {}) as Record<string, unknown>;
  const result: MetaCapiResult = {};
  if (typeof obj.events_received === "number") result.eventsReceived = obj.events_received;
  if (typeof obj.fbtrace_id === "string") result.fbtraceId = obj.fbtrace_id;
  return result;
}

/** Pull a human-readable message out of a Meta error body (contains no secret). */
function extractMetaErrorMessage(payload: unknown): string | undefined {
  if (payload && typeof payload === "object" && "error" in payload) {
    const error = (payload as { error?: unknown }).error;
    if (error && typeof error === "object" && "message" in error) {
      const message = (error as { message?: unknown }).message;
      if (typeof message === "string") return message;
    }
  }
  return undefined;
}
