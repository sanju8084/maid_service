import React from 'react';
import '../about/about.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About Us</h2>
          <p className="about-description">
            Welcome to <strong>MelBourne maid Services</strong>, your trusted partner in finding reliable and skilled professionals to make your life easier. Whether you need a part-time or full-time service, we provide expertly trained staff for:
          </p>
          <ul className="about-list">
            <li>Cooking Maids</li>
            <li>Cleaning Maids</li>
            <li>Nannies</li>
            <li>Caretakers</li>
            <li>All-rounders</li>
          </ul>
          <p className="about-highlight">
            We ensure all our staff are background-checked, trained, and committed to delivering excellent service. Let us help you make your home a haven.
          </p>
        </div>
        <div className="about-image">
          <img 
            src="./customerHandle.png" 
            alt="Dedicated staff working in a home setting" 
          />
        </div>
      </div>
    </section>
  );
};

export default About;

