import React from 'react';
import './Services.css';

const services = [
  {
    icon: '🧠',
    title: 'Embedded Systems Design',
    subtitle: 'Custom hardware and firmware solutions for real-world applications.',
    features: [
      'Microcontroller & SoC integration',
      'PCB design & prototyping',
      'Real-time & low-power systems'
    ],
    link: '#',
  },
  {
    icon: '📡',
    title: 'IoT Solutions',
    subtitle: 'End-to-end IoT device development and connectivity.',
    features: [
      'Sensor interfacing & data acquisition',
      'Wireless protocols (BLE, LoRa, WiFi)',
      'Cloud & edge integration'
    ],
    link: '#',
  },
  {
    icon: '🛠️',
    title: 'Firmware Development',
    subtitle: 'Robust, efficient, and maintainable embedded software.',
    features: [
      'C/C++ & Embedded C programming',
      'RTOS & bare-metal systems',
      'Debugging & optimization'
    ],
    link: '#',
  },
];

const Services = () => (
  <section id="services" className="services-section">
    <div className="services-header">
      <span className="services-badge">Services</span>
      <h2 className="services-title">What I Deliver</h2>
      <p className="services-subtitle">
        Results-focused solutions tailored to your specific engineering needs
      </p>
    </div>
    <div className="services-cards">
      {services.map((service, idx) => (
        <div className="service-card" key={idx}>
          <div className="service-icon">{service.icon}</div>
          <h3 className="service-name">{service.title}</h3>
          <p className="service-desc">{service.subtitle}</p>
          <ul className="service-features">
            {service.features.map((f, i) => (
              <li key={i}>&#8594; {f}</li>
            ))}
          </ul>
          {/* <a href={service.link} className="service-link">Learn More &rarr;</a> */}
        </div>
      ))}
    </div>
  </section>
);

export default Services; 