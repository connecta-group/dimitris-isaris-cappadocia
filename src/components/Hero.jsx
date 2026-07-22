import { Fragment } from "react";
import Icon from "./Icon";
import useCountdown from "../hooks/useCountdown";
import {
  AVAILABILITY_LABEL,
  AVAILABILITY_NOTE,
  BOOKING_LINK,
  EVENT_DATE,
  EVENT_DATE_ISO,
  EVENT_DURATION,
  LOCATION_LABEL,
  PROGRAMME_FILENAME,
  PROGRAMME_IMAGE,
  VIDEO_URL,
} from "../config";

function Countdown() {
  const t = useCountdown(EVENT_DATE_ISO);

  if (t.done) {
    return <p className="countdown__done">The experience has begun.</p>;
  }

  const units = [
    { v: t.days, l: "Days" },
    { v: t.hours, l: "Hours" },
    { v: t.minutes, l: "Minutes" },
    { v: t.seconds, l: "Seconds" },
  ];

  return (
    <div className="countdown" role="timer" aria-label="Time until the experience begins">
      {units.map((u, i) => (
        <Fragment key={u.l}>
          <div className="countdown__unit">
            <span className="countdown__num">{u.v}</span>
            <span className="countdown__label">{u.l}</span>
          </div>
          {i < units.length - 1 && (
            <span className="countdown__sep" aria-hidden="true">
              /
            </span>
          )}
        </Fragment>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      {/* LEFT — solid dark panel. All copy, actions and countdown live here. */}
      <div className="hero__left">
        <div className="hero__inner">
        <p className="hero__eyebrow">Exclusive Event</p>

        <h1 className="hero__title display">
          Where Music Meets Cappadocia
          <em>Imagine Yourself Here.</em>
        </h1>

        <div className="hero__meta">
          <strong>{EVENT_DATE}</strong>
          <span aria-hidden="true">◇</span>
          <span>{EVENT_DURATION}</span>
          <span aria-hidden="true">◇</span>
          <span>{LOCATION_LABEL}</span>
        </div>

        <p className="hero__blurb">
          Four unforgettable days. One intimate concert. Endless memories.
        </p>

        <p className="hero__blurb">
          Discover hidden valleys, breathtaking sunrises and an exclusive live
          acoustic evening with Dimitris Isaris.
        </p>

        <div className="hero__actions">
          <a className="btn" href={BOOKING_LINK}>
            Reserve your place
          </a>
          <a
            className="btn btn--ghost-light"
            href={PROGRAMME_IMAGE}
            download={PROGRAMME_FILENAME}
            type="image/jpeg"
          >
            <Icon name="download" size={17} />
            Download Brochure
          </a>
          <a
            className="btn btn--bare"
            href={VIDEO_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="play" size={17} />
            Watch the film
          </a>
        </div>

        <div className="hero__bottom">
          <Countdown />
          <p className="availability">
            <span className="dot-pulse" aria-hidden="true" />
            <span className="availability__text">
              <b>{AVAILABILITY_LABEL}</b>
              <i>{AVAILABILITY_NOTE}</i>
            </span>
          </p>
        </div>

        <a className="scroll-cue" href="#program" aria-label="Scroll to the programme">
          Scroll
          <span className="scroll-cue__rail" aria-hidden="true" />
        </a>
        </div>
      </div>

      {/* RIGHT — photograph only. No text, badge, countdown or overlay. */}
      <div className="hero__right">
        <picture>
          <source srcSet="/dimitris-hero.webp" type="image/webp" />
          <img
            src="/dimitris-hero.jpg"
            alt="Dimitris Isaris playing classical guitar on a terrace as hot air balloons rise over the Cappadocia valley at sunrise"
            width="1920"
            height="1078"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </div>
    </section>
  );
}
