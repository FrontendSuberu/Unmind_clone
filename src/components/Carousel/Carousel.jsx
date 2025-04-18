import React from 'react'
import './Carousel.css'

const Carousel = () => {
  const slides = Array.from({ length: 6 }, (_, i) => i)

  return (
    <div className="slider">
      <div className="slider-track">
        {slides.concat(slides).map((_, i) => (
          <div className="slide" key={i}>
            <img
              src="https://via.placeholder.com/300x200?text=Slide"
              alt={`Slide ${i + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
