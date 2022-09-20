import React from "react";
import { TopSellingData } from "../../Data/TopSellingData";

export default function TopProducts() {
  const FurnitureItem = [];
  const DecorationItem = [];
  const LightingItem = [];

  var typesData = Types(TopSellingData);

  function Types(data) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].type === "Furniture") FurnitureItem.push(data[i]);
      if (data[i].type === "Decor") DecorationItem.push(data[i]);
      if (data[i].type === "Lighting") LightingItem.push(data[i]);
    }
    console.log(DecorationItem);
  }
  return (
    <div>
      <div className="container another-container">
        <div className="heading heading-center mb-3">
          <h2 className="title">Top Selling Products</h2>
          {/* End .title */}
          <ul
            className="nav nav-pills nav-border-anim justify-content-center"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                id="top-all-link"
                data-toggle="tab"
                href="#top-all-tab"
                role="tab"
                aria-controls="top-all-tab"
                aria-selected="true"
              >
                All
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="top-fur-link"
                data-toggle="tab"
                href="#top-fur-tab"
                role="tab"
                aria-controls="top-fur-tab"
                aria-selected="false"
              >
                Furniture
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="top-decor-link"
                data-toggle="tab"
                href="#top-decor-tab"
                role="tab"
                aria-controls="top-decor-tab"
                aria-selected="false"
              >
                Decoration
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="top-light-link"
                data-toggle="tab"
                href="#top-light-tab"
                role="tab"
                aria-controls="top-light-tab"
                aria-selected="false"
              >
                Lighting
              </a>
            </li>
          </ul>
        </div>
        {/* End .heading */}
        <div className="tab-content">
          <div
            className="tab-pane p-0 fade show active"
            id="top-all-tab"
            role="tabpanel"
            aria-labelledby="top-all-link"
          >
            <div className="products">
              <div className="row justify-content-center">
                {TopSellingData.map((item) => {
                  return (
                    <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
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
                              className="btn-product-icon btn-wishlist "
                            >
                              <span>add to wishlist</span>
                            </a>
                          </div>
                          {/* End .product-action-vertical */}
                        </figure>
                        {/* End .product-media */}
                        <div className="product-body">
                          <div className="product-cat">
                            <a href="#">Lighting</a>
                          </div>
                          {/* End .product-cat */}
                          <h3 className="product-title">
                            <a href="product.html">{item.name}</a>
                          </h3>
                          {/* End .product-title */}
                          <div className="product-price">
                            {" "}
                            <span class="new-price">{item.price1}</span>
                            <span class="old-price">{item.price2}</span>
                          </div>
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
              {/* End .row */}
            </div>
            {/* End .products */}
          </div>
          {/* .End .tab-pane */}
          <div
            className="tab-pane p-0 fade"
            id="top-fur-tab"
            role="tabpanel"
            aria-labelledby="top-fur-link"
          >
            <div className="products">
              <div className="row justify-content-center">
                {FurnitureItem.map((item) => {
                  return (
                    <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                      {item.type == "Furniture" ? (
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
                                className="btn-product-icon btn-wishlist "
                              >
                                <span>add to wishlist</span>
                              </a>
                            </div>
                            {/* End .product-action-vertical */}
                          </figure>
                          {/* End .product-media */}
                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">Lighting</a>
                            </div>
                            {/* End .product-cat */}
                            <h3 className="product-title">
                              <a href="product.html">{item.name}</a>
                            </h3>
                            {/* End .product-title */}
                            <div className="product-price">
                              <span class="new-price">{item.price1}</span>
                              <span class="old-price">{item.price2}</span>
                            </div>
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
                {/* End .col-sm-6 col-md-4 col-lg-3 */}
              </div>
              {/* End .row */}
            </div>
            {/* End .products */}
          </div>
          {/* .End .tab-pane */}
          <div
            className="tab-pane p-0 fade"
            id="top-decor-tab"
            role="tabpanel"
            aria-labelledby="top-decor-link"
          >
            <div className="products">
              <div className="row justify-content-center">
                {DecorationItem.map((item) => {
                  return (
                    <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
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
                              className="btn-product-icon btn-wishlist "
                            >
                              <span>add to wishlist</span>
                            </a>
                          </div>
                          {/* End .product-action-vertical */}
                        </figure>
                        {/* End .product-media */}
                        <div className="product-body">
                          <div className="product-cat">
                            <a href="#">{item.type}</a>
                          </div>
                          {/* End .product-cat */}
                          <h3 className="product-title">
                            <a href="product.html">{item.name}</a>
                          </h3>
                          {/* End .product-title */}
                          <div className="product-price">
                            {" "}
                            <span class="new-price">{item.price1}</span>
                            <span class="old-price">{item.price2}</span>
                          </div>
                          {/* End .product-price */}
                          {/* <div className="product-nav product-nav-dots">
                            <a
                              href="#"
                              className="active"
                              style={{ background: "#333333" }}
                            >
                              <span className="sr-only">Color name</span>
                            </a>
                            <a href="#" style={{ background: "#927764" }}>
                              <span className="sr-only">Color name</span>
                            </a>
                          </div> */}
                          {/* End .product-nav */}
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

                {/* End .col-sm-6 col-md-4 col-lg-3 */}
              </div>
              {/* End .row */}
            </div>
            {/* End .products */}
          </div>
          {/* .End .tab-pane */}
          <div
            className="tab-pane p-0 fade"
            id="top-light-tab"
            role="tabpanel"
            aria-labelledby="top-light-link"
          >
            <div className="products">
              <div className="row justify-content-center">
                {LightingItem.map((item) => {
                  return (
                    <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
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
                              className="btn-product-icon btn-wishlist "
                            >
                              <span>add to wishlist</span>
                            </a>
                          </div>
                          {/* End .product-action-vertical */}
                        </figure>
                        {/* End .product-media */}
                        <div className="product-body">
                          <div className="product-cat">
                            <a href="#">{item.type}</a>
                          </div>
                          {/* End .product-cat */}
                          <h3 className="product-title">
                            <a href="product.html">{item.name}</a>
                          </h3>
                          {/* End .product-title */}
                          <div className="product-price">
                            {" "}
                            <span class="new-price">{item.price1}</span>
                            <span class="old-price">{item.price2}</span>
                          </div>
                          {/* End .product-price */}
                          {/* <div className="product-nav product-nav-dots">
                            <a
                              href="#"
                              className="active"
                              style={{ background: "#333333" }}
                            >
                              <span className="sr-only">Color name</span>
                            </a>
                            <a href="#" style={{ background: "#927764" }}>
                              <span className="sr-only">Color name</span>
                            </a>
                          </div> */}
                          {/* End .product-nav */}
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
                {/* End .col-sm-6 col-md-4 col-lg-3 */}
              </div>
              {/* End .row */}
            </div>
            {/* End .products */}
          </div>
          {/* .End .tab-pane */}
        </div>
        {/* End .tab-content */}
      </div>
      {/* End .container */}
      <div className="container another-container">
        <hr className="mt-1 mb-6" />
      </div>
      {/* End .container */}
    </div>
  );
}
