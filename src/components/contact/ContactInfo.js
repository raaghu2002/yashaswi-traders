import React from 'react';
import contactpage from '../../styles/components/contactpage.css';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h2>Contact Information</h2>

      <div className="info-grid">
        <div className="info-item">
          <div className="info-icon">
            <i className="fa fa-map-marker-alt"></i>
          </div>
          <div className="info-content">
            <h3>Address</h3>
            <p>MSA complex, Karimane Gate, Nagamalgala road</p>
            <p>Mandya, Karnataka 571401</p>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">
            <i className="fa fa-phone"></i>
          </div>
          <div className="info-content">
            <h3>Phone</h3>
            <p>+91 99009 07884</p>
            <p>+91 88672 89056</p>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">
            <i className="fa fa-envelope"></i>
          </div>
          <div className="info-content">
            <h3>Email</h3>
            <p>info@yeshaswitraders.com</p>
            <p>sales@yeshaswitraders.com</p>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">
            <i className="fa fa-clock"></i>
          </div>
          <div className="info-content">
            <h3>Business Hours</h3>
            <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
            <p>Sunday: 9:00 AM - 12:00 PM</p>
          </div>
        </div>
      </div>

      <div className="social-links">
        <h3>Connect With Us</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;