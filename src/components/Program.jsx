import { useState } from "react";
import Icon from "./Icon";
import { PROGRAM } from "../data";
import { PROGRAMME_FILENAME, PROGRAMME_IMAGE } from "../config";

function Day({ day, open, onToggle }) {
  const panelId = `day-panel-${day.day}`;
  const headId = `day-head-${day.day}`;

  return (
    <article className={`day ${open ? "is-open" : ""}`}>
      <h3 style={{ margin: 0 }}>
        <button
          className="day__head"
          id={headId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="day__n">{day.day}</span>
          <span className="day__titles">
            {day.featured && <span className="day__badge">The main event</span>}
            <span
              style={{
                display: "block",
                fontFamily: "var(--display)",
                fontWeight: 300,
                fontSize: "var(--step-2)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              {day.title}
            </span>
            <span
              style={{
                display: "block",
                fontSize: "var(--step--1)",
                color: "var(--on-dark-faint)",
                fontWeight: 300,
              }}
            >
              {day.tagline}
            </span>
          </span>
          <span className="day__toggle" aria-hidden="true">
            <Icon name="plus" size={18} />
          </span>
        </button>
      </h3>

      <div className="day__panel" id={panelId} role="region" aria-labelledby={headId}>
        <div className="day__panelInner">
          <div className="day__body">
            {day.blocks.map((b) => (
              <div className="block" key={b.label}>
                <p className="block__label">
                  <Icon name={b.icon} size={16} />
                  {b.label}
                </p>
                <ul className="block__items">
                  {b.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Program() {
  const [open, setOpen] = useState("03");

  return (
    <section className="section section--dark" id="program">
      <div className="shell">
        <div className="section-head section-head--split">
          <p className="eyebrow reveal">The programme</p>
          <h2 className="section-title reveal">
            Day by day, <em>hour by hour</em>.
          </h2>
          <p className="lede reveal" data-delay="1">
            Open any day to see what is planned. Timings move with the weather —
            the balloon corridor and the valley light decide, not the schedule.
          </p>
        </div>

        <div className="program__list reveal">
          {PROGRAM.map((d) => (
            <Day
              key={d.day}
              day={d}
              open={open === d.day}
              onToggle={() => setOpen(open === d.day ? null : d.day)}
            />
          ))}
        </div>

        <div style={{ marginTop: "clamp(2rem, 4vw, 3rem)" }} className="reveal">
          <a
            className="btn btn--ghost-light"
            href={PROGRAMME_IMAGE}
            download={PROGRAMME_FILENAME}
            type="image/jpeg"
          >
            <Icon name="download" size={17} />
            Download the full programme
          </a>
        </div>
      </div>
    </section>
  );
}
