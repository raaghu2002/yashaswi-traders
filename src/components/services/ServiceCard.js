import React, { useState, useEffect } from 'react';
import '../../styles/components/service.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

  // const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3000';

  const [imageError, setImageError] = useState(false);

  // Function to handle image loading errors
  const handleImageError = () => {
    console.error(`Failed to load image: ${service.image}`);
    setImageError(true);
  };

  return (
    <div className="service-card" id={service.id}>
      <div className="service-image">
        {imageError ? (
          <div className="image-placeholder">
            <span>{service.name}</span>
          </div>
        ) : (
          <img
            src={service.image}
            alt={service.name}
            onError={handleImageError}
          />
        )}
      </div>
      <div className="service-content">
        <h3>{service.name}</h3>
        <p>{service.description}</p>
        <ul className="service-features">
          {service.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        {/* <a href={`${BASE_URL}/contact`} className="btn btn-outline">Inquire Now</a> */}
        <Link to="/contact" className="btn btn-outline">Inquire Now</Link>
      </div>
    </div>
  );
};

export default ServiceCard;