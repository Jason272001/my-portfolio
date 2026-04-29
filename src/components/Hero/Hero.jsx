// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Hero.scss";
import profile from "../../assets/profile.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="textContainer">
        <h2>Jason Myo</h2>
        <h1>IT Support Specialist | Network Technician | Field Computer Specialist</h1>
        <p>
          Reliable IT support professional focused on troubleshooting, network
          operations, system administration, and field service excellence.
        </p>
        <div className="buttonGroup">
          <a className="cta" href="#" aria-label="Download Resume">
            Download Resume
          </a>
          <a className="cta secondary" href="#Portfolio">
            View Projects
          </a>
          <a className="cta secondary" href="#Contact">
            Contact
          </a>
        </div>
      </div>
      <div className="imageContainer">
        <img src={profile} alt="Jason Myo profile" />
      </div>
    </div>
  );
};

export default Hero;
