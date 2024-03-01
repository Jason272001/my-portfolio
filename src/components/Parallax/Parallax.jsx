// eslint-disable-next-line no-unused-vars
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Parallax.scss";
import planets from "../../assets/planets.png";
import sun from "../../assets/sun.png";
const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const Ybg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const Ytext = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg,#111132, #0c0c1d)"
            : "linear-gradient(180deg,#111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: Ytext }}>
        {type === "services" ? "What I DO?" : "What I Did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        style={{
          y: Ybg,
          backgroundImage: `url(${type === "services" ? planets : sun})`,
        }}
        className="planets"
      ></motion.div>
      <motion.div style={{ x: Ybg }} className="stars"></motion.div>
    </div>
  );
};
export default Parallax;
