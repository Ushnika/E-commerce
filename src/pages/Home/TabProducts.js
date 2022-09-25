import React from "react";
import Card from "./Card";
import { CardData } from "../../Data/CardData";

export default function TabProducts() {
  const saleItem = [];
  const topRatedItem = [];

  var products = newArray(CardData);

  function newArray(products) {
    for (var i = 0; i < products.length; i++) {
      if (products[i].onSale === true) saleItem.push(products[i]);
      if (products[i].topRated === true) topRatedItem.push(products[i]);
    }
  }

  return (
    <div>
      <div className="container another_container">
        <ul
          className="nav nav-pills nav-border-anim nav-big justify-content-center mb-3"
          role="tablist"
        >
          <li className="nav-item">
            <a
              className="nav-link active"
              id="products-featured-link"
              data-toggle="tab"
              href="#products-featured-tab"
              role="tab"
              aria-controls="products-featured-tab"
              aria-selected="true"
            >
              Featured
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="products-sale-link"
              data-toggle="tab"
              href="#products-sale-tab"
              role="tab"
              aria-controls="products-sale-tab"
              aria-selected="false"
            >
              On Sale
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="products-top-link"
              data-toggle="tab"
              href="#products-top-tab"
              role="tab"
              aria-controls="products-top-tab"
              aria-selected="false"
            >
              Top Rated
            </a>
          </li>
        </ul>
      </div>
      {/* End .container */}
      <div className="container-fluid">
        <div className="tab-content tab-content-carousel">
          <div
            className="tab-pane p-0 fade show active"
            id="products-featured-tab"
            role="tabpanel"
            aria-labelledby="products-featured-link"
          >
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
                                        "items":2
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
                                        "items":5
                                    },
                                    "1600": {
                                        "items":6,
                                        "nav": true
                                    }
                                }
                            }'
            >
              {CardData.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="product product-11 text-center">
                      <figure className="product-media">
                        <span
                          class={`product-label label-circle ${item.style}`}
                        >
                          {item.label}
                        </span>
                        <a href="product.html">
                          <img
                            src={item.img1}
                            alt="Product image"
                            className="product-image"
                          />
                          <img
                            src={item.img2}
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
                          <a href="product.html">{item.name}</a>
                        </h3>
                        {/* End .product-title */}
                        <div class="product-price">
                          <span class="new-price">{item.price1}</span>
                          <span class="old-price">{item.price2}</span>
                        </div>
                        {/* <!-- End .product-price --> */}

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
              })}
            </div>
            {/* End .owl-carousel */}
          </div>
          {/* .End .tab-pane */}
          <div
            className="tab-pane p-0 fade"
            id="products-sale-tab"
            role="tabpanel"
            aria-labelledby="products-sale-link"
          >
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
                                        "items":2
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
                                        "items":5
                                    },
                                    "1600": {
                                        "items":6,
                                        "nav": true
                                    }
                                }
                            }'
            >
              {saleItem.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="product product-11 text-center">
                      <figure className="product-media">
                        <span
                          class={`product-label label-circle ${item.style}`}
                        >
                          {item.label}
                        </span>
                        <a href="product.html">
                          <img
                            src={item.img1}
                            alt="Product image"
                            className="product-image"
                          />
                          <img
                            src={item.img2}
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
                          <a href="product.html">{item.name}</a>
                        </h3>
                        {/* End .product-title */}
                        <div class="product-price">
                          <span class="new-price">{item.price1}</span>
                          <span class="old-price">{item.price2}</span>
                        </div>
                        {/* <!-- End .product-price --> */}

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
              })}
            </div>
            {/* End .owl-carousel */}
          </div>
          {/* .End .tab-pane */}
          <div
            className="tab-pane p-0 fade"
            id="products-top-tab"
            role="tabpanel"
            aria-labelledby="products-top-link"
          >
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
                                        "items":2
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
                                        "items":5
                                    },
                                    "1600": {
                                        "items":6,
                                        "nav": true
                                    }
                                }
                            }'
            >
              {topRatedItem.map((item, index) => {
                return (
                  <div key={index}>
                    {item.topRated == true ? (
                      <div className="product product-11 text-center">
                        <figure className="product-media">
                          <span
                            class={`product-label label-circle ${item.style}`}
                          >
                            {item.label}
                          </span>
                          <a href="product.html">
                            <img
                              src={item.img1}
                              alt="Product image"
                              className="product-image"
                            />
                            <img
                              src={item.img2}
                              alt="Product image"
                              className="product-image-hover"
                            />
                          </a>
                          <div className="product-action-vertical">
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist"
                            >
                              <span>add to wishlist</span>
                            </a>
                          </div>
                          {/* End .product-action-vertical */}
                        </figure>
                        {/* End .product-media */}
                        <div className="product-body">
                          <h3 className="product-title">
                            <a href="product.html">{item.name}</a>
                          </h3>
                          {/* End .product-title */}
                          <div class="product-price">
                            <span class="new-price">{item.price1}</span>
                            <span class="old-price">{item.price2}</span>
                          </div>
                          {/* <!-- End .product-price --> */}

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
                    ) : null}
                    {/* End .product */}
                  </div>
                );
              })}
            </div>
            {/* End .owl-carousel */}
          </div>
          {/* .End .tab-pane */}
        </div>
        {/* End .tab-content */}
      </div>
      {/* End .container-fluid */}
      <div class="mb-5"></div>
      {/* <!-- End .mb-5 --> */}
    </div>
  );
}
