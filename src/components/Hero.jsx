import React from ‘react’;
import { Link } from ‘react-scroll’;
import { FaGithub, FaLinkedin, FaEnvelope } from ‘react-icons/fa’;
import DecryptedText from ‘./DecryptedText’;
import ‘./Hero.css’;

const Hero = () => {
  return (
    <section id="hero" className="hero hero-minimal">
      <div className="hero-center">
        <div className="decrypted-container">
          <DecryptedText
            text="Sam Arora"
            speed={80}
            maxIterations={15}
            sequential={true}
            revealDirection="center"
            animateOn="view"
            className="decrypted-revealed"
            encryptedClassName="decrypted-encrypted"
            parentClassName="hero-name"
          />
          <DecryptedText
            text="Software Engineer"
            speed={80}
            maxIterations={15}
            sequential={true}
            revealDirection="center"
            animateOn="view"
            className="decrypted-revealed"
            encryptedClassName="decrypted-encrypted"
            parentClassName="hero-title"
          />
        </div>

        <p className="hero-description">
          I’m a Computer Science student exploring how technology, design, and innovation can shape a better future.
        </p>

        <div className="hero-buttons">
          <a
            href="/Arora_Samaksh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Resume
          </a>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="btn btn-secondary"
          >
            Get In Touch
          </Link>
        </div>

        <div className="social-links">
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
    </section>
  );
};

export default Hero;
