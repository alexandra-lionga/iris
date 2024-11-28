import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import "./CategoryPage.scss";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { categoryId } = useParams();
  return (
    <>
      <Header />
      <Hero/>
      <main>
        <h2>{categoryId}</h2>
        
      </main>
    </>
  );
};

export default CategoryPage;
