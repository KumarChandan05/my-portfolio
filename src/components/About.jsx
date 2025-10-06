import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="text-block">
              <h3>Passionate Developer</h3>
              <p>
                I'm a passionate frontend developer with over 1 years of experience creating 
                engaging and user-friendly web applications. I love turning complex problems 
                into simple, beautiful, and intuitive solutions.
              </p>
            </div>
            
            <div className="text-block">
              <h3>Always Learning</h3>
              <p>
                Technology evolves rapidly, and I embrace continuous learning. I stay updated 
                with the latest trends in web development, UI/UX design, and emerging 
                technologies to deliver cutting-edge solutions.
              </p>
            </div>
            
            <div className="stats">
              <div className="stat-item">
                <span className="stat-number" data-target="50">1</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" data-target="3">1</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" data-target="25">1</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="code-window">
              <div className="window-header">
                <div className="window-controls">
                  <span className="control close"></span>
                  <span className="control minimize"></span>
                  <span className="control maximize"></span>
                </div>
                <span className="window-title">portfolio.jsx</span>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="line-number">1</span>
                  <span className="code-text">
                    <span className="keyword">const</span>{' '}
                    <span className="variable">developer</span>{' '}
                    <span className="operator">=</span>{' '}
                    <span className="brace">{'{'}</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">2</span>
                  <span className="code-text">
                    {'  '}<span className="property">name</span>
                    <span className="operator">:</span>{' '}
                    <span className="string">'Chandan Kumar'</span>
                    <span className="comma">,</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">3</span>
                  <span className="code-text">
                    {'  '}<span className="property">skills</span>
                    <span className="operator">:</span>{' '}
                    <span className="bracket">['React', 'JavaScript']</span>
                    <span className="comma">,</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">4</span>
                  <span className="code-text">
                    {'  '}<span className="property">passion</span>
                    <span className="operator">:</span>{' '}
                    <span className="string">'Creating amazing UX'</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">5</span>
                  <span className="code-text">
                    <span className="brace">{'}'}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;