import Hero from "../../components/Hero/Hero";
import "./HomePage.scss";
import Main from "../../components/Main/Main";
import Quotes from "../../components/Quotes/Quotes";
import Header from "../../components/Header/Header";
import React from "react";
import { useState, useEffect } from "react";


const HomePage = ({contentList}) => {

  const [searchKey , setSearchKey]=useState('');

  function clearSearch(){
    console.log("its here")
    setSearchKey('');
  }

  return (
    <>
      <Header clearSearch={clearSearch} setSearchKey={setSearchKey} searchKey={searchKey} />
      <Hero />
      <Quotes />
      <Main searchKey={searchKey} />
    </>
  );
};

export default HomePage;
