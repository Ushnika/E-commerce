import React from "react";
import { Link } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import { useState, useEffect } from "react";
import {
  useThemeAddCart,
  useThemeAddWishlist,
  useThemeAuth,
} from "../../context/ThemeProvider";
import { productImageUrl } from "../../configuration/domainURL";
import Cookies from "js-cookie";

const ProductDetails = ({ product, gallery, image }) => {
  const { setShow } = useThemeAuth();
  const { handleAddToCart, quantity, setQuantity } = useThemeAddCart();
  const allImages = [image, ...gallery];
  const [mainImage, setMainImage] = useState();
  var striptags = require("striptags");
  const { handleAddWishlist } = useThemeAddWishlist();
  console.log(product);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // setMainImage(mainImage ? mainImage : allImages[0]);
    setMainImage((m) => (m ? m : allImages[0]));
  }, [product?.category_id]);

  const clickImage = (image) => {
    setMainImage(image);
  };

  const handleClick = () => {
    setShow(true);
  };

  const handleIncrement = () => {
    if (quantity < product.quantity) {
      setQuantity((prevCount) => prevCount + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };

  const picture = productImageUrl + mainImage;

  return (
    <div>
      <div className="product-details-top">
        <div className="row">
          <div className="col-md-6">
            <div className="product-gallery product-gallery-vertical">
              <div className="row">
                <figure className="product-main-image">
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: "Wristwatch by Ted Baker London",
                        isFluidWidth: true,
                        src: `${picture}`,
                      },
                      largeImage: {
                        src: `${picture}`,
                        width: 1200,
                        height: 1800,
                      },
                      enlargedImageContainerStyle: {
                        zIndex: "1500",
                        backgroundColor: "#fff",
                      },
                      enlargedImageContainerDimensions: {
                        width: "100%",
                        height: "100%",
                      },
                    }}
                  />
                </figure>
                {/* <!-- End .product-main-image --> */}

                <div
                  id="product-zoom-gallery"
                  className="product-image-gallery"
                >
                  {allImages.map((item, i) => {
                    return (
                      <div
                        className="product-gallery-item"
                        key={i}
                        onClick={() => clickImage(item)}
                      >
                        <img
                          src={productImageUrl + item}
                          alt="product side"
                          // width={400}
                          // height={100}
                        />
                      </div>
                    );
                  })}
                </div>
                {/* <!-- End .product-image-gallery --> */}
              </div>
              {/* <!-- End .row --> */}
            </div>
            {/* <!-- End .product-gallery --> */}

            {/* End .product-gallery */}
          </div>
          {/* End .col-md-6 */}
          <div className="col-md-6">
            <div className="product-details">
              <h1 className="product-title">{product.name}</h1>
              {/* rating part */}
              <div className="product-price">Rs {product.price}</div>
              {/* End .product-price */}
              <div className="product-content">
                <p>{striptags(product.description)}</p>
              </div>
              {/* End .product-content */}
              {/* variants part */}
              <div className="details-filter-row details-row-size my-5">
                {product.quantity === "0" ? (
                  <div>
                    <button className="btn btn-danger">Out of stock</button>
                  </div>
                ) : (
                  <div>
                    <label htmlFor="qty">Qty:</label>
                    <div className="product-details-quantity">
                      <span
                        className="remove-quantity"
                        onClick={handleDecrement}
                      >
                        &mdash;
                      </span>

                      <div className="form-control">{quantity}</div>
                      <span className="add-quantity" onClick={handleIncrement}>
                        &#xff0b;
                      </span>
                    </div>
                  </div>
                )}
                {/* End .product-details-quantity */}
              </div>
              {/* End .details-filter-row */}
              <div className="product-details-action my-5">
                {Cookies.get("loginToken") ? (
                  <div>
                    {product.quantity === 0 ? (
                      <Link
                        className="btn-product btn-cart disabledButton"
                        onClick={() => handleAddToCart(product.id, quantity)}
                        style={{ cursor: "pointer" }}
                      >
                        <span>add to cart</span>
                      </Link>
                    ) : (
                      <Link
                        className="btn-product btn-cart"
                        onClick={() => handleAddToCart(product.id, quantity)}
                        style={{ cursor: "pointer" }}
                      >
                        <span>add to cart</span>
                      </Link>
                    )}
                  </div>
                ) : (
                  <span
                    className="btn-product btn-cart"
                    onClick={handleClick}
                    style={{ cursor: "pointer" }}
                  >
                    <span>add to cart</span>
                  </span>
                )}
                <div className="details-action-wrapper">
                  {Cookies.get("loginToken") ? (
                    <Link
                      className="btn-product btn-wishlist "
                      title="Wishlist"
                      onClick={() => handleAddWishlist(product.id)}
                      style={{ cursor: "pointer" }}
                    >
                      <span className="wishlist">Add to Wishlist</span>
                    </Link>
                  ) : (
                    <span
                      className="btn-product btn-wishlist "
                      title="Wishlist"
                      onClick={handleClick}
                      style={{ cursor: "pointer" }}
                    >
                      <span className="wishlist">Add to Wishlist</span>
                    </span>
                  )}
                </div>
                {/* End .details-action-wrapper */}
              </div>
              {/* End .product-details-action */}
              <div className="product-details-footer my-5">
                <div className="product-cat">
                  {product.category == null ? (
                    <></>
                  ) : (
                    <div>
                      <span>Category:</span>
                      <span>{product.category.name}</span>
                    </div>
                  )}
                </div>
                {/* End .product-cat */}
                {/* <div className="social-icons social-icons-sm">
                  <span className="social-label">Share:</span>
                  <a
                    href="#"
                    className="social-icon"
                    title="Facebook"
                    target="_blank"
                  >
                    <i className="icon-facebook-f" />
                  </a>
                  <a
                    href="#"
                    className="social-icon"
                    title="Twitter"
                    target="_blank"
                  >
                    <i className="icon-twitter" />
                  </a>
                  <a
                    href="#"
                    className="social-icon"
                    title="Instagram"
                    target="_blank"
                  >
                    <i className="icon-instagram" />
                  </a>
                  <a
                    href="#"
                    className="social-icon"
                    title="Pinterest"
                    target="_blank"
                  >
                    <i className="icon-pinterest" />
                  </a>
                </div> */}
                {/* End of Share icons */}
              </div>
              {/* End .product-details-footer */}
            </div>
            {/* End .product-details */}
          </div>
          {/* End .col-md-6 */}
        </div>
        {/* End .row */}
      </div>
      {/* End .product-details-top */}
    </div>
  );
};

export default ProductDetails;
