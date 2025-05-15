import React from 'react';
import AboutInfo from '../components/about/AboutInfo';
import TeamSection from '../components/about/TeamSection';
import ScrollToTop from '../components/common/ScrollToTop';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* <div className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn more about Yeshaswi Traders and our commitment to quality</p>
        </div>
      </div> */}
      
      <AboutInfo />
      <TeamSection />
      <ScrollToTop />
    </div>
  );
};

export default AboutPage;