import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate
} from "framer-motion";
import "./Certifications.css";

/* ---------------- CERTIFICATIONS DATA ---------------- */
const certifications = [
  {
    title: "English Language for Competitive Exams",
    image: "/certifications/2.png",
    issuer: "NPTEL (IITM)",
    date: "APRIL 2024",
    description:
      "An online course focused on competitive English comprehension, grammar, and communication.",
    link:
      "https://nptel.ac.in/noc/E_Certificate/NPTEL24HS73S105970095030767325"
  },
  {
    title: "Ethics in Engineering Practice",
    image: "/certifications/4.png",
    issuer: "NPTEL (IITKGP)",
    date: "APRIL 2024",
    description:
      "Focuses on ethical dilemmas and professional responsibility.",
    link:
      "https://nptel.ac.in/noc/E_Certificate/NPTEL24MG17S65970153130767325"
  },
  {
    title: "Communication in the 21st Century Workplace",
    image: "/certifications/1.png",
    issuer: "Coursera (UOC, IRVINE)",
    date: "MAY 2024",
    description:
      "Advanced communication and collaboration skills.",
    link: "https://coursera.org/verify/Y8CDXPFPN5ZN"
  },
  {
    title: "Enhancing Soft Skills and Personality",
    image: "/certifications/3.png",
    issuer: "NPTEL (IITK)",
    date: "APRIL 2024",
    description:
      "Leadership, teamwork, and personality development.",
    link:
      "https://nptel.ac.in/noc/E_Certificate/NPTEL24HS26S45970125130767325"
  },
  {
    title: "Introduction To Internet Of Things",
    image: "/certifications/5.png",
    issuer: "NPTEL (IITKGP)",
    date: "NOV 2024",
    description:
      "IoT principles and Industry 4.0 applications.",
    link:
      "https://nptel.ac.in/noc/E_Certificate/NPTEL24CS115S85230181104357575"
  },
  {
    title: "Introduction To Machine Learning",
    image: "/certifications/6.png",
    issuer: "Duke University",
    date: "NOV 2024",
    description:
      "Machine learning fundamentals and real-world AI use cases.",
    link: "https://coursera.org/verify/7906UN0771RK"
  }
];

/* ---------------- MAIN COMPONENT ---------------- */
const Certifications = () => {
  const [current, setCurrent] = useState(0);
  const containerX = useMotionValue(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % certifications.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Animate sliding
  useEffect(() => {
    animate(containerX, -current * 300, {
      type: "spring",
      stiffness: 80,
      damping: 15
    });
  }, [current]);

  return (
    <section className="certifications">
      <h2>Certifications</h2>

      <div className="carousel-container">
        <motion.div className="carousel-track" style={{ x: containerX }}>
          {certifications.map((cert, index) => (
            <AnimatedCard
              key={index}
              cert={cert}
              containerX={containerX}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ---------------- ANIMATED CARD ---------------- */
const AnimatedCard = ({ cert, containerX }) => {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);
  const [screenCenter, setScreenCenter] = useState(500);

  useEffect(() => {
    const update = () => {
      if (ref.current) {
        const left = ref.current.offsetLeft;
        const width = ref.current.offsetWidth;
        setOffset(left + width / 2);
      }
      setScreenCenter(window.innerWidth / 2);
    };

    setTimeout(update, 100);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const distance = useTransform(containerX, (x) => {
    const center = x + offset;
    return Math.abs(center - screenCenter);
  });

  const scale = useTransform(distance, [0, screenCenter], [1, 0.6]);
  const opacity = useTransform(distance, [0, screenCenter], [1, 0.3]);
  const zIndex = useTransform(distance, [0, screenCenter], [100, 0]);

  return (
    <motion.div
      ref={ref}
      className="cert-card"
      style={{ scale, opacity, zIndex }}
    >
      <img src={cert.image} alt={cert.title} />
      <div className="cert-info">
        <h3>{cert.title}</h3>
        <p>{cert.issuer}</p>
      </div>
    </motion.div>
  );
};

export default Certifications;
