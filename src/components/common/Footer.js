// src/components/common/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import '../../styles/components/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container grid-footer">
          <div className="footer-info">
            <Link to="/" className="footer-logo">
              <img src="/assets/logo.png" alt="Yeshaswi Traders" />
              <h3>Yeshaswi Traders</h3>
            </Link>
            <p>
              Premium steel products and custom fabrication services for residential and commercial needs since 2005.
            </p>
            <ul className="social-links">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-services">
            <h4>Our Services</h4>
            <ul>
              <li>
                <Link to="/services">Residential Fabrication</Link>
              </li>
              <li>
                <Link to="/services">Commercial Fabrication</Link>
              </li>
              <li>
                <Link to="/services">Custom Steel Cutting</Link>
              </li>
              <li>
                <Link to="/services">Welding Services</Link>
              </li>
              <li>
                <Link to="/services">On-site Installation</Link>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <FaMapMarkerAlt className="icon" />
                <span>MSA complex, Karimane Gate, Nagamangala Main Road, Mandya - 571401</span>
              </li>
              <li>
                <FaPhone className="icon" />
                <a href="tel:+919900907884">+91 9900907884</a>
              </li>
              <li>
                <FaEnvelope className="icon" />
                <a href="mailto:info@yeshaswitraders.com">info@yeshaswitraders.com</a>
              </li>
            </ul>
            <div className="business-hours">
              <h5>Business Hours</h5>
              <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
              <p>Sunday: 9:00 AM - 12:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Yeshaswi Traders. All Rights Reserved.</p>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;