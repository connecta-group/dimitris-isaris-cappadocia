import { useEffect, useRef, useState } from "react";
import { track } from "../lib/pixel";
import { BOOKING_LINK, EMAIL, PHONE, PHONE_RAW } from "../config";

const LINKS = [
  { id: "program", label: "Programme" },
  { id: "gallery", label: "Gallery" },
  { id: "services", label: "Included" },
  { id: "location", label: "Location" },
  { id: "artist", label: "Dimitris" },
  { id: "faq", label: "Questions" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [stuck, setStuck] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setStuck(y > 40);
      setHidden(y > 480 && y > lastY.current && !open);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    document.body.classList.toggle("is-locked", open);
    return () => document.body.classList.remove("is-locked");
  }, [open]);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={`nav ${stuck ? "nav--stuck" : ""} ${hidden ? "nav--hidden" : ""}`}
      >
        <div className="nav__inner">
          <a className="nav__brand" href="#top" onClick={() => setOpen(false)}>
            <span>Exclusive Event</span>
            Dimitris Isaris
          </a>

          <nav className="nav__links" aria-label="Sections">
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`nav__link ${active === l.id ? "is-active" : ""}`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            className="btn nav__cta"
            href={BOOKING_LINK}
            onClick={() => track("InitiateCheckout")}
          >
            Reserve your place
          </a>

          <button
            className={`nav__burger ${open ? "is-open" : ""}`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`drawer ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <ul className="drawer__list">
          {LINKS.map((l, i) => (
            <li key={l.id}>
              <a
                className="drawer__link"
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${0.06 * i + 0.1}s` : "0s" }}
                tabIndex={open ? 0 : -1}
              >
                <i>{String(i + 1).padStart(2, "0")}</i>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              className="drawer__link"
              href="#reservation"
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${0.06 * LINKS.length + 0.1}s` : "0s" }}
              tabIndex={open ? 0 : -1}
            >
              <i>{String(LINKS.length + 1).padStart(2, "0")}</i>
              Reserve your place
            </a>
          </li>
        </ul>

        <div className="drawer__foot">
          <a href={`mailto:${EMAIL}`} tabIndex={open ? 0 : -1}>
            {EMAIL}
          </a>
          <a href={`tel:+${PHONE_RAW}`} tabIndex={open ? 0 : -1}>
            {PHONE}
          </a>
        </div>
      </div>
    </>
  );
}
