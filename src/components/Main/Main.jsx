import "./Main.scss";
import categories from "../../data/categories.js";
import ContentList from "../ContentList/ContentList";

const Main = ({ contentList }) => {
 
  return (
    <main className="main">
      <div className="main-container">
        <ContentList contentList={contentList} />
      </div>
      <div className="side-container">
        <div className="newsletter">
          <h2 className="newsletter__text">
            Spread positivity! Subscribe for weekly inspiration and good vibes.
          </h2>
          <input type="email" className="newsletter__input" placeholder="Enter your e-mail.."/>
        </div>
      </div>
    </main>
  );
};
export default Main;
