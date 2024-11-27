import Quotes from "../Quotes/Quotes";
import { Link } from "react-router-dom";
import "./Main.scss";

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
    <main>
      <Quotes />
      <div className="categories">
        <h2 className="categories__heading">Categories</h2>
        <ul className="categories__list">
          {categories.map((category) => {
            return (
              <li
                key={categories.indexOf(category)}
                className="categories__list-item"
              >
                <Link to={`/category/${category}`} className="categories__link">{category}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};
export default Main;
