import "./CategoryPage.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Main from "../../components/Main/Main";
import Header from "../../components/Header/Header";

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
    <Header/>
      <Main contentList={categoryContent} feedName={`${categoryId}`} />
    </>
  );
};

export default CategoryPage;
