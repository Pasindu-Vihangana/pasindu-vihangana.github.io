import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Who I Am</h3>
            <p>
              I'm an Embedded Systems Engineer with a passion for building innovative hardware and firmware solutions. My expertise spans microcontroller programming, IoT device development, PCB design, and real-time systems. I thrive on solving real-world problems by bridging the gap between electronics and software.
            </p>
            
            <p>
              With hands-on experience in designing, prototyping, and deploying embedded solutions, I enjoy working on projects that push the boundaries of technology. My journey in electronics began with curiosity and has grown into a career dedicated to creating impactful, reliable, and efficient systems.
            </p>
            
            <h3>What I Do</h3>
            <p>
              I specialize in embedded firmware development, hardware design, and IoT integration. From low-level C/C++ programming to PCB layout and debugging, I bring ideas to life by combining deep technical knowledge with creativity and attention to detail.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-container">
              <div className="placeholder-about">
                <span>📚</span>
              </div>
              <div className="experience-timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>2023 - Present</h4>
                    <p>Senior Full Stack Developer</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>2021 - 2023</h4>
                    <p>Frontend Developer</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>2020 - 2021</h4>
                    <p>Junior Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-values">
          <h3>My Values</h3>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">🎯</div>
              <h4>Quality</h4>
              <p>I believe in delivering high-quality code that is clean, maintainable, and scalable.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🚀</div>
              <h4>Innovation</h4>
              <p>Always exploring new technologies and approaches to solve problems creatively.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🤝</div>
              <h4>Collaboration</h4>
              <p>Working closely with teams and clients to ensure the best possible outcomes.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">📈</div>
              <h4>Growth</h4>
              <p>Continuously learning and improving my skills to stay ahead of the curve.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 