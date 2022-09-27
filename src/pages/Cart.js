import React from "react";
import CartDetails from "./Cart/CartDetails";

export default function Cart() {
  return (
    <div>
      <CartDetails />
      <button id="scroll-top" title="Back to Top">
        <i class="icon-arrow-up"></i>
      </button>
    </div>
  );
}
