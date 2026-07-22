import { Link } from "react-router-dom";
import Icon from "./Icon";
import {
  COPYRIGHT,
  EVENT_DATE,
  LEGAL_LINKS,
  NEWSLETTER_URL,
  SOCIAL_LINKS,
} from "../config";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__top">
          <div>
            <p className="footer__mark">
              Dimitris Isaris
              <em>A Cappadocia Experience · {EVENT_DATE}</em>
            </p>
            <div className="artist__socials" style={{ marginTop: "1.6rem" }}>
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  className="icon-btn icon-btn--light"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  <Icon name={s.icon} size={19} />
                </a>
              ))}
            </div>
          </div>

          <div className="news">
            <h3>Newsletter</h3>
            <p>
              Future editions are announced to this list first, usually before
              they go public. Roughly four emails a year.
            </p>
            <a
              className="btn btn--ghost-light news__cta"
              href={NEWSLETTER_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Subscribe to the mailing list
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <nav className="footer__legal" aria-label="Legal">
            {LEGAL_LINKS.map((l) => (
              <Link key={l.label} to={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
          <p className="footer__copy">{COPYRIGHT}</p>
        </div>
      </div>
    </footer>
  );
}
