import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Product from "./components/Product";
import Contact from "./components/Contact";
import AdminLogin from "./components/AdminLogin";
import Dashboard from "./components/Dashboard"; // Import the Dashboard component
import { AnimatePresence } from "framer-motion";
import Machine from "./components/Machine";
import Footer from "./components/Footer";

const App = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/adminlogin" && <Navbar /> &&
        location.pathname !== "/dashboard"}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <>
                <div id="home">
                  <Header />
                </div>
                <div id="machine">
                  <Machine />
                </div>
                <div id="product">
                  <Product />
                </div>
                <div id="about">
                  <About />
                </div>
                <div id="contact">
                  <Contact />
                </div>
                <div id="footer">
                  <Footer />
                </div>
              </>
            }
          />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
