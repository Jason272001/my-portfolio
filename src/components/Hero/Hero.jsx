// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Hero.scss";
import { motion } from "framer-motion";
import profile from "../../assets/profile.png";
import scroll from "../../assets/scroll.png";
const Hero = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const slidervariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
      },
    },
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Myo Lwin Moe Aung</motion.h2>
          <motion.h1 variants={textVariants}>
            Full-Stack Developer and Project Management
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              {" "}
              <a href="tel:+1 425-380-1963">Contact Me</a>
            </motion.button>
          </motion.div>
          <motion.img
            src={scroll}
            alt=""
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={slidervariants}
        initial="initial"
        animate="animate"
      >
        Feel Free To Contact Me
      </motion.div>
      <div className="imageContainer">
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default Hero;
