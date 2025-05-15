import React from 'react';
import about from '../../styles/components/about.css';

const AboutInfo = () => {
  return (
    <section className="about-info">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2>Our Story</h2>
            <p>
              Established in 2015, we are proud to be the first stainless steel (SS) hardware shop in Mandya. From our humble beginnings, we have become a trusted name in the region for quality metal works and reliable service.
            </p>
            <p>
              We specialize in providing stainless steel railings, custom gates, glass work, and fabrication services for both commercial buildings and residential homes. Our commitment to craftsmanship and timely service has earned us the trust of clients across the Mandya district.
            </p>
            
            <h3>Our Mission</h3>
            <p>
              To deliver top-quality stainless steel and fabrication solutions with a focus on customer satisfaction, safety, and long-lasting performance.
            </p>
            
            <h3>Our Values</h3>
            <ul className="values-list">
              <li><span>Quality:</span> Precision and durability in every product we offer.</li>
              <li><span>Trust:</span> Building strong relationships through honesty and commitment.</li>
              <li><span>Expertise:</span> Skilled workmanship in SS, gates, railings, and glass works.</li>
              <li><span>Local Focus:</span> Serving clients across Mandya and nearby regions.</li>
              <li><span>Customer First:</span> Your satisfaction drives everything we do.</li>
            </ul>
          </div>
          
          <div className="about-image">
            <img src="/assets/images/about.jpg" alt="Yeshaswi Traders facility" />
          </div>
        </div>
        
        <div className="stats-container">
          <div className="stat-item">
            <h3>9+</h3>
            <p>Years of Service in Mandya</p>
          </div>
          <div className="stat-item">
            <h3>800+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat-item">
            <h3>1000+</h3>
            <p>Installations Completed</p>
          </div>
          <div className="stat-item">
            <h3>100+</h3>
            <p>Product Solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
