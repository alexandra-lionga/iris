import "./WelcomePage.scss";
import smileRain from "/src/assets/images/single-smile-rain.svg"
import { useNavigate } from "react-router-dom";

const WelcomePage = ({handleModeToggle}) => {
  const navigate = useNavigate();

  function clickHandler(e) {
    navigate("/home");
  }


  return (
    <main>
      <div className="welcome" data-theme='dark'>
        <img src={smileRain} className="welcome__image"/>
        <h1 className="welcome__heading">Welcome!</h1>
        <button className="welcome__button" onClick={clickHandler}>
          Get Started
        </button>
        <p className="mode-text">Set the Mood:</p>
      </div>
    </main>
  );
};

export default WelcomePage;
