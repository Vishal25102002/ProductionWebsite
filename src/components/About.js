import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import glassbuilding from "../assets/glassbuidling.jpg";
import { motion } from "framer-motion";
import "../App.css";
const About = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="container text-center my-5"
      id="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="aboutus-head">
        <h1>About Us</h1>
      </div>
      <div className="d-flex justify-content-between about-container">
        <div className="about-img">
          <img src={glassbuilding} alt="Glass Building" className="img-fluid" />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="about-text"
          transition={{ duration: 7.5, type: "spring" }}
        >
          <div className="about-us-text">
            <h1 className="font-bold">Shiv Shakti Industries</h1>
            <p>
              Established in 2002, is a renowned leader in the toughened glass
              industry. As one of the oldest and most respected names in the
              sector, we pride ourselves on our state-of-the-art facilities and
              our commitment to quality and innovation.
            </p>
            <p>
              Our advanced manufacturing processes and stringent quality control
              measures ensure that we deliver exceptional products that meet the
              highest standards of durability and performance.
            </p>
            <p>
              At Shiv Shakti Industries, we are dedicated to providing our
              customers with superior toughened glass solutions that enhance the
              safety and aesthetic appeal of their projects.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
