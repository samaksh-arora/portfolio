import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-content">
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
