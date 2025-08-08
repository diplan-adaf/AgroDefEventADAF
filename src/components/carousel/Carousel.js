import { useState, useEffect } from "react";
import "./carousel.css";
import Card from "../card/Card";

export default function Carousel({ images, title }) {
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
    // <div className="carousel-section">
    //   <h2>{title}</h2>
    //   <div className="carousel-container">
    //     <button className="carousel-arrow carousel-arrow-left" onClick={goToPrevious}>
    //       <span>‹</span>
    //     </button>
    //     <button className="carousel-arrow carousel-arrow-right" onClick={goToNext}>
    //       <span>›</span>
    //     </button>
    //     <div className="carousel-slide">
    //       <img
    //         src={images[currentIndex].src}
    //         alt={images[currentIndex].alt}
    //         className="carousel-img"
    //       />
    //     </div>
    //     <div className="carousel-indicators">
    //       {images.map((_, index) => (
    //         <button
    //           key={index}
    //           className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
    //           onClick={() => handleIndicatorClick(index)}
    //         />
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <Card className="carousel-section" title={title} align={"center"}>
      <div className="carousel-container">
        <button className="carousel-arrow carousel-arrow-left" onClick={goToPrevious}>
          <span>‹</span>
        </button>

        <button className="carousel-arrow carousel-arrow-right" onClick={goToNext}>
          <span>›</span>
        </button>

        <div className="carousel-slide">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="carousel-img"
          />
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
    </Card>

  );
}
