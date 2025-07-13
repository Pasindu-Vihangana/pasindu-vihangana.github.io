import React from 'react';
import './Expertise.css';

const expertise = [
  {
    icon: '🧠',
    title: 'Embedded Systems Design',
    desc: 'Custom hardware and firmware for real-world applications. Microcontroller & SoC integration, PCB design, and real-time systems.',
    tags: ['Microcontrollers', 'PCB Design', 'RTOS', 'Low Power'],
  },
  {
    icon: '📡',
    title: 'IoT Solutions',
    desc: 'End-to-end IoT device development, sensor interfacing, wireless protocols, and cloud integration.',
    tags: ['MQTT', 'BLE', 'LoRaWAN', 'Cloud'],
  },
  {
    icon: '🛠️',
    title: 'Firmware Development',
    desc: 'Robust, efficient, and maintainable embedded software. C/C++, debugging, and optimization.',
    tags: ['C/C++', 'Debugging', 'Optimization', 'Bare Metal'],
  },
  {
    icon: '🔒',
    title: 'Security & Reliability',
    desc: 'Secure boot, encrypted comms, and fail-safe design for mission-critical systems.',
    tags: ['Secure Boot', 'Encryption', 'Watchdog', 'Testing'],
  },
  {
    icon: '⚡',
    title: 'Hardware Prototyping',
    desc: 'Rapid prototyping, soldering, and hardware bring-up for proof-of-concept and production.',
    tags: ['Prototyping', 'Soldering', 'Bring-up', 'Testing'],
  },
  {
    icon: '🐧',
    title: 'Embedded Linux',
    desc: 'Linux BSP, device drivers, and application development for embedded platforms.',
    tags: ['Linux', 'Device Drivers', 'BSP', 'Shell'],
  },
];

const Expertise = () => (
  <section className="expertise-section">
    <div className="expertise-header">
      <span className="expertise-badge">My Expertise</span>
      <h2 className="expertise-title">Delivering Measurable Results</h2>
      <p className="expertise-subtitle">Strategic thinking and technical excellence for embedded, IoT, and firmware projects</p>
    </div>
    <div className="expertise-cards">
      {expertise.map((item, idx) => (
        <div className="expertise-card" key={idx}>
          <div className="expertise-icon">{item.icon}</div>
          <h3 className="expertise-name">{item.title}</h3>
          <p className="expertise-desc">{item.desc}</p>
          <div className="expertise-tags">
            {item.tags.map((tag, i) => (
              <span className="expertise-tag" key={i}>{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Expertise; 