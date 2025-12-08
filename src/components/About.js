import React from 'react';
import './About.css';

const About = () => (
  <section className="about-section section-wrapper" id="about">
    <div className="about-card">
      <div className="about-left">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
            I’m Krishnendu Ghosh, a Software Developer specializing in Android and Web development with a growing passion for Machine Learning. I love building practical, 
            user-focused applications that combine clean architecture,
             modern design, and scalable backend systems. Whether mobile or web,
            I enjoy turning ideas into functional products that solve real problems.
        </p>

        <p className="about-list-title">💡 What I do</p>
        <ul className="about-list">
          <li>Android Development: Kotlin · Java · XML · Firebase · REST APIs</li>
          <li>Web Development: React · Node.js · Express ·MongoDB</li>
          <li>Software Engineering: API development · automation · system design · deployment</li>
          <li>Machine Learning: model training · evaluation · Python libraries</li>
        </ul>
      I believe great software is built through clarity, curiosity, 
      and continuous learning and I enjoy working in environments where innovation and quality code come together.
      </div>

      <div className="about-right">
        <div className="about-meta">
          <div className="meta-row"><strong>Location:</strong> Kolkata, India</div>
          <div className="meta-row"><strong>Availability:</strong> Open to freelance,Internship & full-time</div>
        </div>
      </div>
    </div>
  </section>
);

export default About;