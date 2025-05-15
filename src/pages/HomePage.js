import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import ServiceHighlights from '../components/Home/ServiceHighlights';
import TestimonialSlider from '../components/Home/TestimonialSlider';
import ScrollToTop from '../components/common/ScrollToTop';

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <FeaturedProducts />
      <ServiceHighlights />
      <TestimonialSlider />
      <ScrollToTop />
    </div>
  );
};

export default HomePage;