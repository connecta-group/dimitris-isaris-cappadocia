import { useEffect, useRef, useState } from "react";
import { useLang } from "../i18n/LanguageProvider";
import { translations } from "../i18n/translations";

const OPTIONS = [
  { code: "en", label: "English", short: "EN" },
  { code: "tr", label: "Türkçe", short: "TR" },
];

/**
 * Language selector.
 * - variant="bar"  → compact "EN/TR" button with a dropdown (top navigation)
 * - variant="menu" → full-width segmented control (inside the mobile drawer)
 */
export default function LanguageSelector({ variant = "bar", tabIndex }) {
  const { lang, setLang } = useLang();
  const t = translations[lang];
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current = OPTIONS.find((o) => o.code === lang) || OPTIONS[0];

  // Close on outside click and on Escape.
  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const choose = (code) => {
    setLang(code);
    setOpen(false);
  };

  if (variant === "menu") {
    return (
      <div className="langseg" role="group" aria-label={t.selector.label}>
        {OPTIONS.map((o) => (
          <button
            key={o.code}
            type="button"
            className={`langseg__btn ${o.code === lang ? "is-active" : ""}`}
            aria-pressed={o.code === lang}
            tabIndex={tabIndex}
            onClick={() => setLang(o.code)}
          >
            {o.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="lang" ref={ref}>
      <button
        type="button"
        className="lang__toggle"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.selector.label}
        onClick={() => setOpen((v) => !v)}
      >
        <span aria-hidden="true">{current.short}</span>
        <svg
          className="lang__chevron"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          aria-hidden="true"
        >
          <path
            d="M1 3l4 4 4-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <ul className="lang__menu" role="listbox" aria-label={t.selector.label}>
          {OPTIONS.map((o) => (
            <li key={o.code} role="none">
              <button
                type="button"
                role="option"
                aria-selected={o.code === lang}
                className={`lang__option ${o.code === lang ? "is-active" : ""}`}
                onClick={() => choose(o.code)}
              >
                {o.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
