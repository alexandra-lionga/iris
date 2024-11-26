import "./Header.scss";
import logo from "/src/assets/logo/iris-logo.svg";

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
