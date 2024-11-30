import "./Header.scss";
import logo from "/src/assets/images/logo/iris-full-logo.png";
import burgerMenu from "/src/assets/images/icons/Burger Menu 1.svg";
import flowerIcon from "/src/assets/images/icons/flower-icon.png";
import closeIcon from "/src/assets/images/icons/Close.png";
import searchIcon from "/src/assets/images/icons/search.svg";
import plusCircleIcon from "/src/assets/images/icons/plus-circle.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";


import React from "react";

const Header = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isSerachBarOpen, setIsSearchBarOpen] = useState(false);

  const displayNav = () => {
    setNavOpen((previous) => !previous);
  }
  const searchBarHandler = () => {
    setIsSearchBarOpen((previous) => !previous);
  }

  return (
    <header>
      <nav className="nav">

        <Link to="/home">
          <img src={logo} alt="website logo" className="nav__logo" />
          <img src={flowerIcon} alt="website logo" className="nav__logo--mobile" />
        </Link>

        <div className="nav__content">

          <img src={burgerMenu} onClick={displayNav} className="nav__icon-open" />

          <ul className={`nav__list ${isNavOpen ? "nav__list--active" : ""}`}>

            <li className="nav__list-item">
              <NavLink to="/home" className="nav__link"> Home</NavLink>
            </li>

            {/* Categories Dropdown */}
            <li className="nav__list-item">Categories</li>

            <li className="nav__list-item">
              <NavLink to="/impact-hub" className="nav__link"> ImpactHub </NavLink>
            </li>

            <li className="nav__list-item">
              <NavLink to="/about-us" className="nav__link"> About Us </NavLink>
            </li>

          </ul>
          <Link to="/share-your-story"><img src={plusCircleIcon} className="nav__icon-submit" /></Link>

          <img src={`${isSerachBarOpen ? closeIcon : searchIcon}`} onClick={searchBarHandler} className={`nav__searchbar__icon  ${isSerachBarOpen ? "nav__searchbar__icon--active" : ""}`} />
          
          <div className={`nav__searchbar-container ${isSerachBarOpen ? "nav__searchbar-container--active" : ""}`}>
            <input type="text" name="searchBar" className="nav__searchbar" placeholder="Search here..." />
          </div>

        </div>

        <img src={closeIcon} onClick={displayNav} className="nav__icon-close" />
      </nav>
    </header>
  );
};

export default Header;
