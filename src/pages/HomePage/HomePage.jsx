import Hero from "../../components/Hero/Hero";
import "./HomePage.scss";
import Main from "../../components/Main/Main";
import Quotes from "../../components/Quotes/Quotes";
import Header from "../../components/Header/Header";
import React, { useState, useEffect } from "react";

const HomePage = ({ contentList }) => {
  const [searchKey, setSearchKey] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function clearSearch() {
    console.log("its here");
    setSearchKey('');
  }

  return (
    <>
      <Header clearSearch={clearSearch} setSearchKey={setSearchKey} searchKey={searchKey} />
      <Hero />
      <Quotes />
      <Main searchKey={searchKey} />

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            background: "#dd6b37",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Scroll to Top
        </button>
      )}
    </>
  );
};

export default HomePage;
