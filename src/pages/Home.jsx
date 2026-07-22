import { useEffect } from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Strip from "../components/Strip";
import Program from "../components/Program";
import Gallery from "../components/Gallery";
import Services from "../components/Services";
import Location from "../components/Location";
import Artist from "../components/Artist";
import Faq from "../components/Faq";
import Reservation from "../components/Reservation";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BookBar from "../components/BookBar";
import useReveal from "../hooks/useReveal";

const TITLE =
  "Dimitris Isaris — A Cappadocia Experience | 25–28 September";

export default function Home() {
  useReveal();

  useEffect(() => {
    document.title = TITLE;
  }, []);

  return (
    <>
      <a className="skip-link" href="#program">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Strip />
        <Program />
        <Gallery />
        <Services />
        <Location />
        <Artist />
        <Faq />
        <Reservation />
        <Contact />
      </main>
      <Footer />
      <BookBar />
    </>
  );
}
