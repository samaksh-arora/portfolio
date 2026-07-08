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

          {/* Right side: Formspree contact form */}
          <div className="contact-card">
            <h4>Send me a message</h4>
            <p>
              Fill out the form and I'll get back to you within 24–48 hours.
            </p>

            <form
              className="contact-form"
              action="https://formspree.io/f/xlgyoboz"
              method="POST"
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>

              <button type="submit" className="cta-btn">
                <FaEnvelope /> Send Message
              </button>
            </form>

            <div className="contact-socials">
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