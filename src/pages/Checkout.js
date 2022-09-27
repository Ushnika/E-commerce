import React from "react";
import CheckoutDetails from "./Checkout/CheckoutDetails";

export default function Checkout() {
  return (
    <div>
      <CheckoutDetails />
      <button id="scroll-top" title="Back to Top">
        <i class="icon-arrow-up"></i>
      </button>
    </div>
  );
}
