import "./header.css";

import { Link } from "react-router-dom";
import React from "react";

const Header = ({ isActive }) => {
  return (
    <div className="header">
      <div className="logoName">
        <Link to="/" className="headerButton">
          <div className="color">sellStack</div>
        </Link>
      </div>
      <div className="headerOptions">
        <Link
          to="/"
          className={isActive === "Home" ? "activeButton" : "headerButton"}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={isActive === "About" ? "activeButton" : "headerButton"}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={isActive === "Contact" ? "activeButton" : "headerButton"}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
