import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/Slider.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import SliderData from "./SliderData";

function ActionsSlider({ slides, pullResult }) {
  const [current, setCurrent] = useState(0);
  const { length } = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  // eslint-disable-next-line no-restricted-syntax
  console.log(current);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (pullResult.length === 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={SliderData.id}
          >
            {index === current && (
              <div className="quote-text"> {slide.title} </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

ActionsSlider.propTypes = {
  slides: PropTypes.arrayOf.isRequired,
  pullResult: PropTypes.arrayOf.isRequired,
};

export default ActionsSlider;
