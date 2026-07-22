import Icon from "./Icon";
import { track } from "../lib/pixel";
import { useLang } from "../i18n/LanguageProvider";
import {
  EMAIL,
  EVENT_DATE,
  EVENT_DURATION,
  HAS_STRIPE_LINK,
  PRICE,
  PRICE_NOTE,
  STRIPE_PAYMENT_LINK,
} from "../config";

export default function Reservation() {
  const { t } = useLang();
  return (
    <section className="section" id="reservation">
      <div className="shell">
        <div className="section-head section-head--split">
          <p className="eyebrow reveal">{t.booking.eyebrow}</p>
          <h2 className="section-title reveal">
            {t.booking.titleTop} <em>{t.booking.titleEm}</em>
          </h2>
          <p className="lede reveal" data-delay="1">
            {t.booking.lede}
          </p>
        </div>

        <div className="booking reveal">
          <div className="booking__facts">
            <p className="booking__price">{PRICE}</p>
            <p className="booking__priceNote">{PRICE_NOTE}</p>

            <dl className="booking__meta">
              <div>
                <dt>{t.booking.datesLabel}</dt>
                <dd>{EVENT_DATE} 2026</dd>
              </div>
              <div>
                <dt>{t.booking.durationLabel}</dt>
                <dd>{EVENT_DURATION}</dd>
              </div>
            </dl>

            <p className="availability availability--dark">
              <span className="dot-pulse" aria-hidden="true" />
              <span className="availability__text">
                <b>{t.availability.label}</b>
                <i>{t.availability.note}</i>
              </span>
            </p>
          </div>

          <div className="booking__action">
            {HAS_STRIPE_LINK ? (
              <a
                className="btn btn--block booking__cta"
                href={STRIPE_PAYMENT_LINK}
                onClick={() => track("InitiateCheckout")}
              >
                {t.booking.cta}
              </a>
            ) : (
              <>
                <button
                  className="btn btn--block booking__cta"
                  type="button"
                  disabled
                  aria-describedby="stripe-config-note"
                >
                  {t.booking.cta}
                </button>
                <p className="booking__config" id="stripe-config-note" role="status">
                  {t.booking.configNote1}{" "}
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a> {t.booking.configNote2}
                </p>
              </>
            )}

            <p className="booking__secure">
              <Icon name="star" size={15} aria-hidden="true" />
              {t.booking.secure}
            </p>

            <p className="booking__after">
              {t.booking.after}
            </p>

            <p className="booking__contact">
              {t.booking.contactPre}
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
