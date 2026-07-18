import { useEffect } from "react";

/**
 * Adds .is-in to every [data-reveal] element as it scrolls into view.
 * Runs once on mount and re-observes when the DOM changes.
 */
export default function useReveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = document.querySelectorAll(".reveal:not(.is-in)");

    if (reduce || !("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );

    nodes.forEach((n) => io.observe(n));

    // Safety net: if the observer never fires for something (mobile Safari
    // occasionally misses targets during fast scroll or bfcache restore),
    // reveal whatever is still hidden rather than leaving it invisible.
    const failsafe = window.setTimeout(() => {
      document
        .querySelectorAll(".reveal:not(.is-in)")
        .forEach((n) => n.classList.add("is-in"));
    }, 3000);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);
}
