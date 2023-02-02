import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="headerButton">
        Home
      </Link>
      <Link to="/about" className="headerButton">
        About
      </Link>
      <Link to="/contact" className="headerButton">
        Contact
      </Link>
    </div>
  );
};

export default Header;
