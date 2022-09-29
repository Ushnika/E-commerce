import React from "react";
import { ProductData } from "../../Data/ProductData";

export default function NextProducts() {
  return (
    <div>
      <div
        className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
        data-toggle="owl"
        data-owl-options='{
                            "nav": false, 
                            "dots": true,
                            "margin": 20,
                            "loop": false,
                            "responsive": {
                                "0": {
                                    "items":1
                                },
                                "480": {
                                    "items":2
                                },
                                "768": {
                                    "items":3
                                },
                                "992": {
                                    "items":4
                                },
                                "1200": {
                                    "items":4,
                                    "nav": true,
                                    "dots": false
                                }
                            }
                        }'
      >
        {ProductData.map((item, index) => {
          return (
            <div className="product product-7 text-center">
              <figure className="product-media">
                {item.style == "" ? (
                  <></>
                ) : (
                  <span className={`product-label ${item.style}`}>
                    {item.label}
                  </span>
                )}

                <a href="product.html">
                  <img
                    src={item.img}
                    alt="Product image"
                    className="product-image"
                  />
                </a>
                <div className="product-action-vertical">
                  <a
                    href="#"
                    className="btn-product-icon btn-wishlist btn-expandable"
                  >
                    <span>add to wishlist</span>
                  </a>
                  <a
                    href="popup/quickView.html"
                    className="btn-product-icon btn-quickview"
                    title="Quick view"
                  >
                    <span>Quick view</span>
                  </a>
                </div>
                {/* End .product-action-vertical */}
                <div className="product-action">
                  <a href="#" className="btn-product btn-cart">
                    <span>add to cart</span>
                  </a>
                </div>
                {/* End .product-action */}
              </figure>
              {/* End .product-media */}
              <div className="product-body">
                <div className="product-cat">
                  <a href="#">{item.category}</a>
                </div>
                {/* End .product-cat */}
                <h3 className="product-title">
                  <a href="product.html">{item.name}</a>
                </h3>
                {/* End .product-title */}
                <div className="product-price">{item.price}</div>
                {/* End .product-price */}
                <div className="ratings-container">
                  <div className="ratings">
                    <div
                      className="ratings-val"
                      style={{ width: item.rating }}
                    />
                    {/* End .ratings-val */}
                  </div>
                  {/* End .ratings */}
                  <span className="ratings-text">
                    ( {item.review} Reviews )
                  </span>
                </div>
                {/* End .rating-container */}
                {item.img1 && item.img2 != "" && item.img3 == "" ? (
                  <div className="product-nav product-nav-thumbs">
                    <a href="#" className="active">
                      <img src={item.img1} alt="product desc" />
                    </a>
                    <a href="#">
                      <img src={item.img2} alt="product desc" />
                    </a>
                  </div>
                ) : (
                  <div className="product-nav product-nav-thumbs">
                    {item.img3 == "" ? (
                      <></>
                    ) : (
                      <>
                        <a href="#" className="active">
                          <img src={item.img1} alt="product desc" />
                        </a>
                        <a href="#">
                          <img src={item.img2} alt="product desc" />
                        </a>
                        <a href="#">
                          <img src={item.img3} alt="product desc" />
                        </a>
                      </>
                    )}
                  </div>
                )}
                {/* End .product-nav */}
              </div>
              {/* End .product-body */}
            </div>
          );
        })}
        {/* End .product */}
      </div>
      {/* End .owl-carousel */}
    </div>
  );
}
