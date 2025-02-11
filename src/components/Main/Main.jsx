import "./Main.scss";
import ContentList from "../ContentList/ContentList";

const Main = ({ feedName, searchKey }) => {
 
  return (
    <main className="main">
      <div className="main-container">
        <ContentList searchKey={searchKey} feedName={feedName}/>
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
