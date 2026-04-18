import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "OncoScan XAI – Explainable Multi-Modal Transfer Learning Framework for AI-Assisted Breast Cancer Detection",
    date: "Currently Working",
    description: [
      "Coming Soon",
      "Note : Group Project"
    ],
  },
  
  {
    title: " TextSage AI – Intelligent Text Summarization Tool",
    date: "Feb 2026",
    stack: [" Flutter","Firebase", "Python", "REST API"],
    description: [
      "Engineered a scalable NLP platform for real-time text summarization and sentiment analysis" ,
      "Supporting applications in document processing, review analysis, and research assistance."
    ],
    demo: "https://textsage.krishnendughosh.in/", // Replace with your actual live demo link
    repo: "https://github.com/techkrishnendu29/aitextsummary"
  },
  {
    title: " CleanRoute An AI-Enabled Smart Waste Management & Route Optimization (Android App)",
    date: "Nov 2025",
    stack: [" Flutter","Firebase", "Python", "REST API"],
    description: [
      "AI-based solution for urban waste collection route optimization.",
      "Vehicle tracking with Google Maps API; real-time data sync and sustainability focus."
    ],
    demo: "00", // Replace with your actual live demo link
    repo: "https://github.com/techkrishnendu29/cleanroute"
  },
  {
    title: " AgriVision – AI-Driven Precision Agriculture Monitoring Platform-Android App",
    date: "Sept 2025",
    stack: ["Python", "FastAPI", "Flutter", "Firebase", "MATLAB", "CNN", "LSTM", "Google Earth Engine","OpenWeather API"],
    description: [
     "Built a precision agriculture system using hyperspectral imaging, sensor data, and weather APIs with CNN/LSTM models.",
      "For crop health and pest prediction, supported by a FastAPI backend and Flutter app delivering real-time farm insights.",
      "Note : Group Project"
    ],
    demo: "https://youtu.be/IPtR71QSoNQ?si=8JtALBTccIN6ZNhX", // Replace with your actual live demo link
    repo: "https://github.com/techkrishnendu29/AgriVision"
  },
  {
    title: "Web Based Pharmacy Management System",
    date: "April 2025",
    stack: ["Python (Tkinter)", "MySQL"],
    description: [
      "Automated pharmacy management: sales, inventory, billing (front/back end).",
      "Secure DB handling and efficient user experience.",
      "Note : As it is made with Tkinter and Because Tkinter creates desktop windows, and cloud hosting platforms do not have a graphical desktop environment.So we give this output as a Screen Recording"
    ],
    demo: "https://youtu.be/SvEXOa74DF8", // Replace with your actual live demo link
    repo: "https://github.com/techkrishnendu29/pharmacymanagementsystem-"
  }
];

const Projects = () => (
  <section className="projects-section section-wrapper" id="projects">
    <h2 className="section-heading">Projects</h2>
    <div className="projects-grid">
      {projects.map((p, i) => (
        <article className="project-card" key={i}>
          <div style={{display: 'flex', gap: '12px', alignItems: 'baseline', width: '100%'}}>
            <h3 className="project-title" style={{margin:0}}>{p.title}</h3>
            <div className="project-date" style={{marginLeft:'auto', color:'#bfdcff', fontWeight:600}}>{p.date}</div>
          </div>

          {/* description can be multiple paragraphs */}
          {p.description.map((line, idx) => (
            <p className="project-desc" key={idx} style={{marginTop: idx === 0 ? '8px' : '6px'}}>{line}</p>
          ))}

          {/* tech stack as chips */}
          <div className="project-tech" style={{marginTop: '10px', display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
              {p.stack && p.stack.map((tech, tIdx) => (
              <span className="tech-chip" key={tIdx} style={{
                background: 'linear-gradient(90deg,#00e0a1,#00b3ff)',
                color: '#07102a',
                padding: '6px 8px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.85rem'
              }}>
                {tech}
              </span>
            ))}
          </div>

          {/* links */}
          <div className="project-links" style={{marginTop: '12px', display: 'flex', gap: '10px'}}>
            {p.demo && p.demo !== '#' && (
              <a className="project-link" href={p.demo} target="_blank" rel="noopener noreferrer">Live demo</a>
            )}
            {p.repo && (
              <a className="project-link" href={p.repo} target="_blank" rel="noopener noreferrer">Source</a>
            )}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Projects;
