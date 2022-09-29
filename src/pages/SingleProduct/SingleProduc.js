import React from "react";
import NextProducts from "./NextProducts";
import ProductDetails from "./ProductDetails";
import ProductQuestion from "./ProductQuestion";

export default function SingleProduct() {
  return (
    <div>
      <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
        <div className="container d-flex align-items-center another-container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Products</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Product name
            </li>
          </ol>
        </div>
        {/* End .container */}
      </nav>
      {/* End .breadcrumb-nav */}
      <div className="page-content">
        <div className="container another-container">
          <ProductDetails />
          <ProductQuestion />
          <h2 className="title text-center mb-4">You May Also Like</h2>
          <NextProducts />
          {/* End .title text-center */}
        </div>
      </div>
    </div>
  );
}
