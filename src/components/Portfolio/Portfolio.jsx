import React, { useState, useEffect, useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { getData } from "../../../lib/data";
import { urlFor } from "../../../client";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const Single = ({ item: { image, tital, desc, link } }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
      target: ref,
    });
    const y = useTransform(scrollYProgress, [0, 1], [-500, 500]);
    const imageurl = urlFor(image).width(2000).url(); // Ensure URL is correctly formatted

    return (
      <section>
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
              <img src={imageurl} alt={tital} />
            </div>
            <motion.div className="textContainer" style={{ y }}>
              <h2>{tital}</h2>
              <p>{desc}</p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ zIndex: 10 }}
              >
                See Demo
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {projects.map((item, index) => (
        <Single item={item} key={index} />
      ))}
    </div>
  );
};

export default Portfolio;
