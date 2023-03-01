import Header from "../../commonComponents/Header";
import { Link } from "react-router-dom";
import React from "react";
import "./Home.css";

const HomePage = () => {
  return (
    <div className="displayPage">
      <Header isActive={"Home"} />
      <h1>This is homePage</h1>
      <div className="buttons">
        <Link to="/buyItems" className="buyButton">
          Buy
        </Link>
        <Link to="/sellItems" className="sellButton">
          Sell
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
