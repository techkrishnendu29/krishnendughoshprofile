import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Web Compiler for Pattern Recognition and Machine Learning Labs",
    date: "Ongoing",
    stack: ["Python", "Scikit-learn", "Firebase", "AWS", "Docker"],
    description: [
      "Web compiler for AI/ML algorithms with pre-installed frameworks, auto-imported libraries, and zero-config setup.",
      "Sandboxed, cloud execution for scalable, safe, real-time code labs."
    ],
    demo: "#", // Replace with your actual live demo link
    repo: "https://github.com/techkrishnendu29/your-web-compiler-repo"
  },
  {
    title: "AI-Enabled Smart Waste Management & Route Optimization (Android App)",
    date: "Nov 2025",
    stack: ["Java", "Firebase", "Flutter", "Google Maps API", "AI Algorithms"],
    description: [
      "AI-based solution for urban waste collection route optimization.",
      "Vehicle tracking with Google Maps API; real-time data sync and sustainability focus."
    ],
    demo: "#", // Replace with your actual live demo link
    repo: "https://github.com/techkrishnendu29/your-smart-waste-repo"
  },
  {
    title: "Web Based Pharmacy Management System",
    date: "April 2025",
    stack: ["Python (Tkinter)", "MySQL"],
    description: [
      "Automated pharmacy management: sales, inventory, billing (front/back end).",
      "Secure DB handling and efficient user experience."
    ],
    demo: "#", // Replace with your actual live demo link
    repo: "https://github.com/techkrishnendu29/your-pharmacy-management-repo"
  }
];

const Projects = () => (
  <section className="projects">
    <h2>Projects</h2>
    <div className="project-cards">
      {projects.map((project, idx) => (
        <div className="project-card" key={idx}>
          <h3>{project.title}</h3>
          <div className="project-dates">{project.date}</div>
          <div className="project-stack">
            {project.stack.map((tech, i) => <span className="project-tech" key={i}>{tech}</span>)}
          </div>
          <ul>
            {project.description.map((line, j) => <li key={j}>{line}</li>)}
          </ul>
          <div className="project-btns">
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="demo-btn">
              <FaExternalLinkAlt /> Live Demo
            </a>
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="repo-btn">
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;