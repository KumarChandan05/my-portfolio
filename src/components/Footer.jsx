import React, { useState, useEffect } from 'react';
import './Footer.css';
import GitHubIcon from '../assets/GitHubIcon';
import LinkedInIcon from '../assets/LinkedInIcon';
import TwitterIcon from '../assets/TwitterIcon';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: <GitHubIcon />, href: 'https://github.com/KumarChandan05' },
    { name: 'LinkedIn', icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/chandankumar52/' },
    { name: 'Twitter', icon: <TwitterIcon />, href: 'https://x.com/Chandan76554165' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down more than the viewport height (hero section)
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (scrollPosition > windowHeight * 0.8) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Chandan Kumar</h3>
              <p>Frontend Developer & UI/UX Designer</p>
            </div>
            <p className="footer-description">
              Creating beautiful and functional web experiences with passion for clean code and innovative design.
            </p>
            <div className="footer-social">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="social-link"
                  aria-label={link.name}
                  title={link.name}
                >
                  <span>{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get In Touch</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="icon">📧</span>
                <span>chandan050201@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="icon">📱</span>
                <span>+91 8658121332</span>
              </div>
              <div className="contact-item">
                <span className="icon">📍</span>
                <span>Bengaluru, Karnataka  560037</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showBackToTop && (
        <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
          <span>↑</span>
        </button>
      )}

      <div className="footer-bg-elements">
        <div className="bg-element element-1"></div>
        <div className="bg-element element-2"></div>
        <div className="bg-element element-3"></div>
      </div>
    </footer>
  );
};

export default Footer;