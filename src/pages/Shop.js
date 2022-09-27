import React from "react";
import ShopProducts from "./Shop/ShopProducts";

export default function Shop() {
  return (
    <div>
      <ShopProducts />
      <button id="scroll-top" title="Back to Top">
        <i class="icon-arrow-up"></i>
      </button>
    </div>
  );
}
