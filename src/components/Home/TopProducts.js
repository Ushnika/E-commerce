import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../../configuration/config";
import {
  useThemeAddCart,
  useThemeAuth,
  useThemeAddWishlist,
} from "../../context/ThemeProvider";
import { nonImageUrl, productImageUrl } from "../../configuration/domainURL";
import Cookies from "js-cookie";
import Loading from "../Elements/Loading";

const TopProducts = () => {
  const { setShow } = useThemeAuth();
  const [category, setCategory] = useState([]);
  const [productData, setProductData] = useState([]);
  const { handleAddToCart } = useThemeAddCart();
  const [loading, setLoading] = useState(false);
  const { handleAddWishlist } = useThemeAddWishlist();

  useEffect(() => {
    getCategory();
    getProducts();
  }, []);

  const getCategory = () => {
    API.get("/categories/product-count")
      .then((response) => {
        const data = response.data.data.categories;
        const mostCategory = data
          .sort((a, b) => b.products_count - a.products_count)
          .slice(0, 3);
        setCategory(mostCategory);
        // console.log(mostCategory);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getProducts = () => {
    setLoading(true);
    API.get("/all-products?limit=10")
      .then((response) => {
        setProductData(response.data.data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleOpenCategory = (id) => {
    setLoading(true);
    API.get("/category/" + id + "/products?limit=10")
      .then((response) => {
        setProductData(response.data.data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleProducts = () => {
    setLoading(true);
    API.get("/all-products?limit=10")
      .then((response) => {
        setProductData(response.data.data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleClick = () => {
    setShow(true);
    toast.error("Please login to add product");
  };

  return (
    <div>
      <div className="container">
        <div className="heading heading-center mb-3">
          <h2 className="title mt-5">Top Selling Products</h2>
          {/* End .title */}
          <ul
            className="nav nav-pills nav-border-anim justify-content-center"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                id="top-all-link"
                data-toggle="tab"
                href="#top-all-tab"
                role="tab"
                aria-controls="top-all-tab"
                aria-selected="true"
                onClick={handleProducts}
              >
                All
              </a>
            </li>
            {category.map((item, i) => {
              return (
                <li className="nav-item" key={i}>
                  <a
                    className="nav-link"
                    id={item.id}
                    data-toggle="tab"
                    href="#top-fur-tab"
                    role="tab"
                    aria-controls="top-fur-tab"
                    aria-selected="false"
                    onClick={() => handleOpenCategory(item.id)}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* End .heading */}
        {loading ? (
          <Loading />
        ) : (
          <div className="tab-content">
            <div
              className="tab-pane p-0 fade show active"
              id="top-all-tab"
              role="tabpanel"
              aria-labelledby="top-all-tab"
            >
              <div className="products">
                <div className="row justify-content-center">
                  {productData.map((item, index) => {
                    // console.log(item);
                    return (
                      <div
                        className="col-6 col-md-4 col-lg-3 col-xl-5col"
                        key={index}
                      >
                        <div className="product product-11 text-center">
                          <figure className="product-media">
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
                                  src={
                                    item.image_url ??
                                    productImageUrl + item.image
                                  }
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
                            <div className="product-cat">
                              <a href={"/shop/" + item.id}>
                                {item.category === null ? (
                                  <p>N/A</p>
                                ) : (
                                  <p>{item.category.name}</p>
                                )}
                              </a>
                            </div>
                            {/* End .product-cat */}
                            <h3 className="product-title product-limit-title">
                              <a href={"/shop/" + item.id}>{item.name}</a>
                            </h3>
                            {/* End .product-title */}
                            <div className="product-price">
                              {" "}
                              <span className="new-price">Rs {item.price}</span>
                              {/* <span className="old-price"> {item.price2}</span> */}
                            </div>
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
                </div>
                {/* End .row */}
              </div>
              {/* End .products */}
            </div>
          </div>
        )}
        {/* End .tab-content */}
      </div>
      {/* End .container */}
      <div className="container">
        <hr className="mt-1 mb-6" />
      </div>
      {/* End .container */}
    </div>
  );
};

export default TopProducts;
