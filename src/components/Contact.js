import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => (
  <section className="contact">
    <h2>Get in Touch</h2>
    <div className="contact-cards">
      <a href="mailto:techkrishnendu29@gmail.com" className="contact-card">
        <FaEnvelope /><span>techkrishnendu29@gmail.com</span>
      </a>
      <a href="tel:+918910548537" className="contact-card">
        <FaPhone /><span>+91 8910545837</span>
      </a>
      <a href="https://linkedin.com/in/krishnendu29" target="_blank" rel="noopener noreferrer" className="contact-card">
        <FaLinkedin /><span>LinkedIn</span>
      </a>
      <a href="https://github.com/techkrishnendu29" target="_blank" rel="noopener noreferrer" className="contact-card">
        <FaGithub /><span>GitHub</span>
      </a>
    </div>
  </section>
);

export default Contact;