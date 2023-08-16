import React, { useEffect } from "react";
import {
  useThemeCart,
  useThemeAuth,
  useThemeAddWishlist,
} from "../../context/ThemeProvider";
import Search from "./Search";
import $ from "jquery";
import AuthURL from "../../configuration/authUrl";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const CenterNavbar = () => {
  const { setShow } = useThemeAuth();
  const { cartProduct, setCartProduct } = useThemeCart();
  const { wishlistProduct, setWishlistProduct } = useThemeAddWishlist();
  const navigate = useNavigate();

  useEffect(() => {
    const getCartProduct = () => {
      if (Cookies.get("loginToken") != null) {
        AuthURL.get("cart/all-products")
          .then((response) => {
            if (response.status === 200) {
              setCartProduct(response.data.data.carts);
            }
          })
          .catch((error) => {
            console.log(error.response);
          });
      }
    };

    const getWishlistProduct = () => {
      if (Cookies.get("loginToken") != null) {
        AuthURL.get("wishlist/my-wishlist")
          .then((response) => {
            if (response.status === 200) {
              setWishlistProduct(response.data.data.wishlists);
            }
          })
          .catch((error) => {
            console.log(error.response);
          });
      }
    };
    getCartProduct();
    getWishlistProduct();

    initMenuToggler();
  }, [
    cartProduct.length,
    wishlistProduct.length,
    setCartProduct,
    setWishlistProduct,
  ]);

  // Mobile Menu Toggle - Show & Hide
  const initMenuToggler = () => {
    //- To Show Side Menu
    $(".mobile-menu-toggler").on("click", function (e) {
      document.body.classList.add("mmenu-active");
      $(this).toggleClass("active");
      console.log("menu show");
      e.preventDefault();
    });
    //- To Hide Side Menu
    $(".mobile-menu-overlay, .mobile-menu-close").on("click", function (e) {
      document.body.classList.remove("mmenu-active");
      $(".menu-toggler").removeClass("active");
      console.log("menu closed");
      e.preventDefault();
    });
  };

  return (
    <div>
      <div className="container">
        {/* header left */}
        <div className="header-left">
          <button className="mobile-menu-toggler">
            <span className="sr-only">Toggle mobile menu</span>
            <i className="icon-bars" />
          </button>
          <a href="/" className="logo">
            <img
              src="/assets/images/icons/logo.png"
              alt="Logo"
              width={140}
              height={50}
            />
          </a>
        </div>
        {/* End header left */}

        {/* header center */}
        <div className="header-center">
          <div className="header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block">
            <i className="icon-search" />
            <Search />
          </div>
          {/* End .header-search */}
        </div>
        {/* End header center */}

        {/* header right */}
        <div className="header-right">
          <div className="account">
            {Cookies.get("loginToken") ? (
              <div className="icon-section">
                <div className="icon" onClick={() => navigate("/myaccount")}>
                  <i className="icon-user" />
                  <p style={{ textTransform: "capitalize" }}>
                    {Cookies.get("name")}
                  </p>
                </div>
              </div>
            ) : (
              <div className="icon-section">
                <div className="icon" onClick={() => setShow(true)}>
                  <i className="icon-user" />
                  <p>Account</p>
                </div>
              </div>
            )}
          </div>

          {/* wishlist icon */}
          <div className="wishlist">
            {Cookies.get("loginToken") ? (
              <div className="icon-section">
                <div className="icon" onClick={() => navigate("/wishlist")}>
                  <i className="icon-heart-o" />
                  <span className="counter badge">
                    {wishlistProduct.length}
                  </span>
                  <p>Wishlist</p>
                </div>
              </div>
            ) : (
              <div className="icon-section">
                <div className="icon" onClick={() => setShow(true)}>
                  <i className="icon-heart-o" />
                  <span className="counter badge">0</span>
                  <p>Wishlist</p>
                </div>
              </div>
            )}
          </div>

          {/* cart icon */}
          <div className="cart">
            {Cookies.get("loginToken") ? (
              <div className="icon-section">
                <div className="icon" onClick={() => navigate("/cart")}>
                  <i className="icon-shopping-cart" />
                  <span className="counter badge">{cartProduct.length}</span>
                  <p>Cart</p>
                </div>
              </div>
            ) : (
              <div className="icon-section">
                <div className="icon" onClick={() => setShow(true)}>
                  <i className="icon-shopping-cart" />
                  <span className="counter badge">0</span>
                  <p>Cart</p>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* End header right */}
      </div>
      {/* End .container */}
    </div>
  );
};

export default CenterNavbar;
