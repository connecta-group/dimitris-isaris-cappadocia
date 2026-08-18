/**
 * Stripe webhook → Meta Conversions API Purchase.
 *
 * Flow:
 *   1. Verify the Stripe-Signature against the raw body using
 *      STRIPE_WEBHOOK_SECRET (no STRIPE_SECRET_KEY is used).
 *   2. Act only on a genuinely-paid Checkout Session:
 *        - checkout.session.completed with payment_status === "paid"
 *        - checkout.session.async_payment_succeeded
 *      Every other event is acknowledged with 200 and ignored.
 *   3. Atomically claim the session id so a Purchase is sent at most once,
 *      even across concurrent/retried deliveries.
 *   4. Send the server-side Purchase event to Meta, then mark the claim done.
 *      On Meta failure the claim is released and we return 5xx so Stripe retries.
 *
 * Logging discipline: no raw PII, no hashes, no secrets. Only Stripe object ids,
 * event type, the decision, currency/value, and Meta trace metadata.
 */

import type { Config, Context } from "@netlify/functions";
import { constructEvent, StripeSignatureError } from "../lib/stripe-signature.js";
import type { StripeCheckoutSession } from "../lib/stripe-signature.js";
import { acquire, netlifyBlobStore } from "../lib/idempotency.js";
import { buildPurchaseEvent, sendPurchaseEvent, MetaCapiError } from "../lib/meta-capi.js";

const HANDLED_EVENTS = new Set([
  "checkout.session.completed",
  "checkout.session.async_payment_succeeded",
]);

const EVENT_SOURCE_URL = "https://dimitris-isaris-cappadocia.netlify.app/";

function text(body: string, status: number): Response {
  return new Response(body, {
    status,
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}

/** Should this event actually produce a Purchase? */
function isPaidPurchase(eventType: string, session: StripeCheckoutSession): boolean {
  if (eventType === "checkout.session.async_payment_succeeded") return true;
  if (eventType === "checkout.session.completed") return session.payment_status === "paid";
  return false;
}

export default async (req: Request, _context: Context): Promise<Response> => {
  if (req.method !== "POST") return text("Method Not Allowed", 405);

  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const pixelId = process.env.META_PIXEL_ID;
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;
  const testEventCode = process.env.META_TEST_EVENT_CODE;

  if (!secret || !pixelId || !accessToken) {
    // Misconfiguration — do not reveal which var is missing beyond a generic note.
    console.error("[stripe-webhook] missing required environment configuration");
    return text("Server not configured", 500);
  }

  const rawBody = await req.text();
  const signature = req.headers.get("stripe-signature");

  let event;
  try {
    event = constructEvent(rawBody, signature, secret);
  } catch (err) {
    if (err instanceof StripeSignatureError) {
      console.warn(`[stripe-webhook] signature verification failed: ${err.message}`);
      return text("Invalid signature", 400);
    }
    console.error("[stripe-webhook] failed to parse event");
    return text("Bad Request", 400);
  }

  // Ignore everything we do not handle.
  if (!HANDLED_EVENTS.has(event.type)) {
    return text("Ignored", 200);
  }

  const session = event.data.object;

  if (!isPaidPurchase(event.type, session)) {
    console.log(
      `[stripe-webhook] ${event.type} not yet paid (status=${session.payment_status ?? "unknown"}) session=${session.id} — ignoring`,
    );
    return text("Ignored (not paid)", 200);
  }

  const amountMinor = session.amount_total;
  const currency = session.currency;
  if (typeof amountMinor !== "number" || !currency) {
    console.warn(`[stripe-webhook] session ${session.id} missing amount/currency — nothing to send`);
    return text("Ignored (no amount)", 200);
  }

  const store = netlifyBlobStore();

  let claim;
  try {
    claim = await acquire(store, session.id);
  } catch (err) {
    console.error(`[stripe-webhook] idempotency store error for session ${session.id}`);
    return text("Storage error", 503);
  }

  if (claim.decision === "already_sent") {
    console.log(`[stripe-webhook] session ${session.id} already sent — ack`);
    return text("Already processed", 200);
  }
  if (claim.decision === "in_flight") {
    console.log(`[stripe-webhook] session ${session.id} in flight — asking Stripe to retry`);
    return text("In progress", 503);
  }

  // decision === "send": we own the exclusive claim.
  const purchaseEvent = buildPurchaseEvent({
    sessionId: session.id,
    eventTime: event.created,
    amountMinor,
    currency,
    customerDetails: session.customer_details,
    eventSourceUrl: EVENT_SOURCE_URL,
  });

  try {
    const result = await sendPurchaseEvent(purchaseEvent, {
      pixelId,
      accessToken,
      testEventCode,
    });
    // The Purchase has already been accepted by Meta at this point. Record the
    // terminal state with an ownership-safe CAS. If ownership was lost (a stale
    // reclaim overtook us), we intentionally do not overwrite the newer claim —
    // Meta dedupes on the deterministic event_id, so no double count occurs.
    const commit = await claim.commit().catch(() => ({ committed: false, ownershipLost: true }));
    console.log(
      `[stripe-webhook] Purchase sent session=${session.id} value=${purchaseEvent.custom_data.value} ${purchaseEvent.custom_data.currency} events_received=${result.eventsReceived ?? "?"} fbtrace=${result.fbtraceId ?? "?"} committed=${commit.committed} ownership_lost=${commit.ownershipLost}`,
    );
    return text("OK", 200);
  } catch (err) {
    // Meta send failed. Release our claim with an ownership-safe CAS so a Stripe
    // retry can re-acquire cleanly. If ownership was already lost to a newer
    // worker, release is a no-op and must never delete that newer claim.
    const release = await claim
      .release()
      .catch(() => ({ released: false, ownershipLost: true }));
    const message = err instanceof MetaCapiError ? err.message : "unexpected error";
    console.error(
      `[stripe-webhook] Meta send failed session=${session.id}: ${message} released=${release.released} ownership_lost=${release.ownershipLost}`,
    );
    return text("Upstream send failed", 502);
  }
};

export const config: Config = {
  path: "/.netlify/functions/stripe-webhook",
};
