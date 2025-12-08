import React, { useState, useEffect } from 'react';
import './Certifications.css';

const certifications = [
  {
    title: "English Language for Competitive Exams",
    image: "/certifications/2.png",
    issuer: "NPTEL (IITM)",
    date: "2022",
    description: "An online course focused on competitive English comprehension, grammar, and communication for workplace and academia.",
    link: "https://archive.nptel.ac.in/noc/courses/106/106/106106169/"
  },
  {
    title: "Ethics in Engineering Practice",
    image: "/certifications/3.png",
    issuer: "NPTEL (IITKGP)",
    date: "2023",
    description: "Focuses on ethical dilemmas, professional responsibility, and codes of conduct for engineers.",
    link: "https://archive.nptel.ac.in/noc/courses/110/110/110110047/"
  },
  {
    title: "Communication in the 21st Century Workplace",
    image: "/certifications/1.png",
    issuer: "Coursera (UOC, IRVINE)",
    date: "2021",
    description: "Developed advanced communication and collaboration skills for modern workplaces.",
    link: "https://www.coursera.org/learn/communication21century"
  },
  {
    title: "Enhancing Soft Skills and Personality",
    image: "/certifications/4.png",
    issuer: "NPTEL (IITK)",
    date: "2022",
    description: "Focused on personal and professional development, leadership and teamwork.",
    link: "https://archive.nptel.ac.in/noc/courses/109/104/109104107/"
  },
  {
    title: "Introduction To Internet Of Things",
    image: "/certifications/5.png",
    issuer: "NPTEL (IITKGP)",
    date: "2022",
    description: "Principles, applications and implementation of IoT in Industry 4.0.",
    link: "https://archive.nptel.ac.in/noc/courses/106/105/106105166/"
  },
  {
    title: "Introduction To Machine Learning",
    image: "/certifications/6.png",
    issuer: "Duke University",
    date: "2023",
    description: "Fundamentals of machine learning, algorithms, and real-world AI use cases.",
    link: "https://www.coursera.org/learn/machine-learning-duke"
  }
];

const Certifications = () => {
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);

  // Auto-rotate certificates every 3 seconds
  useEffect(() => {
    if (!flipped) {
      const interval = setInterval(() => {
        setCurrent(prev => (prev + 1) % certifications.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [flipped]);

  // Flip logic (hover)
  const handleMouseEnter = () => setFlipped(true);
  const handleMouseLeave = () => setFlipped(false);

  const cert = certifications[current];

  return (
    <section className="certifications">
      <h2>Certifications</h2>
      <div className="cert-carousel-wrapper">
        <div
          className={`cert-card ${flipped ? "flipped" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          tabIndex={0}
        >
          <div className="cert-card-inner">
            {/* Front: Certificate image and name at the bottom */}
            <div className="cert-card-front">
              <img src={cert.image} alt={cert.title} className="cert-big-img" />
              <div className="cert-title">{cert.title}</div>
            </div>
            {/* Back: Certificate details */}
            <div className="cert-card-back">
              <div className="cert-back-content">
                <div className="cert-title-back">{cert.title}</div>
                <div className="cert-issuer"><strong>Issuer:</strong> {cert.issuer}</div>
                <div className="cert-date"><strong>Date:</strong> {cert.date}</div>
                <div className="cert-desc">{cert.description}</div>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                  View Credential
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="cert-pagination">{current + 1} / {certifications.length}</div>
        <div className="cert-flip-tip">Hover to view certificate details.</div>
      </div>
    </section>
  );
};

export default Certifications;