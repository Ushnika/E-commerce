import React from "react";

export default function Banner() {
  return (
    <div>
      <div className="banner-group">
        <div className="container another-container">
          <div className="row">
            <div className="col-md-12 col-lg-5">
              <div className="banner banner-large banner-overlay banner-overlay-light">
                <a href="#">
                  <img
                    src="assets/images/demos/demo-2/banners/banner-1.jpg"
                    alt="Banner"
                  />
                </a>
                <div className="banner-content banner-content-top">
                  <h4 className="banner-subtitle">Clearence</h4>
                  {/* End .banner-subtitle */}
                  <h3 className="banner-title">Coffee Tables</h3>
                  {/* End .banner-title */}
                  <div className="banner-text">from $19.99</div>
                  {/* End .banner-text */}
                  <a href="#" className="btn btn-outline-gray banner-link">
                    Shop Now
                    <i className="icon-long-arrow-right" />
                  </a>
                </div>
                {/* End .banner-content */}
              </div>
              {/* End .banner */}
            </div>
            {/* End .col-lg-5 */}
            <div className="col-md-6 col-lg-3">
              <div className="banner banner-overlay">
                <a href="#">
                  <img
                    src="assets/images/demos/demo-2/banners/banner-2.jpg"
                    alt="Banner"
                  />
                </a>
                <div className="banner-content banner-content-bottom">
                  <h4 className="banner-subtitle text-grey">On Sale</h4>
                  {/* End .banner-subtitle */}
                  <h3 className="banner-title text-white">
                    Amazing <br />
                    Armchairs
                  </h3>
                  {/* End .banner-title */}
                  <div className="banner-text text-white">from $39.99</div>
                  {/* End .banner-text */}
                  <a href="#" className="btn btn-outline-white banner-link">
                    Discover Now
                    <i className="icon-long-arrow-right" />
                  </a>
                </div>
                {/* End .banner-content */}
              </div>
              {/* End .banner */}
            </div>
            {/* End .col-lg-3 */}
            <div className="col-md-6 col-lg-4">
              <div className="banner banner-overlay">
                <a href="#">
                  <img
                    src="assets/images/demos/demo-2/banners/banner-3.jpg"
                    alt="Banner"
                  />
                </a>
                <div className="banner-content banner-content-top">
                  <h4 className="banner-subtitle text-grey">New Arrivals</h4>
                  {/* End .banner-subtitle */}
                  <h3 className="banner-title text-white">
                    Storage <br />
                    Boxes &amp; Baskets
                  </h3>
                  {/* End .banner-title */}
                  <a href="#" className="btn btn-outline-white banner-link">
                    Discover Now
                    <i className="icon-long-arrow-right" />
                  </a>
                </div>
                {/* End .banner-content */}
              </div>
              {/* End .banner */}
              <div className="banner banner-overlay banner-overlay-light">
                <a href="#">
                  <img
                    src="assets/images/demos/demo-2/banners/banner-4.jpg"
                    alt="Banner"
                  />
                </a>
                <div className="banner-content banner-content-top">
                  <h4 className="banner-subtitle">On Sale</h4>
                  {/* End .banner-subtitle */}
                  <h3 className="banner-title">Lamps Offer</h3>
                  {/* End .banner-title */}
                  <div className="banner-text">up to 30% off</div>
                  {/* End .banner-text */}
                  <a href="#" className="btn btn-outline-gray banner-link">
                    Shop Now
                    <i className="icon-long-arrow-right" />
                  </a>
                </div>
                {/* End .banner-content */}
              </div>
              {/* End .banner */}
            </div>
            {/* End .col-lg-4 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </div>
      {/* End .banner-group */}
      <div className="mb-3"></div>
    </div>
  );
}
