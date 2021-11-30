import React, { useEffect, useState } from "react";
import axios from 'axios';
import BtnSlider from "./BtnSlider";
import HeroButton from "./HeroButton";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const [Sd, setSd] = useState([]);


  useEffect(() => {
    axios.get('/api/data-slider').then((res) => {
      setSd(res.data);
    });
  }, []);



  const nextSlide = () => {
    if (slideIndex !== Sd.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === Sd.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(Sd.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };




  return (
    <div className="container-slider">
      {Sd.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img
              src={process.env.PUBLIC_URL + `/media/slider${index + 1}.jpg`}
              alt="Hero slider lewabro"
            />
            <div
              className={
                slideIndex === index + 1
                  ? "hero-titles-wrapper active"
                  : "hero-titles-wrapper"
              }
            >
              <h1 className="hero-title">
                {slideIndex === index + 1 ? obj.title : obj.title}
              </h1>
              <h5 className="hero-subtitle">
                {slideIndex === index + 1 ? obj.subTitle : obj.subTitle}
              </h5>
              <HeroButton
                title={
                  slideIndex === index + 1 ? obj.buttonText : obj.buttonText
                }
                url={slideIndex === index + 1 ? obj.buttonUrl : obj.buttonUrl}
              />
            </div>
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: 2 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
