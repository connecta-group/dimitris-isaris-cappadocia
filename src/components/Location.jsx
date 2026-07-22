import Icon from "./Icon";
import { useLang } from "../i18n/LanguageProvider";
import { GOOGLE_MAPS, GOOGLE_MAPS_EMBED } from "../config";

export default function Location() {
  const { t } = useLang();
  return (
    <section className="section section--dusk" id="location">
      <div className="shell">
        <div className="section-head section-head--split">
          <p className="eyebrow reveal">{t.location.eyebrow}</p>
          <h2 className="section-title reveal">
            {t.location.titleTop} <em>{t.location.titleEm}</em>.
          </h2>
          <p className="lede reveal" data-delay="1">
            {t.location.lede}
          </p>
        </div>

        <div className="location__grid">
          <div className="map reveal">
            <iframe
              title={t.location.mapTitle}
              src={GOOGLE_MAPS_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              className="map__pin"
              href={GOOGLE_MAPS}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="pin" size={16} />
              {t.cta.openMaps}
            </a>
          </div>

          <div className="travel reveal" data-delay="1">
            <div className="travel__group">
              <h3>{t.location.airportsHeading}</h3>
              {t.location.airports.map((a) => (
                <div className="travel__item" key={a.code}>
                  <div className="travel__top">
                    <span className="travel__code">{a.code}</span>
                    <span className="travel__name">{a.name}</span>
                  </div>
                  <p className="travel__dist">{a.distance}</p>
                  <p className="travel__note">{a.note}</p>
                </div>
              ))}
            </div>

            <div className="travel__group">
              <h3>{t.location.stayHeading}</h3>
              {t.location.hotels.map((h) => (
                <div className="travel__item" key={h.name}>
                  <div className="travel__top">
                    <span className="travel__name">{h.name}</span>
                  </div>
                  <p className="travel__note">{h.detail}</p>
                </div>
              ))}
              <div className="travel__item">
                <p className="travel__dist">{t.location.base}</p>
                <p className="travel__note">{t.location.baseNote}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
