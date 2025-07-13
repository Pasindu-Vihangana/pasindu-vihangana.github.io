import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content new-footer-grid">
          <div className="footer-col">
            <h3 className="footer-title">Start a Project</h3>
            <p className="footer-desc">Let's create your next big idea.</p>
            <a href="#contact" className="footer-cta-btn">Get in Touch <span className="footer-cta-arrow">→</span></a>
          </div>
          <div className="footer-col">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-list">
              <a href="/contact"><li>Embedded Systems Designing</li></a>
              <a href="/contact"><li>Mechanical Systems Designing</li></a>
              <a href="/contact"><li>Application Development</li></a>
            </ul>
          </div>
          <div className="footer-col">
            <h3 className="footer-title">Expertise</h3>
            <a href="/projects"><h3 className="footer-title">Projects</h3></a>
            <h3 className="footer-title">Certifications</h3>
            <h3 className="footer-title">About Me</h3>
          </div>
          <div className="footer-col">
            <h3 className="footer-title">Connect</h3>
            <ul className="footer-list">
              <li><span className="footer-icon" role="img" aria-label="LinkedIn">🔗</span> <a href="https://www.linkedin.com/in/pasindu-vihangana/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><span className="footer-icon" role="img" aria-label="Schedule a Call">📅</span> <a href="mailto:pasindu@example.com">Schedule a Call</a></li>
              <li><span className="footer-icon" role="img" aria-label="Awwwards">🏆</span> <a href="#">Awwwards</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Pasindu Vihangana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 