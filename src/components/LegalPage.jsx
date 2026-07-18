import { useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import Footer from "./Footer";
import { EMAIL } from "../config";

/**
 * Shared shell for the three legal pages. Keeps the site's own type scale,
 * palette and reveal-free static rendering — these are read, not scrolled
 * through for effect.
 */
export default function LegalPage({ title, updated, children }) {
  useEffect(() => {
    document.title = `${title} — Dimitris Isaris, A Cappadocia Experience`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <>
      <header className="nav nav--stuck nav--solid">
        <div className="nav__inner">
          <Link className="nav__brand" to="/">
            <span>Exclusive Event</span>
            Dimitris Isaris
          </Link>
          <Link className="btn nav__cta" to="/">
            Back to the experience
          </Link>
        </div>
      </header>

      <main className="legal">
        <div className="shell">
          <p className="eyebrow">Legal</p>
          <h1 className="legal__title display">{title}</h1>
          <p className="legal__updated">Last updated: {updated}</p>

          <div className="legal__body">{children}</div>

          <div className="legal__foot">
            <Link className="btn btn--ghost" to="/">
              <Icon name="arrowRight" size={16} />
              Return to the experience
            </Link>
            <p className="legal__contact">
              Questions about this page? Write to{" "}
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
