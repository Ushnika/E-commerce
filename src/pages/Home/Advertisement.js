import React from "react";

export default function Advertisement() {
  return (
    <div>
      <div className="bg-light deal-container pt-5 pb-3 mb-5">
        <div className="container another-container">
          <div className="row">
            <div className="col-lg-9">
              <div className="deal">
                <div className="deal-content">
                  <h4>Limited Quantities</h4>
                  <h2>Deal of the Day</h2>

                  <h3 className="product-title">
                    <a href="product.html">POÄNG</a>
                  </h3>
                  {/* <!-- End .product-title --> */}

                  <div className="product-price">
                    <span className="new-price">$149.00</span>
                    <span className="old-price">Was $240.00</span>
                  </div>
                  {/* <!-- End .product-price --> */}

                  <div className="deal-countdown" data-until="+10h"></div>
                  {/* <!-- End .deal-countdown --> */}

                  <a href="product.html" className="btn btn-primary">
                    <span>Shop Now</span>
                    <i className="icon-long-arrow-right"></i>
                  </a>
                </div>
                {/* <!-- End .deal-content --> */}
                <div className="deal-image">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-2/deal/product-1.jpg"
                      alt="image"
                    />
                  </a>
                </div>
                {/* <!-- End .deal-image --> */}
              </div>
              {/* <!-- End .deal --> */}
            </div>
            {/* <!-- End .col-lg-9 --> */}

            <div className="col-lg-3">
              <div className="banner banner-overlay banner-overlay-light text-center d-none d-lg-block">
                <a href="#">
                  <img
                    src="assets/images/demos/demo-2/banners/banner-5.jpg"
                    alt="Banner"
                  />
                </a>

                <div className="banner-content banner-content-top banner-content-center">
                  <h4 className="banner-subtitle">The Best Choice</h4>
                  {/* <!-- End .banner-subtitle --> */}
                  <h3 className="banner-title">AGEN</h3>
                  {/* <!-- End .banner-title --> */}
                  <div className="banner-text text-primary">$49.99</div>
                  {/* <!-- End .banner-text --> */}
                  <a href="#" className="btn btn-outline-gray banner-link">
                    Shop Now<i className="icon-long-arrow-right"></i>
                  </a>
                </div>
                {/* <!-- End .banner-content --> */}
              </div>
              {/* <!-- End .banner --> */}
            </div>
            {/* <!-- End .col-lg-3 --> */}
          </div>
          {/* <!-- End .row --> */}
        </div>
        {/* <!-- End .container --> */}
      </div>
      {/* <!-- End .bg-light --> */}

      <div className="mb-6"></div>
      {/* <!-- End .mb-6 --> */}
    </div>
  );
}
