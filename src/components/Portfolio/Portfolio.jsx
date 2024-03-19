// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const Portfolio = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://intense-dawn-79194-9e92add1c908.herokuapp.com/display")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })

      .then((data) => setData(data))

      .catch((error) => console.log(error));
  }, []);

  const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
      target: ref,
      //   offset: ["start start", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [-500, 500]);
    return (
      <section>
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
              <img
                src={
                  `https://intense-dawn-79194-9e92add1c908.herokuapp.com/project_image/` +
                  item.img
                }
                alt=""
              />
            </div>
            <motion.div className="textContainer" style={{ y }}>
              <h2>{item.project_name}</h2>
              <p>{item.description}</p>
              <button>
                <a href={item.link}>See Demo</a>
              </button>
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
      {data.map((item, index) => (
        <Single item={item} key={index} />
      ))}
    </div>
  );
};
export default Portfolio;
