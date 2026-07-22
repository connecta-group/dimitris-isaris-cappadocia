import Icon from "./Icon";
import { track } from "../lib/pixel";
import {
  AVAILABILITY_LABEL,
  AVAILABILITY_NOTE,
  EMAIL,
  EVENT_DATE,
  EVENT_DURATION,
  HAS_STRIPE_LINK,
  PRICE,
  PRICE_NOTE,
  STRIPE_PAYMENT_LINK,
} from "../config";

export default function Reservation() {
  return (
    <section className="section" id="reservation">
      <div className="shell">
        <div className="section-head section-head--split">
          <p className="eyebrow reveal">Reserve</p>
          <h2 className="section-title reveal">
            Reserve Your Cappadocia <em>Experience</em>
          </h2>
          <p className="lede reveal" data-delay="1">
            Secure your place through our encrypted Stripe checkout. Your
            booking is confirmed only after successful payment and written
            confirmation from Dimitris Isaris Experiences.
          </p>
        </div>

        <div className="booking reveal">
          <div className="booking__facts">
            <p className="booking__price">{PRICE}</p>
            <p className="booking__priceNote">{PRICE_NOTE}</p>

            <dl className="booking__meta">
              <div>
                <dt>Dates</dt>
                <dd>{EVENT_DATE} 2026</dd>
              </div>
              <div>
                <dt>Duration</dt>
                <dd>{EVENT_DURATION}</dd>
              </div>
            </dl>

            <p className="availability availability--dark">
              <span className="dot-pulse" aria-hidden="true" />
              <span className="availability__text">
                <b>{AVAILABILITY_LABEL}</b>
                <i>{AVAILABILITY_NOTE}</i>
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
                Reserve &amp; Pay Securely
              </a>
            ) : (
              <>
                <button
                  className="btn btn--block booking__cta"
                  type="button"
                  disabled
                  aria-describedby="stripe-config-note"
                >
                  Reserve &amp; Pay Securely
                </button>
                <p className="booking__config" id="stripe-config-note" role="status">
                  Online booking is not available yet — the payment link has not
                  been configured. Please write to{" "}
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a> and we will arrange
                  your place directly.
                </p>
              </>
            )}

            <p className="booking__secure">
              <Icon name="star" size={15} aria-hidden="true" />
              Payment is processed by Stripe. Card details are never entered on
              this website.
            </p>

            <p className="booking__after">
              After completing your payment, you will receive a Stripe payment
              confirmation. Our team will then contact you with the final
              booking confirmation and travel details.
            </p>

            <p className="booking__contact">
              Questions before booking?
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
