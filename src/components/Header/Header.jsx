import "./Header.scss";
import logo from "/src/assets/images/logo/iris-full-logo.png";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <Link to="/home">
          <img src={logo} alt="website logo" className="nav__logo" />
        </Link>
        <div className="nav__content">
          <input
            type="text"
            name="searchBar"
            className="nav__searchbar"
            placeholder="Search"
          ></input>
          <ul className="nav__list">
            <li className="nav__list-item">
              <NavLink to="/home" className="nav__link">
                <motion.a whileHover={{}} />
                Home
              </NavLink>
            </li>
            <li className="nav__list-item">Categories</li>
            <li className="nav__list-item">
              <NavLink to="/impact-hub" className="nav__link">
                ImpactHub
              </NavLink>
            </li>
            <li className="nav__list-item">
              <NavLink to="/about-us" className="nav__link">
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
