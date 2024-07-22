import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "../App.css";
import cnc from "../assets/cncmachine.jpg";
import furnace from "../assets/toughened_furnance.jpg";
import edging from "../assets/eding_machine.jpg";

function Machine() {
  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id="machine" className="container text-center my-5">
      <div className="header mb-5 flex mt-6 text-head">
        <h6>Why Us?</h6>
        <h1>We Use Top Notch Machines</h1>
      </div>
      <div className="row img-container">
        <motion.div
          className="col-md-4 machine-img"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          transition={{ duration: 1, type: "spring" }}
        >
          <img
            className="img-fluid"
            src={cnc}
            alt="State-of-the-art CNC Machine"
          />
          <div className="image-caption mt-2">Glass Cutting Machine</div>
          <div className="sub-text">Sub-text</div>
        </motion.div>
        <motion.div
          className="col-md-4 machine-img"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          transition={{ duration: 1.5, type: "spring" }}
        >
          <img className="img-fluid" src={furnace} alt="Toughened Furnace" />
          <div className="image-caption mt-2">Toughened Furnace</div>
          <div className="sub-text">Sub-text</div>
        </motion.div>
        <motion.div
          className="col-md-4 machine-img"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          transition={{ duration: 1.75, type: "spring" }}
        >
          <img className="img-fluid" src={edging} alt="Glass Edging Machine" />
          <div className="image-caption mt-2">Glass Edging Machine</div>
          <div className="sub-text">Sub-text</div>
        </motion.div>
      </div>
    </div>
  );
}

export default Machine;
