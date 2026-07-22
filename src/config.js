/**
 * ============================================================
 *  SITE CONFIGURATION — edit everything from this one file.
 * ============================================================
 *  Change any value below and the whole website updates.
 */

export const EVENT_NAME = "Dimitris Isaris — A Cappadocia Experience";
export const EVENT_SUBTITLE = "A Cappadocia Experience";
export const EVENT_EYEBROW = "Exclusive Event";
export const EVENT_DATE = "25–28 September";
export const EVENT_DURATION = "3 Nights · 4 Days";

/**
 * Start instant used by the countdown timer. The +03:00 offset pins it to
 * Türkiye time (TRT, no DST), so the countdown targets the same moment for
 * every visitor regardless of their own timezone. 25 September 2026, 15:00 TRT.
 */
export const EVENT_DATE_ISO = "2026-09-25T15:00:00+03:00";

export const EMAIL = "contact@dimitrisisaris.com";
export const PHONE = "+90 543 151 63 39";
/** Digits only — used for tel: links */
export const PHONE_RAW = "905431516339";

export const INSTAGRAM = "https://www.instagram.com/dimitris_isaris";
export const FACEBOOK = "https://www.facebook.com/DimitrisIsarisofficial";
export const YOUTUBE = "https://www.youtube.com/@dimitris_isaris";

/** Newsletter sign-up — the official page linked from the Instagram bio. */
export const NEWSLETTER_URL = "https://dimitrisisaris.subscribepage.io";
export const GOOGLE_MAPS =
  "https://www.google.com/maps/search/?api=1&query=%C3%9Crg%C3%BCp%2C%20Cappadocia%2C%20T%C3%BCrkiye";
export const GOOGLE_MAPS_EMBED =
  "https://www.google.com/maps?q=%C3%9Crg%C3%BCp,%20Nev%C5%9Fehir,%20T%C3%BCrkiye&z=12&output=embed";

/**
 * Stripe Payment Link — the only payment surface this site has.
 * Set VITE_STRIPE_PAYMENT_LINK in .env locally and in the Netlify
 * environment. This is the public Payment Link only; no secret key
 * belongs in the frontend.
 */
export const STRIPE_PAYMENT_LINK =
  import.meta.env.VITE_STRIPE_PAYMENT_LINK ||
  "https://buy.stripe.com/8x2dR9cblfm8awe7kj5wI03";
export const HAS_STRIPE_LINK = Boolean(STRIPE_PAYMENT_LINK);

/** Every booking CTA points at Stripe once the link is configured. */
export const BOOKING_LINK = STRIPE_PAYMENT_LINK || "#reservation";

/** The downloadable brochure. Place your JPEG at /public/programme.jpg */
export const PROGRAMME_IMAGE = "/programme.jpg";
/** Filename the guest's browser saves it as */
export const PROGRAMME_FILENAME = "Dimitris-Isaris-Cappadocia-Programme.jpg";
/** Kept as an alias so older references keep working */
export const DOWNLOAD_PROGRAM_LINK = PROGRAMME_IMAGE;

/** Paste a YouTube or Vimeo link here. Opens in a new tab. */
export const VIDEO_URL =
  "https://www.instagram.com/reel/DbG-JyPqw19/?igsh=aGx0dHR4cHZoNzB0";
/** Alias */
export const VIDEO_LINK = VIDEO_URL;

export const PRICE = "€849";
export const PRICE_NOTE = "per person";

/** Availability is presented as a phrase, never a count. */
export const AVAILABILITY_LABEL = "Very Limited Availability";
export const AVAILABILITY_NOTE = "A small group experience";

export const SITE_URL = "https://dimitrisisaris-cappadocia.netlify.app";
export const LOCATION_LABEL = "Cappadocia, Türkiye";
export const LOCATION_SHORT = "Cappadocia";
/** The accommodation and event base */
export const LOCATION_BASE = "Ürgüp, Cappadocia, Türkiye";

/** The recommended arrival airport, shown in the Location section */
export const AIRPORTS = [
  {
    code: "NAV",
    name: "Nevşehir Kapadokya Airport",
    distance: "Approximately 40 minutes by private transfer.",
    note: "The recommended arrival airport for this experience.",
  },
];

/** Hotel information shown in the Location section */
export const HOTELS = [
  {
    name: "Cave Suite Collection",
    detail: "Hand-carved stone suites in the heart of Ürgüp.",
  },
];

export const SOCIAL_LINKS = [
  { label: "Instagram", href: INSTAGRAM, icon: "instagram" },
  { label: "Facebook", href: FACEBOOK, icon: "facebook" },
  { label: "YouTube", href: YOUTUBE, icon: "youtube" },
];

/** Legal links in the footer */
export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Cookies", href: "/cookie-policy" },
];

export const COPYRIGHT = `© ${new Date().getFullYear()} Dimitris Isaris. All rights reserved.`;


export default {
  EVENT_NAME,
  EVENT_SUBTITLE,
  EVENT_EYEBROW,
  EVENT_DATE,
  EVENT_DURATION,
  EVENT_DATE_ISO,
  EMAIL,
  PHONE,
  PHONE_RAW,
  INSTAGRAM,
  FACEBOOK,
  YOUTUBE,
  NEWSLETTER_URL,
  GOOGLE_MAPS,
  GOOGLE_MAPS_EMBED,
  STRIPE_PAYMENT_LINK,
  HAS_STRIPE_LINK,
  BOOKING_LINK,
  PROGRAMME_IMAGE,
  PROGRAMME_FILENAME,
  DOWNLOAD_PROGRAM_LINK,
  VIDEO_URL,
  VIDEO_LINK,
  PRICE,
  PRICE_NOTE,
  AVAILABILITY_LABEL,
  AVAILABILITY_NOTE,
  SITE_URL,
  LOCATION_LABEL,
  LOCATION_SHORT,
  LOCATION_BASE,
  AIRPORTS,
  HOTELS,
  SOCIAL_LINKS,
  LEGAL_LINKS,
  COPYRIGHT,
};
