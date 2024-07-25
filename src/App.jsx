// eslint-disable-next-line no-unused-vars
import React from "react";
import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Parallax from "./components/Parallax/Parallax";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Cursor from "./components/Cursor/Cursor";

const App = () => {
  return (
    <div>
      <Cursor />

      <div>
        <section id="Homepage" className="section">
          <Navbar />
          <Hero />
        </section>

        <section id="Services" className="section">
          <Parallax type="services" />
        </section>
        <section className="section">
          <Services />
        </section>

        <section id="Portfolio" className="section">
          <Parallax type="portfolio" />
        </section>
        <Portfolio />

        <section id="Contact" className="section">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;
