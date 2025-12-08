import React from 'react';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => (
  <header className="header">
    <h1>KRISHNENDU GHOSH</h1>
    <p>Uttarpara, Hooghly, West Bengal, India 712245</p>
    <div className="header-contacts">
      <span><FaPhone /> +91 8910545837</span>
      <span>
        <FaEnvelope /> <a href="mailto:techkrishnendu29@gmail.com">techkrishnendu29@gmail.com</a>
      </span>
      <span>
        <FaLinkedin /> <a href="https://linkedin.com/in/krishnendu29" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </span>
      <span>
        <FaGithub /> <a href="https://github.com/techkrishnendu29" target="_blank" rel="noopener noreferrer">GitHub</a>
      </span>
    </div>
  </header>
);

export default Header;