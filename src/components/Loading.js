// src/components/Loading.js

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import loadingAnimation from "../Animation - 1715872211803.json"; // Adjust the path accordingly
import "../App.css";

const Loading = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <AnimatePresence>
      <motion.div
        className="loading-screen"
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Lottie animationData={loadingAnimation} loop={true} />
      </motion.div>
    </AnimatePresence>
  );
};

export default Loading;
