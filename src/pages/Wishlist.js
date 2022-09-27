import React from "react";
import WishlistSection from "./Wishlist/WishlistSection";

export default function Wishlist() {
  return (
    <div>
      <WishlistSection />
      <button id="scroll-top" title="Back to Top">
        <i class="icon-arrow-up"></i>
      </button>
    </div>
  );
}
