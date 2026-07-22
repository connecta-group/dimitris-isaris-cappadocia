import { Link } from "react-router-dom";
import Icon from "./Icon";
import { trackCustom } from "../lib/pixel";
import { useLang } from "../i18n/LanguageProvider";
import {
  COPYRIGHT,
  EVENT_DATE,
  LEGAL_LINKS,
  NEWSLETTER_URL,
  SOCIAL_LINKS,
} from "../config";

export default function Footer() {
  const { t } = useLang();
  // Hrefs come from config; labels from the active language, matched by key.
  const legalLabels = [t.legalLinks.privacy, t.legalLinks.terms, t.legalLinks.cookies];

  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__top">
          <div>
            <p className="footer__mark">
              Dimitris Isaris
              <em>{t.footer.markEm} {EVENT_DATE}</em>
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
            <h3>{t.footer.newsletterHeading}</h3>
            <p>{t.footer.newsletterBody}</p>
            <a
              className="btn btn--ghost-light news__cta"
              href={NEWSLETTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCustom("NewsletterClick")}
            >
              {t.footer.subscribe}
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <nav className="footer__legal" aria-label={t.footer.legalAria}>
            {LEGAL_LINKS.map((l, i) => (
              <Link key={l.href} to={l.href}>
                {legalLabels[i]}
              </Link>
            ))}
          </nav>
          <p className="footer__copy">{COPYRIGHT}</p>
        </div>
      </div>
    </footer>
  );
}
