import React from "react";
import { ProductData } from "../../Data/ProductData";

export default function Products() {
  return (
    <div>
      {" "}
      <div className="toolbox">
        <div className="toolbox-left">
          <div className="toolbox-info">
            Showing <span>9 of 56</span> Products
          </div>
          {/* End .toolbox-info */}
        </div>
        {/* End .toolbox-left */}
        <div className="toolbox-right">
          <div className="toolbox-sort">
            <label htmlFor="sortby">Sort by:</label>
            <div className="select-custom">
              <select name="sortby" id="sortby" className="form-control">
                <option defaultValue="popularity" selected="selected">
                  Most Popular
                </option>
                <option defaultValue="rating">Most Rated</option>
                <option defaultValue="date">Date</option>
              </select>
            </div>
          </div>
          {/* End .toolbox-sort */}
        </div>
        {/* End .toolbox-right */}
      </div>
      {/* End .toolbox */}
      <div className="products mb-3">
        <div className="row justify-content-center">
          {ProductData.map((item) => {
            return (
              <>
                <div className="col-6 col-md-4 col-lg-4">
                  <div className="product product-7 text-center">
                    <figure className="product-media">
                      {item.style == "" ? (
                        <></>
                      ) : (
                        <span className={`product-label ${item.style}`}>
                          {item.label}
                        </span>
                      )}
                      <a href="/product">
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
                        <a href="/product">{item.name}</a>
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
                  {/* End .product */}
                </div>
              </>
            );
          })}
          {/* End .col-sm-6 col-lg-4 */}
        </div>
        {/* End .row */}
      </div>
      {/* End .products */}
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a
              className="page-link page-link-prev"
              href="#"
              aria-label="Previous"
              tabIndex={-1}
              aria-disabled="true"
            >
              <span aria-hidden="true">
                <i className="icon-long-arrow-left" />
              </span>
              Prev
            </a>
          </li>
          <li className="page-item active" aria-current="page">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item-total">of 6</li>
          <li className="page-item">
            <a className="page-link page-link-next" href="#" aria-label="Next">
              Next{" "}
              <span aria-hidden="true">
                <i className="icon-long-arrow-right" />
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
