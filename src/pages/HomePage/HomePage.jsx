import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import "./HomePage.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Main from "../../components/Main/Main";
import Quotes from "../../components/Quotes/Quotes";


const API_BASE_URL = import.meta.env.VITE_API_URL;

const HomePage = () => {
  const [contentList, setContentList] = useState(null);

  const getContentList = async () => {
    try {
      const { data } = await axios.get(`${API_BASE_URL}/api/content`);
      setContentList(data);
    } catch (error) {
      alert("Error retrieving content list. Error: " + error);
    }
  };

  useEffect(()=>{
    getContentList();
  },[]);

  return (
    <>
      <Header />
      <Hero />
      <Quotes/>
      <Main contentList={contentList}/>
    </>
  );
};

export default HomePage;
