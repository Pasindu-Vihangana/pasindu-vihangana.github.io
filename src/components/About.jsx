import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
    timelineItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="about" className="about">
        <div className="about-container">
          <div className="about-content">
            <div className="about-text">
              <h3>Who I Am</h3>
              <p>
                I'm an Embedded Systems Engineer with a passion for building innovative hardware and firmware solutions. My expertise spans microcontroller programming, IoT device development, PCB design, and Digital Signal Processing. I thrive on solving real-world problems using electronics and software.
              </p>

              <h3>What I Do</h3>
              <p>
                I specialize in embedded firmware development, PCB layout design, and IoT integration. From low-level C/C++ programming to  and debugging, I bring ideas to life by combining deep technical knowledge with creativity and attention to detail.
              </p>

              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-number">+3</span>
                  <span className="stat-label">Years Experience</span>
                </div>

                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Certifications</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
              </div>
            </div>

            <div className="about-image">
              <div className="image-container">
                <div className="portrait-image">
                  <img src="/path-to-your-portrait.jpg" alt="Pasindu Vihangana" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="timeline" className="timeline-section">
        <div className="about-container">
          <div className="section-header">
            <h2 className="section-title">My Journey</h2>
            <p className="section-subtitle">Professional experience and Educational milestones</p>
          </div>

          <div className="timeline-container" ref={timelineRef}>
            <div className="timeline-line"></div>

            <div className="timeline-item left">
              <div className="timeline-content">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <h4>2023 - Present</h4>
                  <h5>Senior Full Stack Developer</h5>
                  <p>Leading development teams and architecting scalable solutions</p>
                </div>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-content">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <h4>2021 - 2023</h4>
                  <h5>Frontend Developer</h5>
                  <p>Building responsive and interactive user interfaces</p>
                </div>
              </div>
            </div>

            <div className="timeline-item left">
              <div className="timeline-content">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <h4>2020 - 2021</h4>
                  <h5>Junior Developer</h5>
                  <p>Learning and growing in software development</p>
                </div>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-content">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <h4>2019 - 2020</h4>
                  <h5>Student Developer</h5>
                  <p>First steps into the world of programming</p>
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
    </>
  );
};

export default About; 