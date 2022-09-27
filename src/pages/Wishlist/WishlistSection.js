import React from "react";

export default function WishlistSection() {
  return (
    <div>
      <div
        className="page-header text-center"
        style={{ backgroundImage: 'url("assets/images/page-header-bg.jpg")' }}
      >
        <div className="container another-container">
          <h1 className="page-title">Wishlist</h1>
        </div>
        {/* End .container */}
      </div>
      {/* End .page-header */}
      <nav aria-label="breadcrumb" className="breadcrumb-nav">
        <div className="container another-container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Wishlist
            </li>
          </ol>
        </div>
        {/* End .container */}
      </nav>
      {/* End .breadcrumb-nav */}
      <div className="page-content">
        <div className="container another-container">
          <table className="table table-wishlist table-mobile">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Stock Status</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="product-col">
                  <div className="product">
                    <figure className="product-media">
                      <a href="#">
                        <img
                          src="assets/images/products/table/product-2.jpg"
                          alt="Product image"
                        />
                      </a>
                    </figure>
                    <h3 className="product-title">
                      <a href="#">Blue utility pinafore denim dress</a>
                    </h3>
                    {/* End .product-title */}
                  </div>
                  {/* End .product */}
                </td>
                <td className="price-col">$76.00</td>
                <td className="stock-col">
                  <span className="in-stock">In stock</span>
                </td>
                <td className="action-col">
                  <button className="btn btn-block btn-outline-primary-2">
                    <i className="icon-cart-plus" />
                    Add to Cart
                  </button>
                </td>
                <td className="remove-col">
                  <button className="btn-remove">
                    <i className="icon-close" />
                  </button>
                </td>
              </tr>
              <tr>
                <td className="product-col">
                  <div className="product">
                    <figure className="product-media">
                      <a href="#">
                        <img
                          src="assets/images/products/table/product-3.jpg"
                          alt="Product image"
                        />
                      </a>
                    </figure>
                    <h3 className="product-title">
                      <a href="#">
                        Orange saddle lock front chain cross body bag
                      </a>
                    </h3>
                    {/* End .product-title */}
                  </div>
                  {/* End .product */}
                </td>
                <td className="price-col">$52.00</td>
                <td className="stock-col">
                  <span className="out-of-stock">Out of stock</span>
                </td>
                <td className="action-col">
                  <button className="btn btn-block btn-outline-primary-2 disabled">
                    Out of Stock
                  </button>
                </td>
                <td className="remove-col">
                  <button className="btn-remove">
                    <i className="icon-close" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          {/* End .table table-wishlist */}
          <div className="wishlist-share">
            <div className="social-icons social-icons-sm mb-2">
              <label className="social-label">Share on:</label>
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
                title="Youtube"
                target="_blank"
              >
                <i className="icon-youtube" />
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
            {/* End .soial-icons */}
          </div>
          {/* End .wishlist-share */}
        </div>
        {/* End .container */}
      </div>
      {/* End .page-content */}
    </div>
  );
}
