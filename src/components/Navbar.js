import React, { useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Logo from "../Logo.png";

const linkVariants = {
  initial: {
    scale: 1,
    color: "#ffffff",
  },
  hover: {
    borderBottom: "1px solid #A4A8AB",
    color: "#A4A8AB",
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

function Navhead() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, delay: 1.1 },
    });
  }, [controls]);

  return (
    <motion.div initial={{ opacity: 0, x: -300 }} animate={controls}>
      <Navbar collapseOnSelect expand="lg" className="nav" variant="dark">
        <Container>
          <Navbar.Brand href="#header">
            <img
              src={Logo}
              style={{ height: "auto", width: "100px" }}
              className="mx-4"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="text-white"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto justify-content-end m-1 p-2 mx-4 gap-5">
              <motion.a
                href="#home"
                variants={linkVariants}
                initial="initial"
                whileHover="hover"
                className="nav-link"
              >
                Home
              </motion.a>
              <motion.a
                href="#about"
                variants={linkVariants}
                initial="initial"
                whileHover="hover"
                className="nav-link"
              >
                About
              </motion.a>
              <motion.a
                href="#product"
                variants={linkVariants}
                initial="initial"
                whileHover="hover"
                className="nav-link"
              >
                Product
              </motion.a>
              <motion.a
                href="#contact"
                variants={linkVariants}
                initial="initial"
                whileHover="hover"
                className="nav-link"
              >
                Contact Us
              </motion.a>
              <motion.a
                href="/adminlogin"
                variants={linkVariants}
                initial="initial"
                whileHover="hover"
                className="nav-link"
              >
                Login
              </motion.a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
}

export default Navhead;
