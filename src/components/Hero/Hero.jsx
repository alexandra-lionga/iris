import "./Hero.scss";
import highlights from "../../data/highlights";
import React, { useState, useEffect } from "react";
const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let pauseQuote = null;

  function prevClickHandler() {
    const isFirstImg = currentImageIndex === 0;
    const newImgIndex = isFirstImg
      ? highlights.length - 1
      : currentImageIndex - 1;
    setCurrentImageIndex(newImgIndex);
  }
  function nextClickHandler() {
    const isLastImg = currentImageIndex === highlights.length - 1;
    const newImgIndex = isLastImg ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newImgIndex);
  }

  useEffect(() => {
    pauseQuote =
      autoPlay &&
      setTimeout(() => {
        nextClickHandler();
      }, 2500);
  });

  return (
    <div className="hero">
      <div className="hero__slider" >
        <div className="hero__slider-overlay"></div>
        <h1 className="hero__slider-text">
          {highlights[currentImageIndex].title}
        </h1>
        <div
          style={{
            backgroundImage: `url(${highlights[currentImageIndex].media})`,
          }}
          className="hero__slider-highlights"
        ></div>
        <div className="hero__navigation">
          <div className={`hero__navigation-btn ${currentImageIndex == 0 ? "active" : ""}`} ></div>
          <div className={`hero__navigation-btn ${currentImageIndex == 1 ? "active" : ""}`}  ></div>
          <div className={`hero__navigation-btn ${currentImageIndex == 2 ? "active" : ""}`}  ></div>
          <div className={`hero__navigation-btn ${currentImageIndex == 3 ? "active" : ""}`}  ></div>
        </div>
      </div>
      <div className="hero__btns">
        {/* &lt; = less than = < and &gt; = greater than = > */}
        <button id="previous" onClick={prevClickHandler}>
          &lt;
        </button>
        <button id="next" onClick={nextClickHandler}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Hero;
