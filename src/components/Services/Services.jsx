import React, { useState, useRef } from "react";
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
      animate="animate"
      ref={ref}
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
            Effective Branding Strategies:Branding is more than just a logo or a
            color scheme; it's about creating a distinct identity that resonates
            with your target audience. My approach to branding involves
            understanding the core values and vision of your business and
            translating them into a cohesive and compelling brand narrative.
            From creating a unique brand voice to designing visual elements that
            capture your essence, I ensure that every aspect of your brand
            communicates your story effectively. Successful branding results in
            strong customer loyalty and recognition in the market.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Design</h2>
          <p>
            Innovative and User-Centric Design: Great design combines aesthetics
            with functionality. My design philosophy is centered around creating
            user-friendly interfaces that are not only visually appealing but
            also intuitive to navigate. Whether it's designing websites, mobile
            apps, or marketing materials, I focus on delivering designs that
            enhance user experience and engagement. My process includes thorough
            research, wireframing, prototyping, and iterative testing to ensure
            that the final product meets the needs of both the business and its
            users.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Maintenance</h2>
          <p>
            Reliable Maintenance Services:Maintaining your digital assets is
            crucial to ensuring they remain secure, up-to-date, and functional.
            I offer comprehensive maintenance services that include regular
            updates, security checks, and performance optimizations. Whether you
            need ongoing support for your website, app, or software, I provide
            timely and efficient solutions to prevent issues before they arise.
            My goal is to keep your digital platforms running smoothly so you
            can focus on growing your business without any technical
            interruptions.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Development</h2>
          <p>
            Cutting-Edge Development Solutions:In today's fast-paced digital
            landscape, having a robust and scalable development solution is
            essential. I specialize in creating custom software, websites, and
            applications tailored to your specific needs. Using the latest
            technologies and best practices, I develop solutions that are
            secure, efficient, and easy to maintain. From initial concept to
            deployment, I work closely with you to ensure that the final product
            not only meets but exceeds your expectations. Let me help you turn
            your ideas into reality with innovative development services.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
