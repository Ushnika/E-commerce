import React, { useState, useEffect } from "react";
import API from "../../configuration/config";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  useThemeAddCart,
  useThemeAuth,
  useThemeAddWishlist,
} from "../../context/ThemeProvider";
import { Link } from "react-router-dom";
import { NextBtn, PreviousBtn } from "../Elements/SliderButton";
import Loading from "../Elements/Loading";
import { toast } from "react-toastify";
import { nonImageUrl, productImageUrl } from "../../configuration/domainURL";
import Cookies from "js-cookie";

const TabProducts = () => {
  const { setShow } = useThemeAuth();
  const [productData, setProductData] = useState([]);
  const { handleAddToCart } = useThemeAddCart();
  const [loading, setLoading] = useState(false);
  const { handleAddWishlist } = useThemeAddWishlist();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    setLoading(true);
    API.get("/all-featured-products?limit=10")
      .then((response) => {
        setProductData(response.data.data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //slider settings
  var settings = {
    dots: true,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    pauseOnHover: true,
    nextArrow: <NextBtn />,
    prevArrow: <PreviousBtn />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          // infinite: productData.length > 6,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleClick = () => {
    setShow(true);
    toast.error("Please login to add product");
  };

  return (
    <div>
      <div className="container">
        <h2 className="title text-center mb-3">Featured Products</h2>
        {loading ? (
          <Loading />
        ) : (
          <Slider {...settings}>
            {productData.map((item, index) => {
              return (
                <div key={index}>
                  <div className="product product-11 text-center">
                    <figure className="product-media-home">
                      {item.quantity === "0" ? (
                        <span className="product-label label-circle label-out">
                          Out of stock
                        </span>
                      ) : (
                        <></>
                      )}

                      <a href={"/shop/" + item.id}>
                        {item.image === "no-image.png" ? (
                          <img
                            src={nonImageUrl}
                            alt="ProductImg"
                            className="product-image"
                          />
                        ) : (
                          <img
                            src={item.image_url ?? productImageUrl + item.image}
                            alt="ProductImg"
                            className="product-image"
                          />
                        )}
                        {item.gallery.length === 0 ? (
                          <img
                            src={nonImageUrl}
                            alt="ProductImg"
                            className="product-image-hover"
                          />
                        ) : (
                          <img
                            src={productImageUrl + item.gallery[0]}
                            alt="ProductImg"
                            className="product-image-hover"
                          />
                        )}
                      </a>
                      <div className="product-action-vertical">
                        {Cookies.get("loginToken") ? (
                          <Link
                            className="btn-product-icon btn-wishlist "
                            onClick={() => handleAddWishlist(item.id)}
                            style={{ cursor: "pointer" }}
                          >
                            <span>add to wishlist</span>
                          </Link>
                        ) : (
                          <button
                            className="btn-product-icon btn-wishlist "
                            onClick={handleClick}
                            style={{ cursor: "pointer" }}
                          >
                            <span>add to wishlist</span>
                          </button>
                        )}
                      </div>
                      {/* End .product-action-vertical */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <h3 className="product-title product-limit-title">
                        <a href={"/shop/" + item.id}>{item.name}</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="new-price">Rs {item.price}</span>
                        {/* <span className="old-price">{item.price2}</span> */}
                      </div>
                      {/* <!-- End .product-price --> */}

                      {/* End .product-price */}
                    </div>
                    {/* End .product-body */}
                    <div className="product-action">
                      {Cookies.get("loginToken") ? (
                        <Link
                          className="btn-product btn-cart"
                          onClick={() => handleAddToCart(item.id, 1)}
                          style={{ cursor: "pointer" }}
                        >
                          <span>add to cart</span>
                        </Link>
                      ) : (
                        <button
                          className="btn-product btn-cart btn btn-outline-primary"
                          onClick={handleClick}
                          style={{ cursor: "pointer" }}
                        >
                          <span>add to cart</span>
                        </button>
                      )}
                    </div>
                    {/* End .product-action */}
                  </div>
                  {/* End .product */}
                </div>
              );
            })}
          </Slider>
        )}
        {/* End .slider-content */}
      </div>
      {/* End .container-fluid */}
      <div className="mb-5"></div>
      {/* <!-- End .mb-5 --> */}
    </div>
  );
};

export default TabProducts;
