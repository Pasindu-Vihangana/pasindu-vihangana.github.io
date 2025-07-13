import React from 'react';
import './TechMarquee.css';

const techs = [
  { name: 'C/C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'Embedded C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'ARM Cortex', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Arm_logo_2017.svg' },
  { name: 'STM32', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/STMicroelectronics_logo.svg' },
  { name: 'ESP32', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Espressif_logo.svg' },
  { name: 'FreeRTOS', icon: 'https://www.freertos.org/images/FreeRTOS_logo_small.png' },
  { name: 'Zephyr RTOS', icon: 'https://www.zephyrproject.org/wp-content/uploads/sites/38/2017/07/zephyr-logo-1.png' },
  { name: 'MQTT', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/MQTT_Logo.svg' },
  { name: 'LoRaWAN', icon: 'https://lora-alliance.org/wp-content/uploads/2020/11/lora-alliance-logo.svg' },
  { name: 'Modbus', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Modbus_logo.png' },
  { name: 'CAN bus', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/CAN-Logo.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'KiCad', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Kicad_logo_new.svg' },
  { name: 'Altium', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Altium_Logo.svg' },
  { name: 'JTAG/SWD', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/JTAG_logo.svg' },
  { name: 'PlatformIO', icon: 'https://avatars.githubusercontent.com/u/12944657?s=200&v=4' },
  { name: 'Microchip', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Microchip_logo.svg' },
  { name: 'AVR', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Microchip_logo.svg' },
];

const TechMarquee = () => (
  <div className="tech-marquee-section">
    <div className="tech-marquee-track">
      {[...techs, ...techs].map((tech, idx) => (
        <div className="tech-marquee-item" key={idx}>
          <div className="tech-marquee-icon-wrap">
            <img src={tech.icon} alt={tech.name} className="tech-marquee-icon" />
          </div>
          <span className="tech-marquee-label">{tech.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default TechMarquee; 