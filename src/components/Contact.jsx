import Icon from "./Icon";
import { useLang } from "../i18n/LanguageProvider";
import {
  EMAIL,
  GOOGLE_MAPS,
  LOCATION_BASE,
  PHONE,
  PHONE_RAW,
  SOCIAL_LINKS,
} from "../config";

export default function Contact() {
  const { t } = useLang();
  return (
    <section className="section section--dusk" id="contact">
      <div className="shell">
        <div className="section-head section-head--split">
          <p className="eyebrow reveal">{t.contact.eyebrow}</p>
          <h2 className="section-title reveal">
            {t.contact.titleTop} <em>{t.contact.titleEm}</em>?
          </h2>
          <p className="lede reveal" data-delay="1">
            {t.contact.lede}
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__card reveal">
            <h3>{t.contact.write}</h3>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>

          <div className="contact__card reveal" data-delay="1">
            <h3>{t.contact.call}</h3>
            <a href={`tel:+${PHONE_RAW}`}>{PHONE}</a>
            <p style={{ fontSize: "var(--step--1)", color: "var(--on-dark-mute)", fontFamily: "var(--body)" }}>
              {t.contact.hours}
            </p>
          </div>

          <div className="contact__card reveal" data-delay="2">
            <h3>{t.contact.find}</h3>
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
                aria-label={t.contact.email}
              >
                <Icon name="mail" size={19} />
              </a>
              <a
                className="icon-btn icon-btn--light"
                href={`tel:+${PHONE_RAW}`}
                aria-label={t.contact.phone}
              >
                <Icon name="phone" size={19} />
              </a>
              <a
                className="icon-btn icon-btn--light"
                href={GOOGLE_MAPS}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.contact.maps}
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
