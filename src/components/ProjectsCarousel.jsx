import React, { useState, useEffect } from 'react';
import './ProjectsCarousel.css';

const projects = [
  {
    title: 'Fitness Tracker',
    description: 'A wireless perfomance monitor for tracking fitness metrics and progress for performance based athletics training.',
    image: '/assets/projects/smart-home.jpg',
    caseStudy: '#',
    website: '#',
  },
  {
    title: 'Falcon Tracker',
    description: 'A miniature tracking device capable of tracking locations of falconry birds over 32km+',
    image: '/assets/projects/iot-gateway.jpg',
    caseStudy: '#',
    website: '#',
  },
  {
    title: 'Circuit Smith',
    description: 'An AI assisted circuit design tool for developing circuits and firmware for microcontroller based projects.',
    image: '/assets/projects/wearable.jpg',
    caseStudy: '#',
    website: '#',
  },
  {
    title: 'Garment Counter',
    description: 'Machine-learning based automation solution to minimize manual garment counting errors.',
    image: '/assets/projects/iot-gateway.jpg',
    caseStudy: '#',
    website: '#',
  },
  {
    title: 'Astronaut Shoe',
    description: 'A wireless health and activity monitor shoe that can invoke muscle stimuli to prevent muscle atrophy',
    image: '/assets/projects/iot-gateway.jpg',
    caseStudy: '#',
    website: '#',
  },
];

const AUTO_SCROLL_INTERVAL = 6000;

const ProjectsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);
  const total = projects.length;

  useEffect(() => {
    setFade(true);
    const fadeTimeout = setTimeout(() => setFade(false), 700);
    return () => clearTimeout(fadeTimeout);
  }, [current]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, AUTO_SCROLL_INTERVAL);
    return () => clearInterval(timer);
  }, [total]);

  const prev = () => setCurrent((current - 1 + total) % total);
  const next = () => setCurrent((current + 1) % total);

  const project = projects[current];

  return (
    <section id="projects" className="projects-carousel-section">
      <div className="carousel-header">
        <span className="carousel-badge">Featured Projects</span>
      </div>
      <div className="carousel-container">
        <button className="carousel-arrow left" onClick={prev} aria-label="Previous project">&#8592;</button>
        <div className={`carousel-tile${fade ? ' fade' : ''}`}>
          <div className="carousel-image">
            <img
              src={project.image || 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80'}
              alt={project.title}
              onError={e => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80';
              }}
            />
          </div>
          <div className="carousel-info">
            <h3 className="carousel-project-title">{project.title}</h3>
            <p className="carousel-project-desc">{project.description}</p>
            <div className="carousel-buttons" style={{ display: 'none' }}>
              <a href={project.caseStudy} className="carousel-btn" target="_blank" rel="noopener noreferrer">View Case Study &#8594;</a>
              <a href={project.website} className="carousel-btn secondary" target="_blank" rel="noopener noreferrer">Visit Website <span style={{ fontSize: '1.1em' }}>↗</span></a>
            </div>
          </div>
        </div>
        <button className="carousel-arrow right" onClick={next} aria-label="Next project">&#8594;</button>
      </div>
      <div className="carousel-indicators">
        {projects.map((_, idx) => (
          <span key={idx} className={idx === current ? 'active' : ''} onClick={() => setCurrent(idx)}></span>
        ))}
      </div>
      <div className="carousel-all-btn-wrap" style={{ display: 'none' }}>
        <a href="#projects" className="carousel-all-btn">View All Projects &#8594;</a>
      </div>
    </section>
  );
};

export default ProjectsCarousel; 