import React from "react";

const ProductQuestion = ({ product }) => {
  var striptags = require("striptags");

  return (
    <div>
      <div className="product-details-tab">
        <ul className="nav nav-pills justify-content-center" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="product-desc-link"
              data-toggle="tab"
              href="#product-desc-tab"
              role="tab"
              aria-controls="product-desc-tab"
              aria-selected="true"
            >
              Description
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="product-info-link"
              data-toggle="tab"
              href="#product-info-tab"
              role="tab"
              aria-controls="product-info-tab"
              aria-selected="false"
            >
              Additional information
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="product-shipping-link"
              data-toggle="tab"
              href="#product-shipping-tab"
              role="tab"
              aria-controls="product-shipping-tab"
              aria-selected="false"
            >
              Shipping &amp; Returns
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="product-desc-tab"
            role="tabpanel"
            aria-labelledby="product-desc-link"
          >
            <div className="product-desc-content">
              <h3>Product Information</h3>
              <p>{striptags(product.description)}</p>
            </div>
            {/* End .product-desc-content */}
          </div>
          {/* .End .tab-pane */}
          <div
            className="tab-pane fade"
            id="product-info-tab"
            role="tabpanel"
            aria-labelledby="product-info-link"
          >
            <div className="product-desc-content">
              {striptags(product.additional_information)}
            </div>
            {/* End .product-desc-content */}
          </div>
          {/* .End .tab-pane */}
          <div
            className="tab-pane fade"
            id="product-shipping-tab"
            role="tabpanel"
            aria-labelledby="product-shipping-link"
          >
            <div className="product-desc-content">
              <h3>Delivery &amp; returns</h3>
              <p>{striptags(product.shipping_returns)}</p>
            </div>
            {/* End .product-desc-content */}
          </div>
        </div>
        {/* End .tab-content */}
      </div>
      {/* End .product-details-tab */}
    </div>
  );
};

export default ProductQuestion;
