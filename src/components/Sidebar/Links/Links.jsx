// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Links = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact"];
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const iteamvariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.div
          key={item}
          variants={iteamvariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to={`${item}`} spy={true} smooth={true} duration={500}>
            {item}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};
export default Links;
