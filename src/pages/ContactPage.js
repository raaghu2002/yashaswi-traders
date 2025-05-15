import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import MapSection from '../components/contact/MapSection';
import ContactInfo from '../components/contact/ContactInfo';
import ScrollToTop from '../components/common/ScrollToTop';

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team for inquiries and quotes</p>
        </div>
      </div> */}
      
      <div className="container">
        <div className="contact-grid">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
      
      <MapSection />
      <ScrollToTop />
    </div>
  );
};

export default ContactPage;