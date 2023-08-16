import React from "react";
import CartDetails from "../components/Cart/CartDetails";

const Cart = () => {
  return (
    <div>
      <CartDetails />
      <button id="scroll-top" title="Back to Top">
        <i className="icon-arrow-up"></i>
      </button>
    </div>
  );
};

export default Cart;
