import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Your Name</h3>
            <p>Full Stack Developer passionate about creating amazing web experiences.</p>
          </div>
          
          <div className="footer-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            Made with <FaHeart className="heart" /> by Your Name © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
