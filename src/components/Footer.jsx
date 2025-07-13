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
              <li>Embedded Systems</li>
              <li>IoT Solutions</li>
              <li>Firmware Development</li>
              <li>Hardware Prototyping</li>
              <li>Embedded Linux</li>
            </ul>
          </div>
          <div className="footer-col">
            <h3 className="footer-title">Tools</h3>
            <ul className="footer-list">
              <li>PCB Design</li>
              <li>RTOS</li>
              <li>Cloud Integration</li>
              <li>Debugging</li>
              <li>Security Testing</li>
            </ul>
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