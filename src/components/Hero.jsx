import { Fragment } from "react";
import Icon from "./Icon";
import useCountdown from "../hooks/useCountdown";
import { track, trackCustom } from "../lib/pixel";
import { useLang } from "../i18n/LanguageProvider";
import {
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
  const { t: tr } = useLang();
  const t = useCountdown(EVENT_DATE_ISO);

  if (t.done) {
    return <p className="countdown__done">{tr.countdown.done}</p>;
  }

  const units = [
    { v: t.days, l: tr.countdown.days },
    { v: t.hours, l: tr.countdown.hours },
    { v: t.minutes, l: tr.countdown.minutes },
    { v: t.seconds, l: tr.countdown.seconds },
  ];

  return (
    <div className="countdown" role="timer" aria-label={tr.countdown.aria}>
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
  const { t } = useLang();
  return (
    <section className="hero" id="top">
      {/* LEFT — solid dark panel. All copy, actions and countdown live here. */}
      <div className="hero__left">
        <div className="hero__inner">
        <p className="hero__eyebrow">{t.hero.eyebrow}</p>

        <h1 className="hero__title display">
          {t.hero.titleTop}
          <em>{t.hero.titleEm}</em>
        </h1>

        <div className="hero__meta">
          <strong>{EVENT_DATE}</strong>
          <span aria-hidden="true">◇</span>
          <span>{EVENT_DURATION}</span>
          <span aria-hidden="true">◇</span>
          <span>{LOCATION_LABEL}</span>
        </div>

        <p className="hero__blurb">{t.hero.blurb1}</p>

        <p className="hero__blurb">{t.hero.blurb2}</p>

        <div className="hero__actions">
          <a
            className="btn"
            href={BOOKING_LINK}
            onClick={() => track("InitiateCheckout")}
          >
            {t.cta.reserve}
          </a>
          <a
            className="btn btn--ghost-light"
            href={PROGRAMME_IMAGE}
            download={PROGRAMME_FILENAME}
            type="image/jpeg"
            onClick={() => trackCustom("DownloadBrochure")}
          >
            <Icon name="download" size={17} />
            {t.cta.downloadBrochure}
          </a>
          <a
            className="btn btn--bare"
            href={VIDEO_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCustom("WatchFilm")}
          >
            <Icon name="play" size={17} />
            {t.cta.watchFilm}
          </a>
        </div>

        <div className="hero__bottom">
          <Countdown />
          <p className="availability">
            <span className="dot-pulse" aria-hidden="true" />
            <span className="availability__text">
              <b>{t.availability.label}</b>
              <i>{t.availability.note}</i>
            </span>
          </p>
        </div>

        <a className="scroll-cue" href="#program" aria-label={t.hero.scrollAria}>
          {t.hero.scroll}
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
            alt={t.hero.heroAlt}
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
