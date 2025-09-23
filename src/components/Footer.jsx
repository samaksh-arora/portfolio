import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Samaksh Arora</h3>
            <p>Software Engineer passionate about making a profound impact using technology.</p>
          </div>
          
          <div className="footer-links">
            <a href="https://github.com/samaksh-arora" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/arorasamaksh" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:samaksharora.09@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            Made with <FaHeart className="heart" /> by Samaksh Arora © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
