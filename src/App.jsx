// eslint-disable-next-line no-unused-vars
import React from "react";
import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Cursor from "./components/Cursor/Cursor";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage" className="section">
        <Navbar />
        <Hero />
      </section>
      <section id="Services" className="section">
        <Services />
      </section>
      <section id="Portfolio" className="section">
        <Portfolio />
      </section>
      <section id="Contact" className="section">
        <Contact />
      </section>
    </div>
  );
};

export default App;
