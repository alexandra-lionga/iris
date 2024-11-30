
import "./CategoryPage.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Main from "../../components/Main/Main";
import ContentList from "../../components/ContentList/ContentList";

const CategoryPage = ({ contentList }) => {
  const { categoryId } = useParams();

  const [categoryContent, setCategoryContent] = useState(null);

  const catContent = contentList.filter(
    (content) => content.category == categoryId
  );

  useEffect(() => {
    setCategoryContent(catContent);
  }, [categoryId]);

  return (
    <>
  
      <div className="category">
        <h2 className="category__heading">{categoryId}</h2>
      </div>

      <Main contentList={categoryContent} />
    </>
  );
};

export default CategoryPage;
