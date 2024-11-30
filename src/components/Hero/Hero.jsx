import "./Hero.scss";
import highlights from "../../data/highlights";
import React, { useState } from "react";
const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  return (
    <div className="hero">
      <div className="hero__slider">
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
