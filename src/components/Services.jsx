import Icon from "./Icon";
import { SERVICES } from "../data";
import { AVAILABILITY_LABEL, BOOKING_LINK, PRICE, PRICE_NOTE } from "../config";

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="shell">
        <div className="section-head section-head--split">
          <p className="eyebrow reveal">What is included</p>
          <h2 className="section-title reveal">
            Everything but the <em>flight</em>.
          </h2>
          <p className="lede reveal" data-delay="1">
            One price covers the transfers, the rooms, the guide, the workshops
            and the performance. You arrange the flight; we handle the rest from
            the moment you land.
          </p>
        </div>

        <div className="services__grid reveal">
          {SERVICES.map((s) => (
            <article
              className={`service ${s.featured ? "service--featured" : ""}`}
              key={s.title}
            >
              {s.badge && <span className="service__badge">{s.badge}</span>}
              <Icon name={s.icon} size={26} className="service__icon" />
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>

        <div className="price-bar reveal">
          <div>
            <p className="price-bar__figure">{PRICE}</p>
            <p className="price-bar__note">{PRICE_NOTE}</p>
          </div>
          <p className="price-bar__body">
            Single occupancy and extended stays are available on request. Flights,
            travel insurance and personal spending are not included.
            <br />
            <span className="price-bar__flag">{AVAILABILITY_LABEL}</span>
          </p>
          <a className="btn" href={BOOKING_LINK}>
            Reserve your place
          </a>
        </div>
      </div>
    </section>
  );
}
