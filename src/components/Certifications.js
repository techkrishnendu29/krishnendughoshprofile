import React, { useState, useEffect } from 'react';
import './Certifications.css';

const certifications = [
  {
    title: "English Language for Competitive Exams",
    image: "/certifications/2.png",
    issuer: "NPTEL (IITM)",
    date: "APRIL 2024",
    description: "An online course focused on competitive English comprehension, grammar, and communication for workplace and academia.",
    link: "https://nptel.ac.in/noc/E_Certificate/NPTEL24HS73S105970095030767325"
  },
  {
    title: "Ethics in Engineering Practice",
    image: "/certifications/4.png",
    issuer: "NPTEL (IITKGP)",
    date: "APRIL 2024",
    description: "Focuses on ethical dilemmas, professional responsibility, and codes of conduct for engineers.",
    link: "https://nptel.ac.in/noc/E_Certificate/NPTEL24MG17S65970153130767325"
  },
  {
    title: "Communication in the 21st Century Workplace",
    image: "/certifications/1.png",
    issuer: "Coursera (UOC, IRVINE)",
    date: "MAY 2024",
    description: "Developed advanced communication and collaboration skills for modern workplaces.",
    link: "https://coursera.org/verify/Y8CDXPFPN5ZN"
  },
  {
    title: "Enhancing Soft Skills and Personality",
    image: "/certifications/3.png",
    issuer: "NPTEL (IITK)",
    date: "APRIL 2024",
    description: "Focused on personal and professional development, leadership and teamwork.",
    link: "https://nptel.ac.in/noc/E_Certificate/NPTEL24HS26S45970125130767325"
  },
  {
    title: "Introduction To Internet Of Things",
    image: "/certifications/5.png",
    issuer: "NPTEL (IITKGP)",
    date: "NOV 2024",
    description: "Principles, applications and implementation of IoT in Industry 4.0.",
    link: "https://nptel.ac.in/noc/E_Certificate/NPTEL24CS115S85230181104357575"
  },
  {
    title: "Introduction To Machine Learning",
    image: "/certifications/6.png",
    issuer: "Duke University",
    date: "NOV 2024",
    description: "Fundamentals of machine learning, algorithms, and real-world AI use cases.",
    link: "https://coursera.org/verify/7906UN0771RK"
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