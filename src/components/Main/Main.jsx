import { Link } from "react-router-dom";
import "./Main.scss";
import { ContentList } from "../ContentList/ContentList";

export const Main = ({ contentList }) => {
  const categories = [
    "GoodDeeds",
    "Innovation",
    "Health",
    "Environment",
    "Humanitarian",
    "SuccessStories",
    "Inspiration",
    "Community",
    "Kindness",
    "PositiveEvents",
  ];

  return (
    <main className="main">
      <div className="main-container">
        <div className="categories">
          <h3 className="categories__heading ">Categories</h3>
          <div className="categories__cards ">
            {categories.map((category) => {
              return (
                <Link
                  to={`/category/${category}`}
                  key={categories.indexOf(category)}
                  className="categories__card"
                >
                  {category}
                </Link>
              );
            })}
          </div>
        </div>
        {/* <ContentList contentList={contentList} categories={categories} /> */}
      </div>
      <div className="side-container">
        <div className="newsletter">
          <h2 className="newsletter__text">
            Spread positivity! Subscribe for weekly inspiration and good vibes.
          </h2>
          <input type="email" className="newsletter__input" placeholder="Enter your e-mail.."/>
        </div>

        <div className="trends">
          <div className="cool3"> Another Cool Div</div>
          <div className="cool2"> Another Cool Div2</div>
        </div>
      </div>
    </main>
  );
};
export default Main;
