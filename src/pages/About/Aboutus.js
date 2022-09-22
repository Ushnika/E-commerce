import React from "react";

export default function Aboutus() {
  return (
    <div>
      {/* About mission vision and who are we section */}
      <div className="container another-container">
        <div className="row">
          <div className="col-lg-6 mb-3 mb-lg-0">
            <h2 className="title">Our Vision</h2>
            {/* End .title */}
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero sodales leo,
              eget blandit nunc tortor eu nibh.{" "}
            </p>
          </div>
          {/* End .col-lg-6 */}
          <div className="col-lg-6">
            <h2 className="title">Our Mission</h2>
            {/* End .title */}
            <p>
              Sed egestas, ante et vulputate volutpat, eros pede semper est,
              vitae luctus metus libero eu augue. Morbi purus libero, faucibus
              adipiscing, commodo quis, gravida id, est. Sed lectus. <br />
              Praesent elementum hendrerit tortor. Sed semper lorem at felis.{" "}
            </p>
          </div>
          {/* End .col-lg-6 */}
        </div>
        {/* End .row */}
        <div className="mb-5" />
        {/* End .mb-4 */}
      </div>
      {/* End .container */}
      <div className="bg-light-2 pt-6 pb-5 mb-6 mb-lg-8">
        <div className="container another-container">
          <div className="row">
            <div className="col-lg-5 mb-3 mb-lg-0">
              <h2 className="title">Who We Are</h2>
              {/* End .title */}
              <p className="lead text-primary mb-3">
                Pellentesque odio nisi, euismod pharetra a ultricies <br />
                in diam. Sed arcu. Cras consequat
              </p>
              {/* End .lead text-primary */}
              <p className="mb-2">
                Sed pretium, ligula sollicitudin laoreet viverra, tortor libero
                sodales leo, eget blandit nunc tortor eu nibh. Suspendisse
                potenti. Sed egestas, ante et vulputate volutpat, uctus metus
                libero eu augue.{" "}
              </p>
              <a
                href="blog.html"
                className="btn btn-sm btn-minwidth btn-outline-primary-2"
              >
                <span>VIEW OUR NEWS</span>
                <i className="icon-long-arrow-right" />
              </a>
            </div>
            {/* End .col-lg-5 */}
            <div className="col-lg-6 offset-lg-1">
              <div className="about-images">
                <img
                  src="assets/images/about/img-1.jpg"
                  alt=""
                  className="about-img-front"
                />
                <img
                  src="assets/images/about/img-2.jpg"
                  alt=""
                  className="about-img-back"
                />
              </div>
              {/* End .about-images */}
            </div>
            {/* End .col-lg-6 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </div>
      {/* End .bg-light-2 pt-6 pb-6 */}
      {/* End of About mission vision and who are we section */}

      {/* Start of happy clients and about us section */}
      <div class="container another-container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6">
            <div className="icon-box icon-box-sm text-center">
              <span className="icon-box-icon">
                <i className="icon-puzzle-piece" />
              </span>
              <div className="icon-box-content">
                <h3 className="icon-box-title">Design Quality</h3>
                {/* End .icon-box-title */}
                <p>
                  Sed egestas, ante et vulputate volutpat, eros pede semper est,
                  vitae luctus metus libero <br />
                  eu augue.
                </p>
              </div>
              {/* End .icon-box-content */}
            </div>
            {/* End .icon-box */}
          </div>
          {/* End .col-lg-4 col-sm-6 */}
          <div className="col-lg-4 col-sm-6">
            <div className="icon-box icon-box-sm text-center">
              <span className="icon-box-icon">
                <i className="icon-life-ring" />
              </span>
              <div className="icon-box-content">
                <h3 className="icon-box-title">Professional Support</h3>
                {/* End .icon-box-title */}
                <p>
                  Praesent dapibus, neque id cursus faucibus, <br />
                  tortor neque egestas augue, eu vulputate <br />
                  magna eros eu erat.{" "}
                </p>
              </div>
              {/* End .icon-box-content */}
            </div>
            {/* End .icon-box */}
          </div>
          {/* End .col-lg-4 col-sm-6 */}
          <div className="col-lg-4 col-sm-6">
            <div className="icon-box icon-box-sm text-center">
              <span className="icon-box-icon">
                <i className="icon-heart-o" />
              </span>
              <div className="icon-box-content">
                <h3 className="icon-box-title">Made With Love</h3>
                {/* End .icon-box-title */}
                <p>
                  Pellentesque a diam sit amet mi ullamcorper <br />
                  vehicula. Nullam quis massa sit amet <br />
                  nibh viverra malesuada.
                </p>
              </div>
              {/* End .icon-box-content */}
            </div>
            {/* End .icon-box */}
          </div>
          {/* End .col-lg-4 col-sm-6 */}
        </div>
        {/* End .row */}
      </div>
      <div className="mb-2" />
      {/* End .mb-2 */}
      <div
        className="bg-image pt-7 pb-5 pt-md-12 pb-md-9"
        style={{ backgroundImage: "url(assets/images/backgrounds/bg-4.jpg)" }}
      >
        <div className="container another-container">
          <div className="row">
            <div className="col-6 col-md-3">
              <div className="count-container text-center">
                <div className="count-wrapper text-white">
                  <span
                    className="count"
                    data-from={0}
                    data-to={40}
                    data-speed={3000}
                    data-refresh-interval={50}
                  >
                    0
                  </span>
                  k+
                </div>
                {/* End .count-wrapper */}
                <h3 className="count-title text-white">Happy Customer</h3>
                {/* End .count-title */}
              </div>
              {/* End .count-container */}
            </div>
            {/* End .col-6 col-md-3 */}
            <div className="col-6 col-md-3">
              <div className="count-container text-center">
                <div className="count-wrapper text-white">
                  <span
                    className="count"
                    data-from={0}
                    data-to={20}
                    data-speed={3000}
                    data-refresh-interval={50}
                  >
                    0
                  </span>
                  +
                </div>
                {/* End .count-wrapper */}
                <h3 className="count-title text-white">Years in Business</h3>
                {/* End .count-title */}
              </div>
              {/* End .count-container */}
            </div>
            {/* End .col-6 col-md-3 */}
            <div className="col-6 col-md-3">
              <div className="count-container text-center">
                <div className="count-wrapper text-white">
                  <span
                    className="count"
                    data-from={0}
                    data-to={95}
                    data-speed={3000}
                    data-refresh-interval={50}
                  >
                    0
                  </span>
                  %
                </div>
                {/* End .count-wrapper */}
                <h3 className="count-title text-white">Return Clients</h3>
                {/* End .count-title */}
              </div>
              {/* End .count-container */}
            </div>
            {/* End .col-6 col-md-3 */}
            <div className="col-6 col-md-3">
              <div className="count-container text-center">
                <div className="count-wrapper text-white">
                  <span
                    className="count"
                    data-from={0}
                    data-to={15}
                    data-speed={3000}
                    data-refresh-interval={50}
                  >
                    0
                  </span>
                </div>
                {/* End .count-wrapper */}
                <h3 className="count-title text-white">Awards Won</h3>
                {/* End .count-title */}
              </div>
              {/* End .count-container */}
            </div>
            {/* End .col-6 col-md-3 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </div>
      {/* End .bg-image pt-8 pb-8 */}
    </div>
  );
}
