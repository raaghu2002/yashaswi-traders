import React from 'react';
import '../../styles/components/contactpage.css';

const MapSection = () => {
  return (
    <div className="map-container">
      <iframe
        title="Yashaswi Traders Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.723458381927!2d76.8941826!3d12.5344703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bafa13675c1e9cd%3A0xa624b007ddf28d0e!2sYashaswi%20traders%20(steels%20%2C%20materials%20%2C%20fabrications)!5e0!3m2!1sen!2sin!4v1747293465504!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapSection;
