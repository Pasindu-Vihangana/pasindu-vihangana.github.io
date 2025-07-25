import React, { useState } from 'react';
import './Expertise.css';

const expertise = [
  {
    icon: '👨🏻‍💻',
    title: 'Firmware Development',
    desc: 'Robust, efficient, and maintainable embedded software. C/C++, debugging, and optimization.',
    tags: ['C/C++', 'Debugging', 'Optimization', 'Arduino', 'Nordic Semiconductors', 'STM', 'ESP', 'PlatformIO'],
    image: 'assets/expertise/firmware-dev.jpg',
  },
  {
    icon: '📈',
    title: 'Digital Signal Processing',
    desc: '',
    tags: ['Kalman Filter', 'Mahony Filter', 'Low-Pass', 'High-Pass', 'Band-Pass', 'IIR', 'FIR'],
    image: 'assets/expertise/embedded-linux.jpg',
  },
  {
    icon: '🤖',
    title: 'AI Assisted Solutions',
    desc: '',
    tags: ['R&D', 'Proof of Concept', 'Iterative Refinement'],
    image: 'assets/expertise/default-expertise.jpg',
  },
  {
    icon: '📲',
    title: 'IoT Solutions',
    desc: 'End-to-end IoT device development, sensor interfacing, wireless protocols, and application integration.',
    tags: ['BLE', 'WiFi', 'LoRaWAN', 'MQTT', 'Cloud'],
    image: 'assets/expertise/iot-solutions.jpg',
  },
  {
    icon: '⚙️',
    title: 'Mechanical Systems Designing',
    desc: '',
    tags: ['3D Modeling', '3D Printing'],
    image: 'assets/expertise/embedded-systems.jpg',
  },
  {
    icon: '🕹',
    title: 'Rapid Prototyping',
    desc: 'Hardware made from proof-of-concept to production.',
    tags: ['Soldering', 'Wiring', 'Prototyping', 'Crafting'],
    image: 'assets/expertise/prototyping.jpg',
  },
];

const Expertise = () => {
  const [activeExpertise, setActiveExpertise] = useState(null);
  const [tileHeight, setTileHeight] = useState(500);

  const handleExpertiseHover = (index) => {
    setActiveExpertise(index);
  };

  const handleExpertiseLeave = () => {
    setActiveExpertise(null);
  };

  const currentExpertise = activeExpertise !== null ? expertise[activeExpertise] : null;

  // Update tile height to match list height
  React.useEffect(() => {
    const updateTileHeight = () => {
      const listElement = document.querySelector('.expertise-list');
      if (listElement) {
        const listHeight = listElement.offsetHeight;
        setTileHeight(Math.max(listHeight, 500)); // Minimum 500px
      }
    };

    updateTileHeight();
    window.addEventListener('resize', updateTileHeight);
    return () => window.removeEventListener('resize', updateTileHeight);
  }, []);

  return (
    <section id="expertise" className="expertise-section">
      <div className="expertise-header">
        <span className="expertise-badge">My Expertise</span>
        <h2 className="expertise-title">Delivering Measurable Results</h2>
        <p className="expertise-subtitle">Strategic thinking and technical excellence for embedded, IoT, and firmware projects</p>
      </div>
      <div className="expertise-container">
        <div className="expertise-list">
          {expertise.map((item, idx) => (
            <div
              className={`expertise-list-item ${activeExpertise === idx ? 'active' : ''}`}
              key={idx}
              onMouseEnter={() => handleExpertiseHover(idx)}
              onMouseLeave={handleExpertiseLeave}
            >
              <div className="expertise-list-icon">{item.icon}</div>
              <div className="expertise-list-content">
                <h3 className="expertise-list-title">{item.title}</h3>
                <div className="expertise-list-tags">
                  {item.tags.slice(0, 2).map((tag, i) => (
                    <span className="expertise-list-tag" key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="expertise-detail-tile" style={{ height: `${tileHeight}px` }}>
          {currentExpertise ? (
            <div className="expertise-detail-content">
              <div className="expertise-detail-image">
                <img
                  src={currentExpertise.image}
                  alt={currentExpertise.title}
                  onError={e => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80';
                  }}
                />
              </div>
              <div className="expertise-detail-info">
                <div className="expertise-detail-icon">{currentExpertise.icon}</div>
                <h3 className="expertise-detail-title">{currentExpertise.title}</h3>
                <p className="expertise-detail-desc">{currentExpertise.desc}</p>
                <div className="expertise-detail-tags">
                  {currentExpertise.tags.map((tag, i) => (
                    <span className="expertise-detail-tag" key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="expertise-default-content">
              <div className="expertise-default-image">
                <img
                  src="assets/expertise/default-expertise.jpg"
                  alt="Expertise Overview"
                  onError={e => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80';
                  }}
                />
              </div>
              <div className="expertise-default-text">
                <h3>Hover over an expertise to see details</h3>
                <p>Explore my technical skills and experience areas</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Expertise; 