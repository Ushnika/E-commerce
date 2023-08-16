import React from "react";
import { CardData } from "../../Data/CardData";

const Card = ({ data }) => {
  return (
    <div>
      <div className="product product-11 text-center">
        <figure className="product-media">
          <a href="/shop">
            <img
              src={data.img1}
              alt="Product image"
              className="product-image"
            />
            <img
              src={data.img2}
              alt="Product image"
              className="product-image-hover"
            />
          </a>
          <div className="product-action-vertical">
            <a href="#" className="btn-product-icon btn-wishlist">
              <span>add to wishlist</span>
            </a>
          </div>
          {/* End .product-action-vertical */}
        </figure>
        {/* End .product-media */}
        <div className="product-body">
          <h3 className="product-title">
            <a href="/shop">{data.name}</a>
          </h3>
          {/* End .product-title */}
          <div className="product-price">{data.price}</div>
          {/* End .product-price */}
        </div>
        {/* End .product-body */}
        <div className="product-action">
          <a href="#" className="btn-product btn-cart">
            <span>add to cart</span>
          </a>
        </div>
        {/* End .product-action */}
      </div>
      {/* End .product */}
    </div>
  );
};

export default Card;
