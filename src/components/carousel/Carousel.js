import carrosselImg1 from "../../assets/saida-1.svg";
import carrosselImg2 from "../../assets/saida-2.svg";
import carrosselImg3 from "../../assets/saida-3.svg";
import carrosselImg4 from "../../assets/saida-4.svg";
import carrosselImg5 from "../../assets/saida-5.svg";
import carrosselImg6 from "../../assets/saida-6.svg";
import carrosselImg7 from "../../assets/saida-7.svg";
import carrosselImg8 from "../../assets/saida-8.svg";
import { useState, useEffect } from "react";
import "./carousel.css"; // Importando o CSS do Carousel

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  
  const images = [
    { src: carrosselImg1, alt: "Foto 1" },
    { src: carrosselImg2, alt: "Foto 2" },
    { src: carrosselImg3, alt: "Foto 3" },
    { src: carrosselImg4, alt: "Foto 4" },
    { src: carrosselImg5, alt: "Foto 5" },
    { src: carrosselImg6, alt: "Foto 6" },
    { src: carrosselImg7, alt: "Foto 7" },
    { src: carrosselImg8, alt: "Foto 8" }
  ];

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 0.5 segundos = 500ms

    return () => clearInterval(interval);
  }, [images.length, isAutoPlay]);

  const goToPrevious = () => {
    setIsAutoPlay(false); // Pausa a rotação automática
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlay(false); // Pausa a rotação automática
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleIndicatorClick = (index) => {
    setIsAutoPlay(false); // Pausa a rotação automática
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-section">
      <h1>STANDS</h1>
      
      <div className="carousel-container">
      {/* Seta esquerda */}
      <button className="carousel-arrow carousel-arrow-left" onClick={goToPrevious}>
        <span>‹</span>
      </button>

      {/* Seta direita */}
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
      
      {/* Indicadores de slide */}
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
