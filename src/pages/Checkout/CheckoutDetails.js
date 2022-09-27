import React from "react";
import BillingDetails from "./BillingDetails";
import Bill from "./Bill";

export default function CheckoutDetails() {
  return (
    <div>
      <div
        className="page-header text-center"
        style={{ backgroundImage: 'url("assets/images/page-header-bg.jpg")' }}
      >
        <div className="container another-container">
          <h1 className="page-title">
            Checkout<span>Shop</span>
          </h1>
        </div>
        {/* End .container */}
      </div>
      {/* End .page-header */}
      <nav aria-label="breadcrumb" className="breadcrumb-nav">
        <div className="container another-container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Shop</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Checkout
            </li>
          </ol>
        </div>
        {/* End .container */}
      </nav>
      {/* End .breadcrumb-nav */}
      <div className="page-content">
        <div className="checkout">
          <div className="container another-container">
            <div className="checkout-discount">
              <form action="#">
                <input
                  type="text"
                  className="form-control"
                  required
                  id="checkout-discount-input"
                />
                <label
                  htmlFor="checkout-discount-input"
                  className="text-truncate"
                >
                  Have a coupon? <span>Click here to enter your code</span>
                </label>
              </form>
            </div>
            {/* End .checkout-discount */}
            <form action="#">
              <div className="row">
                <div className="col-lg-9">
                  <BillingDetails />
                </div>
                <aside className="col-lg-3">
                  <Bill />
                </aside>
              </div>
              {/* End .row */}
            </form>
          </div>
          {/* End .container */}
        </div>
        {/* End .checkout */}
      </div>
      {/* End .page-content */}
    </div>
  );
}
