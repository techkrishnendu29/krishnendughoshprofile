import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';

const Hero = () => (
  <section className="hero">
    <img 
      src="/Dp.png" 
      alt="Krishnendu Ghosh" 
      className="avatar" 
    />
    <h1>KRISHNENDU GHOSH</h1>
    <p>AI &amp; ML Enthusiast | Web &amp; App Developer</p>
    <div className="social-links">
      <a href="mailto:techkrishnendu29@gmail.com" aria-label="Email">
        <FaEnvelope />
      </a>
      <a href="https://linkedin.com/in/krishnendu29" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin />
      </a>
      <a href="https://github.com/techkrishnendu29" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub />
      </a>
      <a href="tel:+918910548537" aria-label="Phone">
        <FaPhone />
      </a>
    </div>
    <a 
      href="/CV.pdf" 
      className="resume-btn" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      Download Resume
    </a>
  </section>
);

export default Hero;