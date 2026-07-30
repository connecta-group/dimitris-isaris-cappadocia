import Icon from "./Icon";
import { useLang } from "../i18n/LanguageProvider";

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
      </div>
    </section>
  );
}
