import './App.scss'
import HomePage from './pages/HomePage/HomePage';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from './pages/WelcomePage/WelcomePage';
import CategoryPage from './pages/CategoryPage/CategoryPage';

function App() {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-mode", mode);
    localStorage.setItem("mode", mode);
  }, [mode]);

  const handleModeToggle = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
  };
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<WelcomePage handleModeToggle={handleModeToggle} />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
