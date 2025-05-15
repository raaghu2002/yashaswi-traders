import React, { useState, useEffect } from 'react';
import testimonials from '../../data/testimonials';
import SectionTitle from '../common/SectionTitle';
import { FaQuoteLeft, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import '../../styles/components/testimonialslider.css';

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (!animating) {
        nextSlide();
      }
    }, 6000);
    
    return () => clearInterval(interval);
  }, [activeIndex, animating]);
  
  const nextSlide = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setAnimating(false), 600);
  };
  
  const prevSlide = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setAnimating(false), 600);
  };
  
  const goToSlide = (index) => {
    if (animating || index === activeIndex) return;
    setAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setAnimating(false), 600);
  };
  
  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="star" />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half-star" className="star" />);
    }
    
    return <div className="rating-stars">{stars}</div>;
  };
  
  return (
    <section className="testimonial-section">
      <div className="container">
        <SectionTitle 
          title="Customer Testimonials" 
          subtitle="What Our Clients Say About Us" 
        />
        
        <div className="testimonial-carousel">
          <div className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-slide ${index === activeIndex ? 'active' : ''} ${
                  index === activeIndex - 1 || (activeIndex === 0 && index === testimonials.length - 1)
                    ? 'prev'
                    : ''
                } ${
                  index === activeIndex + 1 || (activeIndex === testimonials.length - 1 && index === 0)
                    ? 'next'
                    : ''
                }`}
              >
                <div className="testimonial-content">
                  <div className="client-info">
                    <div className="client-image">
                      <img 
                        src={testimonial.image || "/api/placeholder/150/150"} 
                        alt={testimonial.name}
                      />
                    </div>
                    <div className="client-details">
                      <h4 className="client-name">{testimonial.name}</h4>
                      <p className="client-position">{testimonial.position}</p>
                      <p className="client-location">{testimonial.location}</p>
                      {renderRatingStars(testimonial.rating)}
                    </div>
                  </div>
                  
                  <div className="testimonial-text">
                    <FaQuoteLeft className="quote-icon" />
                    <p>{testimonial.testimonial}</p>
                    <div className="project-info">
                      <span>Project:</span> {testimonial.project}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="testimonial-controls">
            <button 
              className="testimonial-nav prev" 
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonial-dot ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              className="testimonial-nav next" 
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;