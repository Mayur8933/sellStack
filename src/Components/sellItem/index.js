import React from "react";
import Header from "../../commonComponents/Header";

const Sell = () => {
  return (
    <>
      <Header />
      <h1>Sell page</h1>
      <div>
        <span>
          <h4>Product Name</h4>
          <input className="input" type="text" placeholder="Product Name" />
        </span>
      </div>
    </>
  );
};

export default Sell;
