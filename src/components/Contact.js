import React, { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"; // Assuming the CSS file is named App.css

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({ name, phone, email, message }); // Add logging
    try {
      const res = await fetch("http://localhost:3001/send_email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, message }),
      });
      const result = await res.json();
      if (res.ok) {
        alert(
          "Thank you for contacting us! Your message has been sent successfully."
        );
      } else {
        alert(`Failed to send your message: ${result.message}`);
      }
    } catch (error) {
      console.error(error);
      alert(
        "An error occurred while sending your message. Please try again later."
      );
    }
  };

  return (
    <>
      <motion.div
        className="footer-wrapper container text- my-5"
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="contact-header">
          <h1 className="h1contact">Contact Us</h1>
          <h2 className="h2contact">Got more questions?</h2>
          <h2 className="h2contact"> Contact us today!</h2>
          <p>
            Don't like forms? <a href="tel:+919327036273">Give us a call</a>
          </p>
        </div>
        <div className="form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="Full name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]{10}"
                className="form-control"
                placeholder="Phone number"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                name="email"
                type="email"
                id="email"
                className="form-control"
                placeholder="yourmail@companymail.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                className="form-control"
                rows="3"
                name="message"
                placeholder="Message..."
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </div>
      </motion.div>
      <div className="border-line"></div>
    </>
  );
}

export default Contact;
