import { useState } from "react";
import Icon from "./Icon";
import { useLang } from "../i18n/LanguageProvider";
import { EMAIL } from "../config";

export default function Faq() {
  const { t } = useLang();
  const [open, setOpen] = useState(0);

  return (
    <section className="section" id="faq">
      <div className="shell">
        <div className="section-head section-head--split">
          <p className="eyebrow reveal">{t.faq.eyebrow}</p>
          <h2 className="section-title reveal">
            {t.faq.titleTop} <em>{t.faq.titleEm}</em>
          </h2>
          <p className="lede reveal" data-delay="1">
            {t.faq.lede}
          </p>
        </div>

        <div className="faq reveal">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <article className={`faq__item ${isOpen ? "is-open" : ""}`} key={item.q}>
                <h3 style={{ margin: 0 }}>
                  <button
                    className="faq__q"
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    id={`faq-q-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <span className="faq__mark" aria-hidden="true">
                      <Icon name="plus" size={16} />
                    </span>
                  </button>
                </h3>
                <div
                  className="faq__panel"
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                >
                  <div className="faq__panelInner">
                    <p className="faq__a">{item.a}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="faq__foot reveal">
          {t.faq.footPre} <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      </div>
    </section>
  );
}
