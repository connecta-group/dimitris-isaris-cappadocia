import Icon from "./Icon";
import { track } from "../lib/pixel";
import { useLang } from "../i18n/LanguageProvider";
import { BOOKING_LINK, PRICE, PRICE_NOTE } from "../config";

export default function Services() {
  const { t } = useLang();
  return (
    <section className="section" id="services">
      <div className="shell">
        <div className="section-head section-head--split">
          <p className="eyebrow reveal">{t.services.eyebrow}</p>
          <h2 className="section-title reveal">
            {t.services.titleTop} <em>{t.services.titleEm}</em>.
          </h2>
          <p className="lede reveal" data-delay="1">
            {t.services.lede}
          </p>
        </div>

        <div className="services__grid reveal">
          {t.services.items.map((s) => (
            <article
              className={`service ${s.featured ? "service--featured" : ""}`}
              key={s.title}
            >
              {s.featured && <span className="service__badge">{t.services.badge}</span>}
              <Icon name={s.icon} size={26} className="service__icon" />
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>

        <div className="price-bar reveal">
          <div>
            <p className="price-bar__figure">{PRICE}</p>
            <p className="price-bar__note">{PRICE_NOTE}</p>
          </div>
          <p className="price-bar__body">
            {t.services.priceBody}
            <br />
            <span className="price-bar__flag">{t.availability.label}</span>
          </p>
          <a
            className="btn"
            href={BOOKING_LINK}
            onClick={() => track("InitiateCheckout")}
          >
            {t.cta.reserve}
          </a>
        </div>
      </div>
    </section>
  );
}
