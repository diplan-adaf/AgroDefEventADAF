import { useState, useEffect } from "react";
import "./carousel.css";

export default function Carousel({ images, title = "STANDS" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length, isAutoPlay]);

  const goToPrevious = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleIndicatorClick = (index) => {
    setIsAutoPlay(false);
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-section">
      <h2>{title}</h2>
      <div className="carousel-container">
        <button className="carousel-arrow carousel-arrow-left" onClick={goToPrevious}>
          ‹
        </button>
        <button className="carousel-arrow carousel-arrow-right" onClick={goToNext}>
          ›
        </button>
        
        <div className="carousel-content">
          <div className="carousel-image-container">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="carousel-img"
            />
            <div className="carousel-overlay">
              <div className="carousel-counter">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </div>
          
          <div className="carousel-info">
            <h3>{images[currentIndex].title || images[currentIndex].alt}</h3>
            <p>{images[currentIndex].description || "Visualize os detalhes do stand"}</p>
            {images[currentIndex].features && (
              <div className="carousel-features">
                {images[currentIndex].features.map((feature, index) => (
                  <span key={index} className="feature-tag">
                    {feature}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
