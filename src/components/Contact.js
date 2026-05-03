import React, { useState } from 'react';
import './Contact.css';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const CONTACT_EMAIL = 'techkrishnendu29@gmail.com'; // replace with real email

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!name || !email || !message) {
      setStatus('Please fill all fields.');
      return;
    }

    // open user's mail client with prefilled fields (fallback, keeps no backend)
    const subject = encodeURIComponent(`Website contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus('Opening mail client...');
  };

  return (
    <section className="contact-section dark-contact">
      <div className="contact-wrapper">
        <h2 className="contact-title">Contact Krishnendu</h2>
        <p className="contact-sub">
          I’m open to collaborations, freelance work and interesting projects. Send a brief message and I’ll get back within 48 hours.
        </p>

        <div className="contact-grid">
          <div className="contact-card contact-info">
            <h3>Get in touch</h3>
            <p className="muted">Prefer email? Use the form or write directly:</p>
          

            <div className="contact-socials">
                        
  <a className="contact-item" href="mailto:techkrishnendu29@gmail.com">
    <FaEnvelope className="contact-icon" /> <span>techkrishnendu29@gmail.com</span>
  </a>

  <a className="contact-item" href="tel:+918910545837">
    <FaPhone className="contact-icon" /> <span>+91 8910545837</span>
  </a>

  <a className="contact-item" href="https://linkedin.com/in/krishnendu29" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="contact-icon" /> <span>LinkedIn</span>
  </a>

  <a className="contact-item" href="https://github.com/techkrishnendu29" target="_blank" rel="noopener noreferrer">
    <FaGithub className="contact-icon" /> <span>GitHub</span>
  </a>

                      
            </div>
          </div>

          <form className="contact-card contact-form" onSubmit={handleSubmit}>
            <label>
              <span>Name</span>
              <input name="name" type="text" placeholder="Your name" required />
            </label>

            <label>
              <span>Email</span>
              <input name="email" type="email" placeholder="you@example.com" required />
            </label>

            <label>
              <span>Message</span>
              <textarea name="message" placeholder="Tell me about your project or question..." rows="6" required />
            </label>

            <div className="contact-actions">
              <button type="submit" className="btn-primary">Send message</button>
              <div className="form-status">{status}</div>
            </div>
          </form>
        </div>

        <div className="contact-note">
          <small>By sending a message you agree to receive a reply to the address you provide. I respect your privacy.</small>
        </div>
      </div>
    </section>
  );
};

export default Contact;