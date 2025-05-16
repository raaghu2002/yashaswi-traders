import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h2>Contact Information</h2>
      <div className="info-grid">
        <div className="info-item">
          <div className="info-icon">
            <FaMapMarkerAlt />
          </div>
          <div className="info-content">
            <h3>Address</h3>
            <p>MSA complex, Karimane Gate, Nagamalgala road</p>
            <p>Mandya, Karnataka 571401</p>
          </div>
        </div>
        <div className="info-item">
          <div className="info-icon">
            <FaPhone />
          </div>
          <div className="info-content">
            <h3>Phone</h3>
            <p>+91 99009 07884</p>
            <p>+91 88672 89056</p>
          </div>
        </div>
        <div className="info-item">
          <div className="info-icon">
            <FaEnvelope />
          </div>
          <div className="info-content">
            <h3>Email</h3>
            <p>info@yeshaswitraders.com</p>
            <p>sales@yeshaswitraders.com</p>
          </div>
        </div>
        <div className="info-item">
          <div className="info-icon">
            <FaClock />
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
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook-icon">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter-icon">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram-icon">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;