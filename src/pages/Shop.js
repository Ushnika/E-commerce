import React from "react";
import ShopProducts from "../components/Shop/ShopProducts";

const Shop = () => {
  return (
    <div>
      <ShopProducts />
      <button id="scroll-top" title="Back to Top">
        <i className="icon-arrow-up"></i>
      </button>
    </div>
  );
};

export default Shop;
