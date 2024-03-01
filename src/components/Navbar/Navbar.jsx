// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";
import linkedin from "../../assets/linkedin.png";
import facebook from "../../assets/facebook.png";
import whatsapp from "../../assets/whatsapp.png";
import youtube from "../../assets/youtube.png";
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
            <img src={linkedin} alt="" />
          </a>
          <a href="">
            <img src={facebook} alt="" />
          </a>
          <a href="">
            <img src={whatsapp} alt="" />
          </a>
          <a href="">
            <img src={youtube} alt="mg" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
