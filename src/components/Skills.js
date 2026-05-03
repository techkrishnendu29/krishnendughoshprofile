import React from "react";
import { 
  SiPython, SiC,SiCplusplus, SiJavascript, SiMysql, SiPostgresql,
  SiFirebase, SiReact, SiFlutter, SiAndroid, SiStreamlit, SiGit, SiDocker, SiHtml5, SiCss3, SiTensorflow
} from "react-icons/si";
import { DiJava } from "react-icons/di"; // Java icon from Devicons

import './Skills.css';

const skills = [
  { name: "Python", icon: <SiPython color="#3776AB" /> },
  { name: "C", icon: <SiC color="#00599C" /> },
  { name: "C++", icon: <SiCplusplus color="#00599C" /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  { name: "Java", icon: <DiJava color="#E76F00" /> },
  { name: "React", icon: <SiReact color="#61DBFB" /> },
  { name: "HTML5", icon: <SiHtml5 color="#E44D26" /> },
  { name: "CSS3", icon: <SiCss3 color="#264DE4" /> },
  { name: "Flutter", icon: <SiFlutter color="#02569B" /> },
  { name: "Android", icon: <SiAndroid color="#3DDC84" /> },
  { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
  { name: "Firebase", icon: <SiFirebase color="#FFCB2B" /> },
  { name: "Streamlit", icon: <SiStreamlit color="#FF4B4B" /> },
  { name: "Git", icon: <SiGit color="#F05030" /> },
  { name: "Docker", icon: <SiDocker color="#2496ED" /> },
  { name: "TensorFlow", icon: <SiTensorflow color="#FF6F00" /> }
];

const Skills = () => (
  <section className="skills">
    <h2>Skills</h2>
    <div className="skills-grid">
      {skills.map((skill, idx) => (
        <div className="skill-cell" key={idx}>
          <span className="skill-logo" aria-hidden="true">{skill.icon}</span>
          <span className="skill-name">{skill.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
