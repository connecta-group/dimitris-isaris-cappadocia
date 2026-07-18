import Icon from "./Icon";
import { SOCIAL_LINKS } from "../config";

export default function Artist() {
  return (
    <section className="section" id="artist">
      <div className="shell">
        <div className="artist__grid">
          <div className="artist__portrait reveal">
            <picture>
              <source srcSet="/dimitris-hero.webp" type="image/webp" />
              <img
                src="/dimitris-hero.jpg"
                alt="Portrait of Dimitris Isaris with his guitar above the Cappadocia valley"
                width="1920"
                height="1078"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>

          <div className="artist__body reveal" data-delay="1">
            <p className="eyebrow">The artist</p>
            <h2>About Dimitris Isaris</h2>
            <p>
              “I don’t create concerts. I create spaces where people can feel
              what words cannot express.”
            </p>
            <p>
              I believe music exists to give voice to our deepest unspoken
              emotions—the ones we carry within us but rarely find the words to
              say.
            </p>
            <p>
              For me, a performance is never just about music. It’s about
              creating a space where breathtaking landscapes, silence and melody
              become one. A space where time slows down, memories resurface,
              emotions awaken, and people reconnect with themselves.
            </p>
            <p>
              As a Greek artist based in Dubai, performing Turkish instrumental
              melodies for audiences around the world, I’ve learned that emotion
              has no nationality. It belongs to all of us.
            </p>
            <p>That’s why this journey exists.</p>
            <p>— Dimitris Isaris</p>

            <div className="artist__socials">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  className="icon-btn"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Dimitris Isaris on ${s.label}`}
                >
                  <Icon name={s.icon} size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
