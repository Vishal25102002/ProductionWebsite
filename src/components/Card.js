import React from "react";
import "../App.css";
import { motion } from "framer-motion";

function Card({ image, heading, content }) {
  return (
    <div className="card-container">
      <motion.div className="card">
        <img src={image} alt="Product" className="card-image" />
        <motion.h5 className="product-heading">{heading}</motion.h5>
        <div className="product-content">
          <p>{content}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Card;
