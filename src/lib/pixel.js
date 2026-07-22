/**
 * Meta Pixel helpers.
 *
 * The base pixel (init + PageView) is loaded once in index.html. These wrappers
 * fire additional events from React click handlers. Every call is guarded, so
 * if the pixel is blocked (ad blocker, consent tooling, offline) nothing throws
 * and no console error appears — the click still proceeds normally.
 */

function fbq() {
  return typeof window !== "undefined" && typeof window.fbq === "function"
    ? window.fbq
    : null;
}

/** Standard Meta event, e.g. "InitiateCheckout". */
export function track(event, params) {
  const f = fbq();
  if (f) f("track", event, params);
}

/** Custom (non-standard) Meta event, e.g. "DownloadBrochure". */
export function trackCustom(event, params) {
  const f = fbq();
  if (f) f("trackCustom", event, params);
}
