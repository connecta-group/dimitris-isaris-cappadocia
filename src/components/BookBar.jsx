import { useEffect, useState } from "react";
import { track } from "../lib/pixel";
import { AVAILABILITY_LABEL, BOOKING_LINK, PRICE } from "../config";

export default function BookBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const reserve = document.getElementById("reservation");
      const past = window.scrollY > window.innerHeight * 0.85;
      const atForm =
        reserve && reserve.getBoundingClientRect().top < window.innerHeight * 0.6;
      setShow(past && !atForm);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`book-bar ${show ? "is-in" : ""}`} aria-hidden={!show}>
      <div className="book-bar__price">
        <b>{PRICE}</b>
        <span>{AVAILABILITY_LABEL}</span>
      </div>
      <a
        className="btn"
        href={BOOKING_LINK}
        tabIndex={show ? 0 : -1}
        onClick={() => track("InitiateCheckout")}
      >
        Reserve your place
      </a>
    </div>
  );
}
