import "./Header.scss";
import logo from "/src/assets/images/logo/iris-full-logo.png";

import React from "react";

const Header = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="website logo" />
        <h1>This is the header</h1>
      </nav>
    </header>
  );
};

export default Header;
