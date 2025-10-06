import React, { useState, useEffect } from 'react';
import MyImage from "../assets/MyImage.png"
// import myImage from "../assets/MyImageEdit.png"
import './Hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const texts = ['Frontend Developer', 'UI/UX Designer', 'React Specialist', 'Creative Coder'];
    const currentText = texts[currentTextIndex];
    
    if (currentIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex(0);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentTextIndex]);

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-name">
            Hi, I'm <span className="name-highlight">Chandan Kumar</span>
          </h1>
          <h2 className="hero-title">
            <span className="typing-text">{displayText}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-description">
            I create beautiful and functional web experiences with modern technologies.
            Passionate about clean code, innovative design, and user-centered development.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View My Work
            </button>
            <button className="btn-secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get In Touch
            </button>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="image-container">
            <div className="profile-ring"></div>
            <div className="profile-image">
              <img 
                src={MyImage}
                alt="Chandan Kumar - Portfolio" 
                className="profile-img"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;