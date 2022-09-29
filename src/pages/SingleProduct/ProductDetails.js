import React from "react";

export default function ProductDetails() {
  return (
    <div>
      <div className="product-details-top">
        <div className="row">
          <div className="col-md-6">
            <div className="product-gallery product-gallery-vertical">
              <div className="row">
                <figure className="product-main-image">
                  <img
                    id="product-zoom"
                    src="assets/images/products/single/1.jpg"
                    data-zoom-image="assets/images/products/single/1-big.jpg"
                    alt="product image"
                  />
                  <a
                    href="#"
                    id="btn-product-gallery"
                    className="btn-product-gallery"
                  >
                    <i className="icon-arrows" />
                  </a>
                </figure>
                {/* End .product-main-image */}
                <div
                  id="product-zoom-gallery"
                  className="product-image-gallery"
                >
                  <a
                    className="product-gallery-item active"
                    href="#"
                    data-image="assets/images/products/single/1.jpg"
                    data-zoom-image="assets/images/products/single/1-big.jpg"
                  >
                    <img
                      src="assets/images/products/single/1-small.jpg"
                      alt="product side"
                    />
                  </a>
                  <a
                    className="product-gallery-item"
                    href="#"
                    data-image="assets/images/products/single/2.jpg"
                    data-zoom-image="assets/images/products/single/2-big.jpg"
                  >
                    <img
                      src="assets/images/products/single/2-small.jpg"
                      alt="product cross"
                    />
                  </a>
                  <a
                    className="product-gallery-item"
                    href="#"
                    data-image="assets/images/products/single/3.jpg"
                    data-zoom-image="assets/images/products/single/3-big.jpg"
                  >
                    <img
                      src="assets/images/products/single/3-small.jpg"
                      alt="product with model"
                    />
                  </a>
                  <a
                    className="product-gallery-item"
                    href="#"
                    data-image="assets/images/products/single/4.jpg"
                    data-zoom-image="assets/images/products/single/4-big.jpg"
                  >
                    <img
                      src="assets/images/products/single/4-small.jpg"
                      alt="product back"
                    />
                  </a>
                </div>
                {/* End .product-image-gallery */}
              </div>
              {/* End .row */}
            </div>
            {/* End .product-gallery */}
          </div>
          {/* End .col-md-6 */}
          <div className="col-md-6">
            <div className="product-details">
              <h1 className="product-title">
                Dark yellow lace cut out swing dress
              </h1>
              {/* End .product-title */}
              <div className="ratings-container">
                <div className="ratings">
                  <div className="ratings-val" style={{ width: "80%" }} />
                  {/* End .ratings-val */}
                </div>
                {/* End .ratings */}
                <a
                  className="ratings-text"
                  href="#product-review-link"
                  id="review-link"
                >
                  ( 2 Reviews )
                </a>
              </div>
              {/* End .rating-container */}
              <div className="product-price">$84.00</div>
              {/* End .product-price */}
              <div className="product-content">
                <p>
                  Sed egestas, ante et vulputate volutpat, eros pede semper est,
                  vitae luctus metus libero eu augue. Morbi purus libero,
                  faucibus adipiscing. Sed lectus.{" "}
                </p>
              </div>
              {/* End .product-content */}
              <div className="details-filter-row details-row-size">
                <label>Color:</label>
                <div className="product-nav product-nav-thumbs">
                  <a href="#" className="active">
                    <img
                      src="assets/images/products/single/1-thumb.jpg"
                      alt="product desc"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="assets/images/products/single/2-thumb.jpg"
                      alt="product desc"
                    />
                  </a>
                </div>
                {/* End .product-nav */}
              </div>
              {/* End .details-filter-row */}
              <div className="details-filter-row details-row-size">
                <label htmlFor="size">Size:</label>
                <div className="select-custom">
                  <select name="size" id="size" className="form-control">
                    <option value="#" selected="selected">
                      Select a size
                    </option>
                    <option value="s">Small</option>
                    <option value="m">Medium</option>
                    <option value="l">Large</option>
                    <option value="xl">Extra Large</option>
                  </select>
                </div>
                {/* End .select-custom */}
              </div>
              {/* End .details-filter-row */}
              <div className="details-filter-row details-row-size">
                <label htmlFor="qty">Qty:</label>
                <div className="product-details-quantity">
                  <input
                    type="number"
                    id="qty"
                    className="form-control"
                    defaultValue={1}
                    min={1}
                    max={10}
                    step={1}
                    data-decimals={0}
                    required
                  />
                </div>
                {/* End .product-details-quantity */}
              </div>
              {/* End .details-filter-row */}
              <div className="product-details-action">
                <a href="#" className="btn-product btn-cart">
                  <span>add to cart</span>
                </a>
                <div className="details-action-wrapper">
                  <a
                    href="#"
                    className="btn-product btn-wishlist"
                    title="Wishlist"
                  >
                    <span>Add to Wishlist</span>
                  </a>
                </div>
                {/* End .details-action-wrapper */}
              </div>
              {/* End .product-details-action */}
              <div className="product-details-footer">
                <div className="product-cat">
                  <span>Category:</span>
                  <a href="#">Women</a>,<a href="#">Dresses</a>,
                  <a href="#">Yellow</a>
                </div>
                {/* End .product-cat */}
                <div className="social-icons social-icons-sm">
                  <span className="social-label">Share:</span>
                  <a
                    href="#"
                    className="social-icon"
                    title="Facebook"
                    target="_blank"
                  >
                    <i className="icon-facebook-f" />
                  </a>
                  <a
                    href="#"
                    className="social-icon"
                    title="Twitter"
                    target="_blank"
                  >
                    <i className="icon-twitter" />
                  </a>
                  <a
                    href="#"
                    className="social-icon"
                    title="Instagram"
                    target="_blank"
                  >
                    <i className="icon-instagram" />
                  </a>
                  <a
                    href="#"
                    className="social-icon"
                    title="Pinterest"
                    target="_blank"
                  >
                    <i className="icon-pinterest" />
                  </a>
                </div>
              </div>
              {/* End .product-details-footer */}
            </div>
            {/* End .product-details */}
          </div>
          {/* End .col-md-6 */}
        </div>
        {/* End .row */}
      </div>
      {/* End .product-details-top */}
    </div>
  );
}
