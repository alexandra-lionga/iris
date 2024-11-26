import "./WelcomePage.scss";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  function clickHandler(e) {
    navigate("/home");
  }
  return (
    <main>
      <div className="welcome">
        <h1 className="welcome__heading">Welcome!</h1>
        <button className="welcome__button" onClick={clickHandler}>
          Get Started
        </button>
      </div>
    </main>
  );
};

export default WelcomePage;
