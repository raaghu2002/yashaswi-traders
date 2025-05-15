import React from 'react';
import ServiceList from '../components/services/ServiceList';
import ScrollToTop from '../components/common/ScrollToTop';

const ServicesPage = () => {
  return (
    <div className="services-page">
      {/* <div className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Professional steel solutions for your projects</p>
        </div>
      </div> */}
      
      <ServiceList />
      <ScrollToTop />
    </div>
  );
};

export default ServicesPage;