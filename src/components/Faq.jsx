import { useState } from "react";
import Icon from "./Icon";
import { FAQ } from "../data";
import { EMAIL } from "../config";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section" id="faq">
      <div className="shell">
        <div className="section-head section-head--split">
          <p className="eyebrow reveal">Questions</p>
          <h2 className="section-title reveal">
            Frequently Asked <em>Questions</em>
          </h2>
          <p className="lede reveal" data-delay="1">
            If something is not covered here, write to us directly — we answer
            personally.
          </p>
        </div>

        <div className="faq reveal">
          {FAQ.map((item, i) => {
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
          Still deciding? Write to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      </div>
    </section>
  );
}
