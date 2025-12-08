import React from 'react';
import './Hero.css';

const Hero = () => (
  <div className="hero section-wrapper">
    <div className="hero-card">
      <div className="hero-left">
        <h1 className="hero-title">Krishnendu Ghosh</h1>
        <p className="hero-sub">
          Software Developer • Android Developer • Machine Learning Enthusiast • Lifelong learner.
        </p>

        {/* Buttons */}
        <div className="hero-actions">
          <a
            href="/CV.pdf"
            className="btn-primary"
            download
          >
            Download CV
          </a>

          <a
            href="/CV.pdf"
            className="btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View CV
          </a>
        </div>
      </div>

      <div className="hero-right">
        <img className="hero-photo" src="DP.png" alt="Krishnendu Ghosh" />
      </div>
    </div>
  </div>
);

export default Hero;
