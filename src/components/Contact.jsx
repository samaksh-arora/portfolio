import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-content">
          {/* Left side */}
          <div className="contact-info">
            <h3>Let's work together!</h3>
            <p>
              I'm always interested in hearing about new opportunities 
              and projects. Feel free to reach out!
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>
                  <a href="mailto:samaksharora.09@gmail.com">
                    samaksharora.09@gmail.com
                  </a>
                </span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>
                  <a href="tel:+16474616474">+1 (647) 461-6474</a>
                </span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Windsor, Ontario</span>
              </div>
            </div>
          </div>

          {/* ✅ Right side (new contact card) */}
          <div className="contact-card">
            <h4>Prefer to reach out directly?</h4>
            <p>
              You can email me, call, or connect on LinkedIn — I typically reply within 24–48 hours.
            </p>

            <div className="contact-actions">
              <a className="cta-btn" href="mailto:samaksharora.09@gmail.com">
                <FaEnvelope /> Email
              </a>
              <a className="cta-btn cta-secondary" href="tel:+16474616474">
                <FaPhone /> Call
              </a>
            </div>

            <div className="contact-socials" style={{ marginTop: '0.6rem' }}>
              <a
                href="https://linkedin.com/in/arorasamaksh"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/samaksh-arora"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;