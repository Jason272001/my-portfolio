// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import "./Contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const svgStyles = {
    st0: {
      fill: "none",
      stroke: "orange",
      strokeWidth: 0.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
    },
  };

  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(true);
  const isInView = useInView(ref, { margin: "-100px" });
  isInView && { pathLength: 1 };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_nare34c", "template_t5toh6b", formRef.current, {
        publicKey: "mKY2Apvz53sw_AUN3",
      })
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };
  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's Work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>myolwinmoeaung125@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Cupertino, California, United State</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+1 425 380 1963</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ x: 300, opacity: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <svg
            width="450px"
            height="450px"
            version="1.1"
            id="Icons"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32.666 32.666"
          >
            <polyline
              className="st0"
              points="11,12 21,18 31,12 "
              style={svgStyles.st0}
            />
            <motion.line
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              className="st0"
              x1="4"
              y1="12"
              x2="11"
              y2="12"
              style={svgStyles.st0}
            />
            <motion.line
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              className="st0"
              x1="1"
              y1="16"
              x2="12"
              y2="16"
              style={svgStyles.st0}
            />
            <motion.line
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              className="st0"
              x1="4"
              y1="20"
              x2="11"
              y2="20"
              style={svgStyles.st0}
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              className="st0"
              style={svgStyles.st0}
              d="M11,12v-1c0-2.2,1.8-4,4-4h12c2.2,0,4,1.8,4,4v10c0,2.2-1.8,4-4,4H15c-2.2,0-4-1.8-4-4v-1"
            />
          </svg>
        </motion.div>

        <motion.form
          onSubmit={sendEmail}
          ref={formRef}
          action=""
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
        >
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea
            name="message"
            id=""
            rows="8"
            placeholder="message"
          ></textarea>
          <button>Send</button>
          {error && "Error"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
