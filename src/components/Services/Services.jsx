// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import "./Services.scss";
import { motion, useInView } from "framer-motion";
import people from "../../assets/people.webp";

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const variants = {
    initial: {
      x: -500,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      className="service"
      variants={variants}
      initial="initial"
      //   whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Focus on best quality
          <br /> and customer satisfaction
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src={people} alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Grow</motion.b> Your
          </h1>
        </div>

        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Business</motion.b> With
            Me
          </h1>
          <button>What I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore unde
            rerum dolores. Quas libero animi, labore, vero quod alias beatae
            excepturi quae voluptatibus soluta doloribus et, quidem unde ullam
            praesentium!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Design</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore unde
            rerum dolores. Quas libero animi, labore, vero quod alias beatae
            excepturi quae voluptatibus soluta doloribus et, quidem unde ullam
            praesentium!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Maintenance</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore unde
            rerum dolores. Quas libero animi, labore, vero quod alias beatae
            excepturi quae voluptatibus soluta doloribus et, quidem unde ullam
            praesentium!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Development</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore unde
            rerum dolores. Quas libero animi, labore, vero quod alias beatae
            excepturi quae voluptatibus soluta doloribus et, quidem unde ullam
            praesentium!
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
