import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
const API_BASE_URL = import.meta.env.VITE_API_URL;

function App() {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");
  const [contentList, setContentList] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-mode", mode);
    localStorage.setItem("mode", mode);
  }, [mode]);

  const handleModeToggle = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
  };

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
    console.log(contentList);
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
            element={<WelcomePage handleModeToggle={handleModeToggle} />}
          />
          <Route path="/home" element={<HomePage contentList={contentList}/>} />
          <Route path="/category/:categoryId" element={<CategoryPage contentList={contentList} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
