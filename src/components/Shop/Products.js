import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import API from "../../configuration/config";
import Loading from "../Elements/Loading";
import {
  useTheme,
  useThemeAddCart,
  useThemeAddWishlist,
  useThemeFilter,
  useThemeAuth,
} from "../../context/ThemeProvider";
import { nonImageUrl, productImageUrl } from "../../configuration/domainURL";
import Cookies from "js-cookie";

const Products = () => {
  const { setShow } = useThemeAuth();
  const { handleAddToCart } = useThemeAddCart();
  const { productData, setProductData } = useTheme();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 30;
  const [rows, setRows] = useState("");
  const { id } = useParams();
  const { handleCategoryFilter } = useThemeFilter();
  const { handleAddWishlist } = useThemeAddWishlist();

  const getProducts = useCallback(() => {
    setLoading(true);
    API.get("/all-products", {
      params: {
        limit: limit,
        page: page,
      },
    })
      .then((response) => {
        setProductData(response.data.data.products);
        setRows(response.data.data.totalRows);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [page, setProductData]);

  useEffect(() => {
    if (id) {
      handleCategoryFilter(id);
    } else {
      getProducts();
    }
  }, [id, getProducts, handleCategoryFilter]);

  /* Fetching data from the API and setting the data to the state. */

  const handleNext = () => {
    API.get("/all-products", {
      params: {
        limit: limit,
        page: page + 1,
      },
    })
      .then((response) => {
        setProductData(response.data.data.products);
        setLoading(false);
        setPage(page + 1);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handlePrev = () => {
    if (page > 1) {
      API.get("/all-products", {
        params: {
          limit: limit,
          page: page - 1,
        },
      })
        .then((response) => {
          setProductData(response.data.data.products);
          setLoading(false);
          setPage(page - 1);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleClick = () => {
    setShow(true);
  };

  return (
    <div>
      {" "}
      <div className="toolbox">
        <div className="toolbox-left">
          <div className="toolbox-info">
            Showing{" "}
            <span>
              {productData.length} of {rows}
            </span>{" "}
            Products
          </div>
          {/* End .toolbox-info */}
        </div>
        {/* End .toolbox-left */}
        <div className="toolbox-right">
          <div className="toolbox-sort">
            <label htmlFor="sortby">Sort by:</label>
            <div className="select-custom">
              <select name="sortby" id="sortby" className="form-control">
                <option value="DEFAULT" disabled>
                  Select
                </option>
                <option value="popularity">Most Popular</option>
                <option value="rating">Most Rated</option>
                <option value="date">Date</option>
              </select>
            </div>
          </div>
          {/* End .toolbox-sort */}
        </div>
        {/* End .toolbox-right */}
      </div>
      {/* End .toolbox */}
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="products mb-3">
            <div className="row justify-content-center">
              {productData.length === 0 ? (
                <p className="none-item">No Products</p>
              ) : (
                productData.map((item, index) => {
                  const galleries = item.gallery;
                  return (
                    <div className="col-6 col-md-4 col-lg-4" key={index}>
                      <div className="product product-7 text-center">
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
                                  item.image_url || productImageUrl + item.image
                                }
                                alt="ProductImg"
                                className="product-image"
                              />
                            )}
                          </a>
                          <div className="product-action-vertical">
                            <span
                              className="btn-product-icon btn-wishlist"
                              onClick={() => handleAddWishlist(item.id)}
                            >
                              <span>Add to wishlist</span>
                            </span>
                            <span
                              href={"/shop/" + item.id}
                              className="btn-product-icon btn-quickview"
                              title="Quick view"
                            >
                              <span>Quick view</span>
                            </span>
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
                            {item.category == null ? (
                              <></>
                            ) : (
                              <p>{item.category.name}</p>
                            )}
                          </div>
                          {/* End .product-cat */}
                          <h3 className="product-title">
                            <a href={"/shop/" + item.id}>{item.name}</a>
                          </h3>
                          {/* End .product-title */}
                          <div className="product-price">Rs {item.price}</div>
                          {/* End .product-price */}

                          <div className="product-nav product-nav-thumbs">
                            {galleries.slice(0, 3).map((image, i) => {
                              return (
                                <span
                                  href="#"
                                  className="active other-img"
                                  key={i}
                                >
                                  <img
                                    src={productImageUrl + image}
                                    alt="product desc"
                                    style={{ width: "75%" }}
                                  />
                                </span>
                              );
                            })}
                          </div>
                          {/* End .product-nav */}
                        </div>
                        {/* End .product-body */}
                      </div>
                      {/* End .product */}
                    </div>
                  );
                })
              )}
              {/* End .col-sm-6 col-lg-4 */}
            </div>
            {/* End .row */}
          </div>
          {/* End .products */}
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <button
                  className="page-link page-link-prev"
                  aria-label="Previous"
                  onClick={handlePrev}
                  disabled={page === 1}
                >
                  <span aria-hidden="true">
                    <i className="icon-long-arrow-left" />
                  </span>
                  Prev
                </button>
              </li>
              <li className="page-item active" aria-current="page">
                <span className="page-link">1</span>
              </li>
              <li className="page-item">
                <span className="page-link">2</span>
              </li>
              <li className="page-item">
                <span className="page-link">3</span>
              </li>
              <li className="page-item-total">of 6</li>
              <li className="page-item">
                <button
                  className="page-link page-link-next"
                  // href="#"
                  aria-label="Next"
                  onClick={handleNext}
                  disabled={page + 1 > Math.ceil(rows / 30)}
                >
                  Next{" "}
                  <span aria-hidden="true">
                    <i className="icon-long-arrow-right" />
                  </span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Products;
