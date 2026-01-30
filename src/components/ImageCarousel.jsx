import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

function ImageCarousel({ images }) {
  // State to track current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate images every 0.5 seconds (500ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // 500ms = 0.5 seconds

    // Cleanup interval when component unmounts
    return () => clearInterval(interval);
  }, [images.length]);

  // Go to next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Go to previous image
  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      {/* Main Image Display */}
      <div className="carousel-image-wrapper">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
      </div>

      {/* Navigation Arrows */}
      <button className="carousel-arrow prev" onClick={goToPrev} title="Previous">
        ❮
      </button>
      <button className="carousel-arrow next" onClick={goToNext} title="Next">
        ❯
      </button>

      {/* Dots Indicator */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            title={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Image Counter */}
      <div className="carousel-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

export default ImageCarousel;
