import Icon from "./Icon";
import { useLang } from "../i18n/LanguageProvider";
import { SOCIAL_LINKS } from "../config";

export default function Artist() {
  const { t } = useLang();
  return (
    <section className="section" id="artist">
      <div className="shell">
        <div className="artist__grid">
          <div className="artist__portrait reveal">
            <picture>
              <source srcSet="/dimitris-hero.webp" type="image/webp" />
              <img
                src="/dimitris-hero.jpg"
                alt={t.artist.portraitAlt}
                width="1920"
                height="1078"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>

          <div className="artist__body reveal" data-delay="1">
            <p className="eyebrow">{t.artist.eyebrow}</p>
            <h2>{t.artist.heading}</h2>
            {t.artist.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <div className="artist__socials">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  className="icon-btn"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t.artist.socialOn} ${s.label}`}
                >
                  <Icon name={s.icon} size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
