import "./Hero.scss";
import highlights from "../../data/highlights";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__slider">
        {highlights.map((highlight) => {
          return (
            <div key={highlight.id} className="hero__slider-item">
              {/* <h1 className="hero__slider-heading">{highlight.title}</h1> */}
              <img src={highlight.media} alt="highlighted story"className="hero__slider-img" />
            </div>
          );
        })}
        <div className="hero__btns">
          {/* &lt; = less than = < and &gt; = greater than = > */}
          <button id="previous">&lt;</button>
          <button id="next">&gt;</button>
        </div>
        <div className="hero__dots">
          <ul className="hero__dots-list">
            <li className="hero__dots-item">•</li>
            <li className="hero__dots-item">•</li>
            <li className="hero__dots-item">•</li>
            <li className="hero__dots-item">•</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
