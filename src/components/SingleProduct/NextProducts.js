import React from "react";
import { useThemeAddCart, useThemeAuth } from "../../context/ThemeProvider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productImageUrl } from "../../configuration/domainURL";
import Cookies from "js-cookie";

const NextProducts = ({ categoryWiseItem }) => {
  const { setShow } = useThemeAuth();
  const { handleAddToCart } = useThemeAddCart();

  //slider settings
  var settings = {
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          infinite: categoryWiseItem.length > 4,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          initialSlide: 2,
          infinite: categoryWiseItem.length > 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          infinite: categoryWiseItem.length > 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          infinite: categoryWiseItem.length > 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: categoryWiseItem.length > 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          infinite: categoryWiseItem.length > 1,
        },
      },
    ],
  };

  const handleClick = () => {
    setShow(true);
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {categoryWiseItem.map((item, index) => {
          const galleries = item.gallery;
          return (
            <div
              className="abc product product-7 slider-product text-center"
              key={index}
            >
              <figure className="product-media">
                {/* {item.style == "" ? (
                  <></>
                ) : (
                  <span className={`product-label ${item.style}`}>
                    {item.label}
                  </span>
                )} */}

                <a href={"/shop/" + item.id}>
                  <img
                    src={item.image_url}
                    alt="ProductImg"
                    className="product-image"
                  />
                </a>
                <div className="product-action-vertical">
                  <a
                    href="/wishlist"
                    className="btn-product-icon btn-wishlist btn-expandable"
                  >
                    <span>add to wishlist</span>
                  </a>
                  <a
                    href={"/shop/" + item.id}
                    className="btn-product-icon btn-quickview"
                    title="Quick view"
                  >
                    <span>Quick view</span>
                  </a>
                </div>
                {/* End .product-action-vertical */}
                <div className="product-action">
                  {Cookies.get("loginToken") ? (
                    <span
                      className="btn-product btn-cart"
                      onClick={() => handleAddToCart(item.id, 1)}
                    >
                      <span>add to cart</span>
                    </span>
                  ) : (
                    <span
                      className="btn-product btn-cart"
                      onClick={handleClick}
                      style={{ cursor: "pointer" }}
                    >
                      <span>add to cart</span>
                    </span>
                  )}
                </div>
                {/* End .product-action */}
              </figure>
              {/* End .product-media */}
              <div className="product-body">
                <div className="product-cat">
                  <a href={"/shop/" + item.id}>{item.category.name}</a>
                </div>
                {/* End .product-cat */}
                <h3 className="product-title">
                  <a href={"/shop/" + item.id}>{item.name}</a>
                </h3>
                {/* End .product-title */}
                <div className="product-price">{item.price}</div>
                {/* End .product-price */}
                <div className="product-nav product-nav-thumbs">
                  {galleries.map((image, i) => {
                    return (
                      <a href={"/shop/" + item.id} className="active" key={i}>
                        <img src={productImageUrl + image} alt="product desc" />
                      </a>
                    );
                  })}
                </div>
                {/* End .product-nav */}
              </div>
              {/* End .product-body */}
            </div>
          );
        })}
        {/* End .product */}
      </Slider>
      {/* End .owl-carousel */}
    </div>
  );
};

export default NextProducts;
