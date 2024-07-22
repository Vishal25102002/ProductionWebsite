import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import videoSrc from "../assets/Bgheadervideo.mp4";
import Navhead from "../components/Navbar"; // Ensure the correct import path
import Loading from "../components/Loading"; // Import the Loading component
const useInterval = (callback, delay) => {
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(callback, delay);
    return () => clearInterval(intervalId.current);
  }, [callback, delay]);
};

const Header = () => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const fullText = "SHIV SHAKTI INDUSTRIES";
  const typingSpeed = 100;

  const startTyping = () => {
    setIndex(0);
    setDisplayText("");
  };

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prevText) => prevText + fullText.charAt(index));
        setIndex(index + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [index, typingSpeed]);

  useEffect(() => {
    if (!loading) {
      startTyping();
    }
  }, []);

  if (loading) {
    return <Loading setLoading={setLoading} />;
  }

  return (
    <div>
      <div className="video-overlay vh-100 vw-100 " id="header">
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, delay: 1.1 }}
        >
          <Navhead />
        </motion.div>
        <motion.div
          initial={{ x: 100, y: -1200, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 1 }}
          className="position-absolute top-0 start-0 w-100 h-100"
        >
          <video className="video-background w-100 h-100" autoPlay loop muted>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", delay: 2.5 }}
          className="text-center gradient-text position-relative"
          style={{
            color: "#ffff",
            fontFamily: "sans-serif",
            fontWeight: 600,

            letterSpacing: "4px",
            fontSize: "50px",
          }}
        >
          {displayText.split(" ").map((word, i) =>
            word === "INDUSTRIES" ? (
              <span key={i} style={{ color: "#B4F8C8" }}>
                {word}{" "}
              </span>
            ) : (
              <span key={i} className="texttyping">
                {word}{" "}
              </span>
            )
          )}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 0.3 }}
            style={{ color: "#091235", fontSize: "70px" }}
          >
            {" "}
            |
          </motion.span>
        </motion.h2>
        <motion.div
          className="text-center position-relative"
          style={{
            color: "#fff",
          }}
        >
          <div>
            <span
              className="text"
              style={{
                fontSize: "2.3rem",
                fontFamily: "Poppins",
              }}
            >
              WE ARE POWERTUFF.
            </span>
            <br />
            <span
              className="text"
              style={{
                fontSize: "0.9rem",
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                fontFamily: "Poppins",
                color: "#e6e6e6",
              }}
            >
              Manufacturers of Toughened Glass for Ultimate Safety
            </span>
          </div>
        </motion.div>
        <motion.div className=" position-relative mt-5 text-center ">
          <motion.button className="pt-2 pb-2 px-4 py-4 header-btn">
            <a
              href="#contact"
              style={{
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Let's get in touch!
            </a>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
