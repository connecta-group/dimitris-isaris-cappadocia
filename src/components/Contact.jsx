import Icon from "./Icon";
import {
  EMAIL,
  GOOGLE_MAPS,
  LOCATION_BASE,
  PHONE,
  PHONE_RAW,
  SOCIAL_LINKS,
} from "../config";

export default function Contact() {
  return (
    <section className="section section--dusk" id="contact">
      <div className="shell">
        <div className="section-head section-head--split">
          <p className="eyebrow reveal">Contact</p>
          <h2 className="section-title reveal">
            Questions before you <em>commit</em>?
          </h2>
          <p className="lede reveal" data-delay="1">
            We answer between 09:00 and 21:00 Türkiye time, seven days a week.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__card reveal">
            <h3>Write</h3>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>

          <div className="contact__card reveal" data-delay="1">
            <h3>Call</h3>
            <a href={`tel:+${PHONE_RAW}`}>{PHONE}</a>
            <p style={{ fontSize: "var(--step--1)", color: "var(--on-dark-mute)", fontFamily: "var(--body)" }}>
              09:00 – 21:00 TRT, daily
            </p>
          </div>

          <div className="contact__card reveal" data-delay="2">
            <h3>Find</h3>
            <a href={GOOGLE_MAPS} target="_blank" rel="noopener noreferrer">
              {LOCATION_BASE}
            </a>
            <div className="contact__socials">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  className="icon-btn icon-btn--light"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  <Icon name={s.icon} size={19} />
                </a>
              ))}
              <a
                className="icon-btn icon-btn--light"
                href={`mailto:${EMAIL}`}
                aria-label="Email"
              >
                <Icon name="mail" size={19} />
              </a>
              <a
                className="icon-btn icon-btn--light"
                href={`tel:+${PHONE_RAW}`}
                aria-label="Phone"
              >
                <Icon name="phone" size={19} />
              </a>
              <a
                className="icon-btn icon-btn--light"
                href={GOOGLE_MAPS}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps"
              >
                <Icon name="pin" size={19} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
