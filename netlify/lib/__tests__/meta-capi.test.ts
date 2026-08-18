import { describe, it, expect } from "vitest";
import { createHash } from "node:crypto";
import {
  sha256,
  normalizeEmail,
  normalizePhone,
  normalizeName,
  normalizeCity,
  normalizeState,
  normalizeZip,
  normalizeCountry,
  splitName,
  currencyExponent,
  stripeAmountToMajorUnits,
  buildUserData,
  buildPurchaseEvent,
  sendPurchaseEvent,
  MetaCapiError,
} from "../meta-capi.js";

const hex = (v: string) => createHash("sha256").update(v, "utf8").digest("hex");

describe("sha256", () => {
  it("matches a known digest", () => {
    expect(sha256("test@example.com")).toBe(hex("test@example.com"));
    expect(sha256("test@example.com")).toHaveLength(64);
  });
});

describe("normalisation", () => {
  it("lowercases and trims email", () => {
    expect(normalizeEmail("  Foo@Example.COM ")).toBe("foo@example.com");
    expect(normalizeEmail("")).toBeUndefined();
    expect(normalizeEmail(null)).toBeUndefined();
  });

  it("strips non-digits from phone", () => {
    expect(normalizePhone("+30 (694) 123-4567")).toBe("306941234567");
    expect(normalizePhone("abc")).toBeUndefined();
  });

  it("normalises names", () => {
    expect(normalizeName("  María   Papadópoulou ")).toBe("maría papadópoulou");
  });

  it("keeps only letters for city and state", () => {
    expect(normalizeCity("São Paulo")).toBe("sopaulo");
    expect(normalizeState("N. Aegean 2")).toBe("naegean");
  });

  it("normalises zip and country", () => {
    expect(normalizeZip(" SW1A 1AA ")).toBe("sw1a1aa");
    expect(normalizeCountry("GR")).toBe("gr");
    expect(normalizeCountry("Greece")).toBeUndefined();
  });

  it("splits names best-effort", () => {
    expect(splitName("Jane Doe")).toEqual({ first: "jane", last: "doe" });
    expect(splitName("Jane van der Berg")).toEqual({ first: "jane", last: "van der berg" });
    expect(splitName("Cher")).toEqual({ first: "cher" });
    expect(splitName("")).toEqual({});
  });
});

describe("currency conversion", () => {
  it("uses the correct exponent per currency", () => {
    expect(currencyExponent("eur")).toBe(2);
    expect(currencyExponent("JPY")).toBe(0);
    expect(currencyExponent("bhd")).toBe(3);
  });

  it("converts minor units to major units", () => {
    expect(stripeAmountToMajorUnits(69900, "eur")).toBe(699);
    expect(stripeAmountToMajorUnits(35000, "eur")).toBe(350);
    expect(stripeAmountToMajorUnits(500, "jpy")).toBe(500);
    expect(stripeAmountToMajorUnits(1234, "bhd")).toBe(1.234);
    expect(stripeAmountToMajorUnits(199, "usd")).toBe(1.99);
  });

  it("throws on a non-finite amount", () => {
    expect(() => stripeAmountToMajorUnits(NaN, "eur")).toThrow(MetaCapiError);
  });
});

describe("buildUserData", () => {
  const details = {
    email: "Buyer@Example.com",
    name: "Jane Doe",
    phone: "+30 694 123 4567",
    address: { city: "Athens", state: "Attica", postal_code: "104 31", country: "GR" },
  };

  it("hashes every present identifier", () => {
    const ud = buildUserData(details);
    expect(ud.em).toBe(hex("buyer@example.com"));
    expect(ud.ph).toBe(hex("306941234567"));
    expect(ud.fn).toBe(hex("jane"));
    expect(ud.ln).toBe(hex("doe"));
    expect(ud.ct).toBe(hex("athens"));
    expect(ud.st).toBe(hex("attica"));
    expect(ud.zp).toBe(hex("10431"));
    expect(ud.country).toBe(hex("gr"));
  });

  it("never leaks raw PII in its output", () => {
    const ud = buildUserData(details);
    const serialized = JSON.stringify(ud);
    for (const raw of ["Buyer", "example.com", "Jane", "Doe", "Athens", "694"]) {
      expect(serialized.includes(raw)).toBe(false);
    }
  });

  it("omits fields that are absent", () => {
    const ud = buildUserData({ email: "a@b.com" });
    expect(ud.em).toBeDefined();
    expect(ud.ph).toBeUndefined();
    expect(ud.fn).toBeUndefined();
    expect(ud.ct).toBeUndefined();
  });

  it("returns an empty object for no details", () => {
    expect(buildUserData(null)).toEqual({});
  });
});

describe("buildPurchaseEvent", () => {
  const base = {
    sessionId: "cs_test_123",
    eventTime: 1_700_000_000,
    amountMinor: 69900,
    currency: "eur",
    customerDetails: { email: "buyer@example.com" },
    eventSourceUrl: "https://example.com/",
  };

  it("produces a deterministic event_id from the session id", () => {
    expect(buildPurchaseEvent(base).event_id).toBe("stripe_cs_cs_test_123");
    expect(buildPurchaseEvent(base).event_id).toBe(buildPurchaseEvent(base).event_id);
  });

  it("carries the Stripe value and uppercased currency", () => {
    const e = buildPurchaseEvent(base);
    expect(e.event_name).toBe("Purchase");
    expect(e.action_source).toBe("website");
    expect(e.event_time).toBe(1_700_000_000);
    expect(e.custom_data).toEqual({ currency: "EUR", value: 699 });
    expect(e.event_source_url).toBe("https://example.com/");
  });

  it("omits event_source_url when not supplied", () => {
    const { eventSourceUrl, ...rest } = base;
    void eventSourceUrl;
    expect(buildPurchaseEvent(rest).event_source_url).toBeUndefined();
  });
});

describe("sendPurchaseEvent", () => {
  const event = buildPurchaseEvent({
    sessionId: "cs_1",
    eventTime: 1,
    amountMinor: 69900,
    currency: "eur",
    customerDetails: { email: "buyer@example.com" },
  });

  it("posts to Meta with token in the body (never the URL) and returns trace data", async () => {
    let capturedUrl = "";
    let capturedBody: any = null;
    const fakeFetch: typeof fetch = async (url, init) => {
      capturedUrl = String(url);
      capturedBody = JSON.parse(String(init?.body));
      return new Response(JSON.stringify({ events_received: 1, fbtrace_id: "trace_abc" }), {
        status: 200,
      });
    };

    const res = await sendPurchaseEvent(event, {
      pixelId: "PIXEL123",
      accessToken: "SECRET_TOKEN",
      testEventCode: "TEST42",
      fetchImpl: fakeFetch,
    });

    expect(capturedUrl).toContain("/PIXEL123/events");
    expect(capturedUrl).not.toContain("SECRET_TOKEN");
    expect(capturedBody.access_token).toBe("SECRET_TOKEN");
    expect(capturedBody.test_event_code).toBe("TEST42");
    expect(capturedBody.data[0].event_name).toBe("Purchase");
    expect(res).toEqual({ eventsReceived: 1, fbtraceId: "trace_abc" });
  });

  it("omits test_event_code when not provided", async () => {
    let capturedBody: any = null;
    const fakeFetch: typeof fetch = async (_url, init) => {
      capturedBody = JSON.parse(String(init?.body));
      return new Response(JSON.stringify({ events_received: 1 }), { status: 200 });
    };
    await sendPurchaseEvent(event, {
      pixelId: "P",
      accessToken: "T",
      fetchImpl: fakeFetch,
    });
    expect("test_event_code" in capturedBody).toBe(false);
  });

  it("throws MetaCapiError on a non-2xx response", async () => {
    const fakeFetch: typeof fetch = async () =>
      new Response(JSON.stringify({ error: { message: "Invalid parameter" } }), { status: 400 });
    await expect(
      sendPurchaseEvent(event, { pixelId: "P", accessToken: "T", fetchImpl: fakeFetch }),
    ).rejects.toThrow(/Invalid parameter/);
  });

  it("throws MetaCapiError on a network failure", async () => {
    const fakeFetch: typeof fetch = async () => {
      throw new Error("connection reset");
    };
    await expect(
      sendPurchaseEvent(event, { pixelId: "P", accessToken: "T", fetchImpl: fakeFetch }),
    ).rejects.toThrow(MetaCapiError);
  });
});
