import React from "react";

// import leftArrow from "./icons/left-arrow.svg";
// import rightArrow from "./icons/right-arrow.svg";

const  rightArrow = 'right';
const  leftArrow = 'left';


export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {/* <img src={direction === "next" ? rightArrow : leftArrow} /> */}
      <i className={"arrows fa fa-arrow-" + (direction === "next" ? rightArrow : leftArrow)}></i> 
    </button> 
  );
}
