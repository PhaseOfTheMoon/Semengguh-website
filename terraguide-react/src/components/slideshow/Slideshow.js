import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const Slideshow = ({ slides, interval = 5000, className = "mySlides", showDots = true }) => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    // Auto-advance slides
    const timer = setInterval(() => {
      plusSlides(1);
    }, interval);
    
    return () => clearInterval(timer); // Clean up on unmount
  }, [slideIndex, interval]);

  const plusSlides = (n) => {
    let newIndex = slideIndex + n;
    if (newIndex > slides.length) newIndex = 1;
    if (newIndex < 1) newIndex = slides.length;
    setSlideIndex(newIndex);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`${className} fade`} 
          style={{ display: index + 1 === slideIndex ? 'flex' : 'none' }}
        >
          {slide}
        </div>
      ))}

      <button className="prev" onClick={() => plusSlides(-1)}>&#10094;</button>
      <button className="next" onClick={() => plusSlides(1)}>&#10095;</button>

      {showDots && (
        <div className="dots-container">
          {slides.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index + 1 === slideIndex ? 'active' : ''}`} 
              onClick={() => currentSlide(index + 1)}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Slideshow;