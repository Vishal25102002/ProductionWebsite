import React from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import FontAwesome CSS
import "../App.css";
import logo from "../Logo.png";
function Footer() {
  return (
    <>
      <motion.footer
        id="footer"
        className="footer"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} />
            <p className="footer-head">We Are PowerTuff!</p>
            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#products">Products</a>
              </li>
              <li>
                <a href="#about">About us</a>
              </li>
              <li>
                <a href="#blogs">Blogs</a>
              </li>
              <li>
                <a href="#contact">Contact us</a>
              </li>
            </ul>
          </div>
          <div className="footer-contact container ">
            <h3>Contact Details</h3>

            <p className="address">
              <i className="fas fa-map-marker-alt"></i> D/41/A Shiv Shakti
              Toughened Glass Industries Diamond Park G.I.D.C, Naroda,
              Ahmedabad, Gujarat, India
            </p>
            <p>
              <i class="fa-solid fa-phone"></i>{" "}
              <a href="tel:+919327036273">+ (91) 9327036273</a>
            </p>
            <p>
              <i className="fas fa-envelope"></i>{" "}
              <a href="mailto:shaktituff@yahoo.in">shaktituff@yahoo.in</a>
            </p>
          </div>
        </div>
      </motion.footer>
      <div className="copyright ">
        <p>Copyright 2024 © Shiv Shakti Industries</p>
      </div>
    </>
  );
}

export default Footer;
