import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ShareYourStoryPage from "./pages/ShareYourStoryPage/ShareYourStoryPage";

import StoryDetailsPage from "./pages/StoryDetailsPage/StoryDetailsPage";
import ImpactHubPage from "./pages/ImpactHubPage/ImpactHubPage";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function App() {
  const [contentList, setContentList] = useState(null);

  const getContentList = async () => {
    try {
      const { data } = await axios.get(`${API_BASE_URL}/api/content`);
      setContentList(data);
    } catch (error) {
      alert("Error retrieving content list. Error: " + error);
    }
  };

  useEffect(() => {
    getContentList();
  }, []);


  if (!contentList) {
    return <div className="loading"></div>;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<WelcomePage/>}
          />
          <Route path="/home" element={<HomePage contentList={contentList} />} />
          <Route path="/category/:categoryId" element={<CategoryPage contentList={contentList} />} />
          <Route path="/share-your-story" element={<ShareYourStoryPage contentList={contentList}  />} />
          <Route path="/story/:storyId" element={<StoryDetailsPage contentList={contentList} />} />
          <Route path="/impact-hub" element={<ImpactHubPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
