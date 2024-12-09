import "./Header.scss";
import logo from "/src/assets/images/logo/iris-full-logo.png";
import burgerMenu from "/src/assets/images/icons/Burger Menu 1.svg";
import flowerIcon from "/src/assets/images/icons/flower-icon.png";
import closeIcon from "/src/assets/images/icons/Close.png";
import eraser from "/src/assets/images/icons/eraser.svg";
import searchIcon from "/src/assets/images/icons/search.svg";
import plusCircleIcon from "/src/assets/images/icons/plus-circle.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Header = ({ clearSearch, setSearchKey, searchKey }) => {
  const categories = [
    "Adorable Moments",
    "Overcoming Challenges",
    "Heartwarming Moments",
    "Kindness",
    "Animal Rescue",
    "Creative Expressions",
    "Sentimental Moments",
    "Comment on Music",
    "Fashion",
    "Acts of Kindness",
    "Family",
    "Life Milestones",
    "Wisdom",
    "Historical Interest",
    "Inspiration",
    "Heroism",
    "Generosity",
    "Health",
  ];

  const [isNavOpen, setNavOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);

  const displayNav = () => {
    setNavOpen((previous) => !previous);
  };

  const searchBarHandler = () => {
    setIsSearchBarOpen((previous) => !previous);
  };

  const toggleCategories = () => {
    setCategoriesOpen((prev) => !prev);
  };

  const searchHandler = (key) => {
    if (isSearchBarOpen) {
      setSearchKey(key);
    }
  };

  return (
    <header>
      <nav className="nav">
        <div className="nav--left">
          <Link to="/home">
            <img src={logo} alt="website logo" className="nav__logo" />
            <img
              src={flowerIcon}
              alt="website logo"
              className="nav__logo--mobile"
            />
          </Link>

          <ul className={`nav__list ${isNavOpen ? "nav__list--active" : ""}`}>
            <li className="nav__list-item">
              <NavLink to="/home" className="nav__link" onClick={displayNav}>
                Home
              </NavLink>
            </li>

            <li className="nav__list-item" onClick={toggleCategories}>
              Categories ▼
              {isCategoriesOpen && (
                <ul className="categories-list">
                  {categories.map((category, index) => (
                    <li key={index} className="categories-list__item">
                      <Link
                        className="categories-list__link"
                        to={`/category/${category}`}
                        onClick={() => setCategoriesOpen(false)}
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className="nav__list-item">
              <NavLink
                to="/impact-hub"
                className="nav__link"
                onClick={displayNav}
              >
                ImpactHub
              </NavLink>
            </li>

            {/* <li className="nav__list-item">
              <NavLink
                to="/about-us"
                className="nav__link"
                onClick={displayNav}
              >
                About Us
              </NavLink>
            </li> */}
          </ul>
        </div>

        <div className="nav__content">
          <p className="welcome-heading sparkling-text">Welcome, Alexandra!</p>
          {isSearchBarOpen ? (
            ""
          ) : (
            <Link to="/share-your-story">
              <img src={plusCircleIcon} className="nav__icon-submit" />
            </Link>
          )}
          {isSearchBarOpen ? (
            <img
              src={eraser}
              onClick={clearSearch}
              className="nav__icon-submit"
            />
          ) : (
            <img
              src={burgerMenu}
              onClick={displayNav}
              className="nav__icon-open"
            />
          )}

          <img
            src={`${isSearchBarOpen ? closeIcon : searchIcon}`}
            onClick={searchBarHandler}
            className={`nav__searchbar__icon ${isSearchBarOpen ? "nav__searchbar__icon--active" : ""
              }`}
          />
          <div
            className={`nav__searchbar-container ${isSearchBarOpen ? "nav__searchbar-container--active" : ""
              }`}
          >
            <input
              type="text"
              name="searchBar"
              className="nav__searchbar"
              placeholder="Search here..."
              value={isSearchBarOpen ? searchKey : ""}
              onChange={(e) => searchHandler(e.target.value)}
            />
          </div>

          <img
            src={closeIcon}
            onClick={displayNav}
            className="nav__icon-close"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
