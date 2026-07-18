import { useCallback, useEffect, useState } from "react";
import Icon from "./Icon";
import { GALLERY } from "../data";

export default function Gallery() {
  const [index, setIndex] = useState(null);
  const isOpen = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir) => setIndex((i) => (i === null ? i : (i + dir + GALLERY.length) % GALLERY.length)),
    []
  );

  useEffect(() => {
    if (!isOpen) return;
    document.body.classList.add("is-locked");
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("is-locked");
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, step]);

  const current = isOpen ? GALLERY[index] : null;

  return (
    <section className="section" id="gallery">
      <div className="shell">
        <div className="section-head section-head--split">
          <p className="eyebrow reveal">Gallery</p>
          <h2 className="section-title reveal">
            What four days in <em>Cappadocia</em> look like.
          </h2>
          <p className="lede reveal" data-delay="1">
            Select any frame to open it full size. Use the arrow keys to move
            through the set.
          </p>
        </div>

        <div className="gallery__grid reveal">
          {GALLERY.map((item, i) => (
            <button
              key={item.id}
              className={`tile ${item.span ? `tile--${item.span}` : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Open image: ${item.alt}`}
            >
              <picture>
                <source srcSet={item.src.replace(/\.jpg$/, ".webp")} type="image/webp" />
                <img
                  className="tile__img"
                  src={item.src}
                  alt={item.alt}
                  width={item.w}
                  height={item.h}
                  style={{ objectPosition: item.focus }}
                  /* The first two tiles sit above the fold on most screens */
                  loading={i < 2 ? "eager" : "lazy"}
                  decoding="async"
                />
              </picture>
              <span className="tile__cap">{item.title}</span>
            </button>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={close}
        >
          <button className="lightbox__close" onClick={close} aria-label="Close image">
            <Icon name="close" size={20} />
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
          >
            <Icon name="arrowLeft" size={20} />
          </button>
          <button
            className="lightbox__nav lightbox__nav--next"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
          >
            <Icon name="arrowRight" size={20} />
          </button>

          <figure onClick={(e) => e.stopPropagation()} style={{ margin: 0 }}>
            <div className="lightbox__frame">
              <picture>
                <source srcSet={current.src.replace(/\.jpg$/, ".webp")} type="image/webp" />
                <img src={current.src} alt={current.alt} decoding="async" />
              </picture>
            </div>
            <figcaption className="lightbox__cap">
              {current.title} — {index + 1} of {GALLERY.length}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
