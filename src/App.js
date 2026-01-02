import React, { useEffect } from 'react';
import './App.css';
import { Analytics } from '@vercel/analytics/react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  // Add "scrolled" class to navbar on scroll
  useEffect(() => {
    const header = document.querySelector(".site-header");
    const handleScroll = () => {
      if (window.scrollY > 20) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-root">
      
      {/* Background video */}
      <video className="bg-video" src="/videos/code-bg.mp4" autoPlay muted loop playsInline />
      <div className="bg-overlay" />

      <main className="site-content">
        
        {/* Sticky navbar */}
        <header className="site-header sticky-header">
          <nav className="main-nav">
            <a href="#home" className="nav-brand">Krishnendu Ghosh</a>

            <div className="nav-links">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#education">Education</a>
              <a href="#certifications">Certifications</a>
              <a href="#contact">Contact</a>
            </div>

            <span className="nav-address">
              Uttarpara, Hooghly, West Bengal, India 712245
            </span>
          </nav>
        </header>

        {/* Sections */}
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="education"><Education /></section>
        <section id="certifications"><Certifications /></section>
        <section id="contact"><Contact /></section>

        <Footer />
      </main>

      <Analytics />
    </div>
  );
}

export default App;
