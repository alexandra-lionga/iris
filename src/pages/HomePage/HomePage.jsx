import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import "./HomePage.scss";
import Main from "../../components/Main/Main";
import Quotes from "../../components/Quotes/Quotes";


const HomePage = ({contentList}) => {
  console.log(contentList);

  return (
    <>
      <Hero />
      <Quotes />
      <Main  contentList={contentList}/>
    </>
  );
};

export default HomePage;
