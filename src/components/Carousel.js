import React from "react";
import carrosselImg1 from "../assets/carrossel1.svg";
import carrosselImg2 from "../assets/carrossel2.svg";
import carrosselImg3 from "../assets/carrossel3.svg";
import "./AgroAmazonasSite.css";

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
        <img src={carrosselImg1} alt="Foto 1" className="carousel-img" />
      </div>
      <div className="keen-slider__slide">
        <img src={carrosselImg2} alt="Foto 2" className="carousel-img" />
      </div>
      <div className="keen-slider__slide">
        <img src={carrosselImg3} alt="Foto 3" className="carousel-img" />
      </div>
      <div className="keen-slider__slide">
        <img src={carrosselImg3} alt="Foto 3" className="carousel-img" />
      </div>
    </div>
  );
}
