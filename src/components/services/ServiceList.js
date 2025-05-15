import React from 'react';
import { useEffect } from 'react';
import ServiceCard from './ServiceCard';
import SectionTitle from '../common/SectionTitle';
import services from '../../data/services';
import '../../styles/components/service.css';
import { Link } from 'react-router-dom';

const ServiceList = () => {

  // Base URL for the application
  // const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3000';
  // Log image paths to debug
  useEffect(() => {
    console.log("Services data loaded:", services);
    console.log("Image paths:", services.map(service => service.image));
  }, []);

  return (
    <section className="services-list">
      <div className="container">
        <SectionTitle
          title="Our Services"
          subtitle="Comprehensive Steel Solutions for Your Projects"
        />

        <div className="services-container">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="custom-solutions">
          <div className="custom-solutions-content">
            <h3>Need a Custom Solution?</h3>
            <p>Our team can provide specialized services tailored to your unique requirements. Contact us to discuss your project needs.</p>
            {/* <a href={`${BASE_URL}/contact`} className="btn btn-primary">Contact Us</a> */}
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceList;