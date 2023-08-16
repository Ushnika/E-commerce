import React from "react";
import WishlistSection from "../components/Wishlist/WishlistSection";

const Wishlist = () => {
  return (
    <div>
      <WishlistSection />
      <button id="scroll-top" title="Back to Top">
        <i className="icon-arrow-up"></i>
      </button>
    </div>
  );
};

export default Wishlist;
