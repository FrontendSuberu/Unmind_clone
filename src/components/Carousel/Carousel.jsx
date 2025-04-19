import React from "react";
import hero1 from "../../assets/hero/hero1.png";
import hero2 from "../../assets/hero/hero2.jpg";
import hero3 from "../../assets/hero/hero3.png";
import hero4 from "../../assets/hero/hero4.jpg";
import hero5 from "../../assets/hero/hero5.jpg";
import hero6 from "../../assets/hero/hero6.png";
import hero7 from "../../assets/hero/ai-coach.svg";

import "./Carousel.css";

const Carousel = () => {
  const slides = [
    {
      img: hero1,
    },
    {
      img: hero2,
    },
    {
      img: hero3,
    },
    {
      img: hero4,
    },
    {
      img: hero5,
    },
    {
      img: hero6,
    },
    {
      img: hero7,
    },
  ];

  return (
    <div className="slider">
      <div className="slider-track">
        {slides.concat(slides).map((slide, i) => (
          <div className="slide" key={i}>
            <img src={slide.img} alt={`Slide ${i + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
