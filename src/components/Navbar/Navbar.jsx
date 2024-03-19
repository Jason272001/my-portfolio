// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";
import linkedin from "../../assets/linkedin.png";
import facebook from "../../assets/facebook.png";
import whatsapp from "../../assets/whatsapp.png";
import github from "../../assets/github.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />

      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Jason Myo
        </motion.span>
        <div className="social">
          <a href="">
            <img
              src={linkedin}
              alt="https://www.linkedin.com/in/myo-lwin-moe-aung-134312245/"
            />
          </a>
          <a href="">
            <img
              src={facebook}
              alt="https://www.facebook.com/profile.php?id=100004829777007"
            />
          </a>
          <a href="https://api.whatsapp.com/send?phone=14253801963">
            <img src={whatsapp} alt="" />
          </a>
          <a href="https://github.com/Jason272001">
            <img
              src={github}
              alt=" "
              style={{
                width: "32px",
                height: "32px",
                marginTop: "-7px",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
