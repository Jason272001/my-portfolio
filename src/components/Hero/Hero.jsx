// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Hero.scss";
import profile from "../../assets/profile.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="textContainer">
        <h2> Jason Myo </h2>
        <h1>Full-Stack Developer and Project Management</h1>
        <button>
          <a href="tel:+14253801963">Contact Me</a>
        </button>
      </div>
      <div className="imageContainer">
        <img src={profile} alt="Profile" />
      </div>
    </div>
  );
};

export default Hero;
