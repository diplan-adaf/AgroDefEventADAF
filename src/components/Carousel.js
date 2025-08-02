import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Carousel() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1,
      spacing: 15,
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider carousel-container">
      <div className="keen-slider__slide">
        <img src="/assets/carrossel1.jpg" alt="Foto 1" className="carousel-img" />
      </div>
      <div className="keen-slider__slide">
        <img src="/assets/carrossel2.jpg" alt="Foto 2" className="carousel-img" />
      </div>
      <div className="keen-slider__slide">
        <img src="/assets/carrossel3.jpg" alt="Foto 3" className="carousel-img" />
      </div>
    </div>
  );
}