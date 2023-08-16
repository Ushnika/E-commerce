import React from "react";
import CheckoutDetails from "../components/Checkout/CheckoutDetails";

const Checkout = () => {
  return (
    <div>
      <CheckoutDetails />
      <button id="scroll-top" title="Back to Top">
        <i className="icon-arrow-up"></i>
      </button>
    </div>
  );
};

export default Checkout;
