import ContentCard from "../ContentCard/ContentCard";
import "./ContentList.scss";
import { useEffect, useState } from "react";

export const ContentList = ({ contentList, categories }) => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let pauseCategory = null;

  function nextCategoryHandler() {
    const isLastCategory = currentCategoryIndex === categories.length - 1;
    const newCategoryIndex = isLastCategory ? 0 : currentCategoryIndex + 1;
    setCurrentCategoryIndex(newCategoryIndex);
  }

  useEffect(() => {
    pauseCategory =
      autoPlay &&
      setTimeout(() => {
        nextCategoryHandler();
      }, 2500);
  });
  return (
    <section className="content-list">
      <div
        onMouseEnter={() => {
          setAutoPlay(false);
          clearTimeout(pauseCategory);
        }}
        onMouseLeave={() => {
          setAutoPlay(true);
        }}
      >
        <h2 className="categories__slider">
          Today in {categories[currentCategoryIndex]}
        </h2>
        <ContentCard/>
      </div>
    </section>
  );
};
