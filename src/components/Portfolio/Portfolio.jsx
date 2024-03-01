// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const Portfolio = () => {
  const items = [
    {
      id: 1,
      title: "111Banh Mi Oven",
      img: "https://t3.ftcdn.net/jpg/03/54/17/86/360_F_354178616_uSdqA6i1A1vkkskFPKOoxQOED0ZMIcn3.jpg",
      desc: "Resturent Management and ordering System  using ReactJS NodeJS ExpressJs And PostgreSql ",
    },
    {
      id: 2,
      title: "222Banh Mi Oven",
      img: "https://t3.ftcdn.net/jpg/03/54/17/86/360_F_354178616_uSdqA6i1A1vkkskFPKOoxQOED0ZMIcn3.jpg",
      desc: "Resturent Management and ordering System  using ReactJS NodeJS ExpressJs And PostgreSql ",
    },
    {
      id: 3,
      title: "333Banh Mi Oven",
      img: "https://t3.ftcdn.net/jpg/03/54/17/86/360_F_354178616_uSdqA6i1A1vkkskFPKOoxQOED0ZMIcn3.jpg",
      desc: "Resturent Management and ordering System  using ReactJS NodeJS ExpressJs And PostgreSql ",
    },
    {
      id: 4,
      title: "4444Banh Mi Oven",
      img: "https://t3.ftcdn.net/jpg/03/54/17/86/360_F_354178616_uSdqA6i1A1vkkskFPKOoxQOED0ZMIcn3.jpg",
      desc: "Resturent Management and ordering System  using ReactJS NodeJS ExpressJs And PostgreSql ",
    },
  ];

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
              <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{ y }}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button>See Demo</button>
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
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};
export default Portfolio;
