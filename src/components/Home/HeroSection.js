import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/hero.css';

const HeroSection = () => {
  // This will use the BASE_URL from your environment variables
  // const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3000';

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Yashaswi Traders</h1>
        <p>Steels, Materials, Fabrications</p>
        <p>Trusted supplier of iron and steel products in Mandya since 1995</p>
        <p>Commercial Fabrication, Residential Fabrication, and Steel Materials Hardware Shop</p>
        <div className="hero-buttons">
          <Link to="/products" className="btn btn-primary">Explore Products</Link>
          <Link to="/contact" className="btn btn-outline">Contact Us</Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;