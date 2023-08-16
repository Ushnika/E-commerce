import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useThemeAddCart } from "../../context/ThemeProvider";
import Modal from "react-bootstrap/Modal";
import { AiOutlineClose } from "react-icons/ai";
import { FiAlertTriangle } from "react-icons/fi";
import AuthURL from "../../configuration/authUrl";
import { productImageUrl } from "../../configuration/domainURL";
import Loading from "../Elements/Loading";

const WishlistSection = () => {
  const [wishlistProduct, setWishlistProduct] = useState([]);
  const { handleAddToCart } = useThemeAddCart();
  const [delShow, setDelShow] = useState(false);
  const [wishlistID, setWishlistID] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getWishlistProduct();
  }, []);

  const getWishlistProduct = () => {
    setLoading(true);
    AuthURL.get("wishlist/my-wishlist")
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setLoading(false);
          setWishlistProduct(response.data.data.wishlists);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Modal close
  const handleClose = () => {
    setDelShow(false);
  };

  const handleDelete = (id) => {
    console.log(id);
    setDelShow(true);
    setWishlistID(id);
  };

  const handleRemove = () => {
    const wishlistProductAfterDel = wishlistProduct.filter(
      (data) => data.id !== wishlistID
    );
    AuthURL.delete("wishlist/remove/" + wishlistID)
      .then((response) => {
        if (response.status === 200) {
          setDelShow(false);
          setWishlistProduct(wishlistProductAfterDel);
          setWishlistID(null);
          toast.success(response.data.message);
        }
      })
      .catch((error) => {
        const { status, data } = error.response;
        if (status === "404") {
          toast.error(data.message);
        }
      });
  };

  return (
    <div>
      <div
        className="page-header text-center"
        style={{ backgroundImage: 'url("assets/images/page-header-bg.jpg")' }}
      >
        <div className="container">
          <h1 className="page-title">Wishlist</h1>
        </div>
        {/* End .container */}
      </div>
      {/* End .page-header */}
      <nav aria-label="breadcrumb" className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Wishlist
            </li>
          </ol>
        </div>
        {/* End .container */}
      </nav>
      {/* End .breadcrumb-nav */}
      <div className="page-content">
        {loading ? (
          <Loading />
        ) : (
          <div className="container">
            {wishlistProduct?.length === 0 ? (
              <div className="text-center my-5">
                <p className="mb-3"> No Products in Wishlist </p>
                <a href="/shop" className="btn btn-outline-primary-2">
                  Continue Shopping
                </a>
              </div>
            ) : (
              <table className="table table-wishlist table-mobile">
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Stock Status</th>
                    <th />
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {wishlistProduct.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="product-col">
                          <div className="product">
                            <figure className="product-media-images">
                              <a href={"/shop/" + item.product.id}>
                                <img
                                  src={productImageUrl + item.product.image}
                                  alt="ProductImg"
                                  width={50}
                                  height={50}
                                />
                              </a>
                            </figure>
                            <h3 className="product-title">
                              <a href={"/shop/" + item.product.id}>
                                {item.product.name}
                              </a>
                            </h3>
                            {/* End .product-title */}
                          </div>
                          {/* End .product */}
                        </td>
                        <td className="price-col">Rs {item.product.price}</td>
                        <td className="stock-col">
                          {item.product.quantity === "0" ? (
                            <span className="out-of-stock">Out of stock</span>
                          ) : (
                            <span className="in-stock">In stock</span>
                          )}
                        </td>
                        <td className="action-col">
                          <button
                            className="btn btn-block btn-outline-primary-2"
                            onClick={() => handleAddToCart(item.product.id, 1)}
                          >
                            <i className="icon-cart-plus" />
                            Add to Cart
                          </button>
                        </td>
                        <td className="remove-col">
                          <button
                            className="btn-remove"
                            onClick={() => handleDelete(item.id)}
                          >
                            <i className="icon-close" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
            {/* End .table table-wishlist */}
          </div>
        )}
        {/* End .container */}
      </div>
      {/* End .page-content */}
      {/*Delete Modal */}
      <Modal
        size="xs"
        show={delShow}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <div className="modal-top">
          <AiOutlineClose
            className="modal-close-icon mt-2 mr-5"
            onClick={handleClose}
          />
        </div>
        <Modal.Body>
          <div className="icontext my-3">
            <FiAlertTriangle className="alert_icon py-2 mb-2" />
            <h6>Do you really want to delete it?</h6>
          </div>
        </Modal.Body>
        <div className="mb-2 d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-primary mx-3"
            // data-bs-dismiss="modal"
            onClick={handleClose}
          >
            Cancel
          </button>

          <button
            type="button"
            className="btn btn-danger mx-3"
            onClick={handleRemove}
          >
            Delete
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default WishlistSection;
