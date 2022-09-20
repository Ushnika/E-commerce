import React from "react";

export default function Navbar() {
  return (
    <div>
      <header className="header header-2 header-intro-clearance">
        <div className="header-top">
          <div className="container">
            <div className="header-left">
              <a href="tel:#">
                <i class="icon-phone"></i>Call: +0123 456 789
              </a>
            </div>
            {/* End .header-left */}
            <div className="header-right">
              <ul className="top-menu">
                <li>
                  <a href="#">Links</a>
                  <ul>
                    <li>
                      <a href="#signin-modal" data-toggle="modal">
                        Sign in / Sign up
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              {/* End .top-menu */}
            </div>
            {/* End .header-right */}
          </div>
          {/* End .container */}
        </div>
        {/* End .header-top */}
        <div className="header-middle">
          <div className="container">
            <div className="header-left">
              <button className="mobile-menu-toggler">
                <span className="sr-only">Toggle mobile menu</span>
                <i className="icon-bars" />
              </button>
              <a href="index.html" className="logo">
                <img
                  src="assets/images/demos/demo-2/logo.png"
                  alt="Molla Logo"
                  width={105}
                  height={25}
                />
              </a>
            </div>
            {/* End .header-left */}
            <div className="header-center">
              <div className="header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block">
                <a href="#" className="search-toggle" role="button">
                  <i className="icon-search" />
                </a>
                <form action="#" method="get">
                  <div className="header-search-wrapper search-wrapper-wide">
                    <label htmlFor="q" className="sr-only">
                      Search
                    </label>
                    <input
                      type="search"
                      className="form-control"
                      name="q"
                      id="q"
                      placeholder="Search product ..."
                      required
                    />
                    <button className="btn btn-primary" type="submit">
                      <i className="icon-search" />
                    </button>
                  </div>
                  {/* End .header-search-wrapper */}
                </form>
              </div>
              {/* End .header-search */}
            </div>
            <div className="header-right">
              <div className="account">
                <a href="dashboard.html" title="My account">
                  <div className="icon">
                    <i className="icon-user" />
                  </div>
                  <p>Account</p>
                </a>
              </div>
              {/* End .compare-dropdown */}
              <div className="wishlist">
                <a href="wishlist.html" title="Wishlist">
                  <div className="icon">
                    <i className="icon-heart-o" />
                    <span className="wishlist-count badge">3</span>
                  </div>
                  <p>Wishlist</p>
                </a>
              </div>
              {/* End .compare-dropdown */}
              <div className="dropdown cart-dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-display="static"
                >
                  <div className="icon">
                    <i className="icon-shopping-cart" />
                    <span className="cart-count">2</span>
                  </div>
                  <p>Cart</p>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <div className="dropdown-cart-products">
                    <div className="product">
                      <div className="product-cart-details">
                        <h4 className="product-title">
                          <a href="product.html">
                            Beige knitted elastic runner shoes
                          </a>
                        </h4>
                        <span className="cart-product-info">
                          <span className="cart-product-qty">1</span>x $84.00
                        </span>
                      </div>
                      {/* End .product-cart-details */}
                      <figure className="product-image-container">
                        <a href="product.html" className="product-image">
                          <img
                            src="assets/images/products/cart/product-1.jpg"
                            alt="product"
                          />
                        </a>
                      </figure>
                      <a href="#" className="btn-remove" title="Remove Product">
                        <i className="icon-close" />
                      </a>
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <div className="product-cart-details">
                        <h4 className="product-title">
                          <a href="product.html">
                            Blue utility pinafore denim dress
                          </a>
                        </h4>
                        <span className="cart-product-info">
                          <span className="cart-product-qty">1</span>x $76.00
                        </span>
                      </div>
                      {/* End .product-cart-details */}
                      <figure className="product-image-container">
                        <a href="product.html" className="product-image">
                          <img
                            src="assets/images/products/cart/product-2.jpg"
                            alt="product"
                          />
                        </a>
                      </figure>
                      <a href="#" className="btn-remove" title="Remove Product">
                        <i className="icon-close" />
                      </a>
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .cart-product */}
                  <div className="dropdown-cart-total">
                    <span>Total</span>
                    <span className="cart-total-price">$160.00</span>
                  </div>
                  {/* End .dropdown-cart-total */}
                  <div className="dropdown-cart-action">
                    <a href="cart.html" className="btn btn-primary">
                      View Cart
                    </a>
                    <a
                      href="checkout.html"
                      className="btn btn-outline-primary-2"
                    >
                      <span>Checkout</span>
                      <i className="icon-long-arrow-right" />
                    </a>
                  </div>
                  {/* End .dropdown-cart-total */}
                </div>
                {/* End .dropdown-menu */}
              </div>
              {/* End .cart-dropdown */}
            </div>
            {/* End .header-right */}
          </div>
          {/* End .container */}
        </div>
        {/* End .header-middle */}
        <div className="header-bottom sticky-header">
          <div className="container">
            <div className="header-left">
              <div className="dropdown category-dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-display="static"
                  title="Browse Categories"
                >
                  Browse Categories
                </a>
                <div className="dropdown-menu">
                  <nav className="side-nav">
                    <ul className="menu-vertical sf-arrows">
                      <li className="item-lead">
                        <a href="#">Daily offers</a>
                      </li>
                      <li className="item-lead">
                        <a href="#">Gift Ideas</a>
                      </li>
                      <li>
                        <a href="#">Beds</a>
                      </li>
                      <li>
                        <a href="#">Lighting</a>
                      </li>
                      <li>
                        <a href="#">Sofas &amp; Sleeper sofas</a>
                      </li>
                      <li>
                        <a href="#">Storage</a>
                      </li>
                      <li>
                        <a href="#">Armchairs &amp; Chaises</a>
                      </li>
                      <li>
                        <a href="#">Decoration </a>
                      </li>
                      <li>
                        <a href="#">Kitchen Cabinets</a>
                      </li>
                      <li>
                        <a href="#">Coffee &amp; Tables</a>
                      </li>
                      <li>
                        <a href="#">Outdoor Furniture </a>
                      </li>
                    </ul>
                    {/* End .menu-vertical */}
                  </nav>
                  {/* End .side-nav */}
                </div>
                {/* End .dropdown-menu */}
              </div>
              {/* End .category-dropdown */}
            </div>
            {/* End .header-left */}
            <div className="header-center">
              <nav className="main-nav">
                <ul className="menu sf-arrows">
                  <li className="megamenu-container active">
                    <a href="index.html" className="sf-with-ul">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="category.html" className="sf-with-ul_one">
                      Product
                    </a>
                    <div className="megamenu megamenu-sm">
                      <div className="row no-gutters">
                        <div className="col-md-6">
                          <div className="menu-col">
                            <div className="menu-title">Product Details</div>
                            {/* End .menu-title */}
                            <ul>
                              <li>
                                <a href="product.html">Default</a>
                              </li>
                              <li>
                                <a href="product-centered.html">Centered</a>
                              </li>
                              <li>
                                <a href="product-extended.html">
                                  <span>
                                    Extended Info
                                    <span className="tip tip-new">New</span>
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="product-gallery.html">Gallery</a>
                              </li>
                              <li>
                                <a href="product-sticky.html">Sticky Info</a>
                              </li>
                              <li>
                                <a href="product-sidebar.html">
                                  Boxed With Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="product-fullwidth.html">Full Width</a>
                              </li>
                              <li>
                                <a href="product-masonry.html">
                                  Masonry Sticky Info
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End .menu-col */}
                        </div>
                        {/* End .col-md-6 */}
                        <div className="col-md-6">
                          <div className="banner banner-overlay">
                            <a href="category.html">
                              <img
                                src="assets/images/menu/banner-2.jpg"
                                alt="Banner"
                              />
                              <div className="banner-content banner-content-bottom">
                                <div className="banner-title text-white">
                                  New Trends
                                  <br />
                                  <span>
                                    <strong>spring 2019</strong>
                                  </span>
                                </div>
                                {/* End .banner-title */}
                              </div>
                              {/* End .banner-content */}
                            </a>
                          </div>
                          {/* End .banner */}
                        </div>
                        {/* End .col-md-6 */}
                      </div>
                      {/* End .row */}
                    </div>
                    {/* End .megamenu megamenu-sm */}
                  </li>
                  <li>
                    <a href="product.html" className="sf-with-ul">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sf-with-ul">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="blog.html" className="sf-with-ul">
                      Customer Care
                    </a>
                  </li>
                  <li>
                    <a href="blog.html" className="sf-with-ul">
                      Contact Us
                    </a>
                  </li>
                </ul>
                {/* End .menu */}
              </nav>
              {/* End .main-nav */}
            </div>
            {/* End .header-center */}
            <div className="header-right">
              <i className="la la-lightbulb-o" />
              <p>
                Clearance<span className="highlight">&nbsp;Up to 30% Off</span>
              </p>
            </div>
          </div>
          {/* End .container */}
        </div>
        {/* End .header-bottom */}
      </header>
      {/* End .header */}
      <div className="mobile-menu-container mobile-menu-light">
        <div className="mobile-menu-wrapper">
          <span className="mobile-menu-close">
            <i className="icon-close" />
          </span>
          <form action="#" method="get" className="mobile-search">
            <label htmlFor="mobile-search" className="sr-only">
              Search
            </label>
            <input
              type="search"
              className="form-control"
              name="mobile-search"
              id="mobile-search"
              placeholder="Search product ..."
              required
            />
            <button className="btn btn-primary" type="submit">
              <i className="icon-search" />
            </button>
          </form>
          <ul className="nav nav-pills-mobile nav-border-anim" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="mobile-menu-link"
                data-toggle="tab"
                href="#mobile-menu-tab"
                role="tab"
                aria-controls="mobile-menu-tab"
                aria-selected="true"
              >
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="mobile-cats-link"
                data-toggle="tab"
                href="#mobile-cats-tab"
                role="tab"
                aria-controls="mobile-cats-tab"
                aria-selected="false"
              >
                Categories
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="mobile-menu-tab"
              role="tabpanel"
              aria-labelledby="mobile-menu-link"
            >
              <nav className="mobile-nav">
                <ul className="mobile-menu">
                  <li className="active">
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="category.html">Product</a>
                    <ul>
                      <li>
                        <a href="product.html">Default</a>
                      </li>
                      <li>
                        <a href="product-centered.html">Centered</a>
                      </li>
                      <li>
                        <a href="product-extended.html">
                          <span>
                            Extended Info
                            <span className="tip tip-new">New</span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="product-gallery.html">Gallery</a>
                      </li>
                      <li>
                        <a href="product-sticky.html">Sticky Info</a>
                      </li>
                      <li>
                        <a href="product-sidebar.html">Boxed With Sidebar</a>
                      </li>
                      <li>
                        <a href="product-fullwidth.html">Full Width</a>
                      </li>
                      <li>
                        <a href="product-masonry.html">Masonry Sticky Info</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="product.html" className="sf-with-ul">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#">blog</a>
                  </li>
                  <li>
                    <a href="blog.html">Customer Care</a>
                  </li>
                  <li>
                    <a href="elements-list.html">Contact Us</a>
                  </li>
                </ul>
              </nav>
              {/* End .mobile-nav */}
            </div>
            {/* .End .tab-pane */}
            <div
              className="tab-pane fade"
              id="mobile-cats-tab"
              role="tabpanel"
              aria-labelledby="mobile-cats-link"
            >
              <nav className="mobile-cats-nav">
                <ul className="mobile-cats-menu">
                  <li>
                    <a className="mobile-cats-lead" href="#">
                      Daily offers
                    </a>
                  </li>
                  <li>
                    <a className="mobile-cats-lead" href="#">
                      Gift Ideas
                    </a>
                  </li>
                  <li>
                    <a href="#">Beds</a>
                  </li>
                  <li>
                    <a href="#">Lighting</a>
                  </li>
                  <li>
                    <a href="#">Sofas &amp; Sleeper sofas</a>
                  </li>
                  <li>
                    <a href="#">Storage</a>
                  </li>
                  <li>
                    <a href="#">Armchairs &amp; Chaises</a>
                  </li>
                  <li>
                    <a href="#">Decoration </a>
                  </li>
                  <li>
                    <a href="#">Kitchen Cabinets</a>
                  </li>
                  <li>
                    <a href="#">Coffee &amp; Tables</a>
                  </li>
                  <li>
                    <a href="#">Outdoor Furniture </a>
                  </li>
                </ul>
                {/* End .mobile-cats-menu */}
              </nav>
              {/* End .mobile-cats-nav */}
            </div>
            {/* .End .tab-pane */}
          </div>
          {/* End .tab-content */}
          <div className="social-icons">
            <a
              href="#"
              className="social-icon"
              target="_blank"
              title="Facebook"
            >
              <i className="icon-facebook-f" />
            </a>
            <a href="#" className="social-icon" target="_blank" title="Twitter">
              <i className="icon-twitter" />
            </a>
            <a
              href="#"
              className="social-icon"
              target="_blank"
              title="Instagram"
            >
              <i className="icon-instagram" />
            </a>
            <a href="#" className="social-icon" target="_blank" title="Youtube">
              <i className="icon-youtube" />
            </a>
          </div>
          {/* End .social-icons */}
        </div>
        {/* End .mobile-menu-wrapper */}
      </div>
      {/* End .mobile-menu-container */}
      {/* Sign in / Register Modal */}
      <div
        className="modal fade"
        id="signin-modal"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="icon-close" />
                </span>
              </button>
              <div className="form-box">
                <div className="form-tab">
                  <ul className="nav nav-pills nav-fill" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="signin-tab"
                        data-toggle="tab"
                        href="#signin"
                        role="tab"
                        aria-controls="signin"
                        aria-selected="true"
                      >
                        Sign In
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="register-tab"
                        data-toggle="tab"
                        href="#register"
                        role="tab"
                        aria-controls="register"
                        aria-selected="false"
                      >
                        Register
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="tab-content-5">
                    <div
                      className="tab-pane fade show active"
                      id="signin"
                      role="tabpanel"
                      aria-labelledby="signin-tab"
                    >
                      <form action="#">
                        <div className="form-group">
                          <label htmlFor="singin-email">
                            Username or email address *
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="singin-email"
                            name="singin-email"
                            required
                          />
                        </div>
                        {/* End .form-group */}
                        <div className="form-group">
                          <label htmlFor="singin-password">Password *</label>
                          <input
                            type="password"
                            className="form-control"
                            id="singin-password"
                            name="singin-password"
                            required
                          />
                        </div>
                        {/* End .form-group */}
                        <div className="form-footer">
                          <div class="footer-part">
                            <button
                              type="submit"
                              className="btn btn-outline-primary-2"
                            >
                              <span>LOG IN</span>
                              <i className="icon-long-arrow-right" />
                            </button>
                          </div>
                          <div class="form-footer-part">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="signin-remember"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="signin-remember"
                              >
                                Remember Me
                              </label>
                            </div>
                            {/* End .custom-checkbox */}
                            <a href="#" className="forgot-link">
                              Forgot Your Password?
                            </a>
                          </div>
                        </div>
                        {/* End .form-footer */}
                      </form>
                      <div className="form-choice">
                        <p className="text-center">or sign in with</p>
                        <div className="row">
                          <div className="col-sm-6">
                            <a href="#" className="btn btn-login btn-g">
                              <i className="icon-google" />
                              Login With Google
                            </a>
                          </div>
                          {/* End .col-6 */}
                          <div className="col-sm-6">
                            <a href="#" className="btn btn-login btn-f">
                              <i className="icon-facebook-f" />
                              Login With Facebook
                            </a>
                          </div>
                          {/* End .col-6 */}
                        </div>
                        {/* End .row */}
                      </div>
                      {/* End .form-choice */}
                    </div>
                    {/* .End .tab-pane */}
                    <div
                      className="tab-pane fade"
                      id="register"
                      role="tabpanel"
                      aria-labelledby="register-tab"
                    >
                      <form action="#">
                        <div className="form-group">
                          <label htmlFor="register-email">
                            Your email address *
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="register-email"
                            name="register-email"
                            required
                          />
                        </div>
                        {/* End .form-group */}
                        <div className="form-group">
                          <label htmlFor="register-password">Password *</label>
                          <input
                            type="password"
                            className="form-control"
                            id="register-password"
                            name="register-password"
                            required
                          />
                        </div>
                        {/* End .form-group */}
                        <div className="form-footer">
                          <div className="footer-part">
                            <button
                              type="submit"
                              className="btn btn-outline-primary-2"
                            >
                              <span>SIGN UP</span>
                              <i className="icon-long-arrow-right" />
                            </button>
                          </div>
                          <div className="form-footer-part">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="register-policy"
                                required
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="register-policy"
                              >
                                I agree to the <a href="#">privacy policy</a> *
                              </label>
                            </div>
                          </div>
                          {/* End .custom-checkbox */}
                        </div>
                        {/* End .form-footer */}
                      </form>
                      <div className="form-choice">
                        <p className="text-center">or sign in with</p>
                        <div className="row">
                          <div className="col-sm-6">
                            <a href="#" className="btn btn-login btn-g">
                              <i className="icon-google" />
                              Login With Google
                            </a>
                          </div>
                          {/* End .col-6 */}
                          <div className="col-sm-6">
                            <a href="#" className="btn btn-login  btn-f">
                              <i className="icon-facebook-f" />
                              Login With Facebook
                            </a>
                          </div>
                          {/* End .col-6 */}
                        </div>
                        {/* End .row */}
                      </div>
                      {/* End .form-choice */}
                    </div>
                    {/* .End .tab-pane */}
                  </div>
                  {/* End .tab-content */}
                </div>
                {/* End .form-tab */}
              </div>
              {/* End .form-box */}
            </div>
            {/* End .modal-body */}
          </div>
          {/* End .modal-content */}
        </div>
        {/* End .modal-dialog */}
      </div>
      {/* End .modal */}
    </div>
  );
}
