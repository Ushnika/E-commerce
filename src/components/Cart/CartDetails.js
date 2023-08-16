import React, { useState, useEffect } from "react";
import Loading from "../Elements/Loading";
import { useThemeCart } from "../../context/ThemeProvider";
import Modal from "react-bootstrap/Modal";
import { FiAlertTriangle } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import AuthURL from "../../configuration/authUrl";
import { nonImageUrl, productImageUrl } from "../../configuration/domainURL";
import Cookies from "js-cookie";

const CartDetails = () => {
  const { cartProduct, setCartProduct } = useThemeCart();
  const [total, setTotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [loading, setLoading] = useState(false);
  const [delShow, setDelShow] = useState(false);
  const [delId, setDelId] = useState(null);
  const { navigate } = useNavigate();
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const getCartProduct = () => {
      setLoading(true);

      AuthURL.get("cart/all-products")
        .then((response) => {
          if (response.status === 200) {
            setCartProduct(response.data.data.carts);
            setTotal(response.data.data.total);
            setShipping(response.data.data.shipping_price);
            setLoading(false);
          }
        })
        .catch((error) => {
          setLoading(false);
          const { status, data } = error.response;
          if (status === 401) {
            toast.error(data.message);
          }
        });
    };

    getCartProduct();
  }, [cartProduct.length, setCartProduct]);

  //Modal close
  const handleClose = () => {
    setDelShow(false);
  };

  const handleDelete = (id) => {
    setDelShow(true);
    setDelId(id);
  };

  const handleRemove = () => {
    const cartProductAfterDelete = cartProduct.filter(
      (data) => data.id !== delId
    );
    AuthURL.delete("cart/remove/" + delId)
      .then((response) => {
        if (response.status === 200) {
          setDelShow(false);
          setCartProduct(cartProductAfterDelete);
          setDelId(null);
          setTotal(response.data.data.total);
          setShipping(response.data.data.shipping_price);
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

  const handleIncrement = (id) => {
    let cartUpdateTest = [];
    const copyCartProduct = [...cartProduct];
    for (let i = 0; i < copyCartProduct.length; i++) {
      if (copyCartProduct[i].id === id) {
        if (copyCartProduct[i].quantity < copyCartProduct[i].product.quantity) {
          copyCartProduct[i].quantity = copyCartProduct[i].quantity + 1;
        }
        cartUpdateTest = [
          ...cartUpdateTest,
          {
            cart_id: copyCartProduct[i].id,
            product_id: copyCartProduct[i].product.id,
            qty: copyCartProduct[i].quantity,
          },
        ];
        handleUpdateCart(cartUpdateTest);
      }
    }
    setCartProduct(copyCartProduct);
  };

  const handleDecrement = (id) => {
    let cartUpdateTest = [];
    const copyCartProduct = [...cartProduct];
    for (let i = 0; i < copyCartProduct.length; i++) {
      if (copyCartProduct[i].id === id) {
        if (copyCartProduct[i].quantity > 1) {
          copyCartProduct[i].quantity = copyCartProduct[i].quantity - 1;
        }
        cartUpdateTest = [
          ...cartUpdateTest,
          {
            cart_id: copyCartProduct[i].id,
            product_id: copyCartProduct[i].product.id,
            qty: copyCartProduct[i].quantity,
          },
        ];
        handleUpdateCart(cartUpdateTest);
      }
    }
    setCartProduct(copyCartProduct);
  };

  const handleUpdateCart = (cartUpdateTest) => {
    if (!clicked) {
      setClicked(true);
      console.log(cartUpdateTest);
      // const newcartUpdate = [...cartUpdate];
      const formData = new FormData();
      cartUpdateTest.forEach((cartUpdate) => {
        formData.append("cart_ids[]", cartUpdate.cart_id);
        formData.append("product_ids[]", cartUpdate.product_id);
        formData.append("quantities[]", cartUpdate.qty);
      });
      AuthURL.post("cart/update-with-products", formData)
        .then((response) => {
          if (response.status === 200) {
            setCartProduct(response.data.data.carts);
            setTotal(response.data.data.total);
            setShipping(response.data.data.shipping_price);
            sessionStorage.setItem("cart", cartProduct.length);
            Cookies.set("cart", cartProduct.length);
            navigate("/");
          }
        })
        .catch((error) => {
          // const { status, data } = error.response;
          // if (status === 404) {
          //   toast.error(data.data.first_name);
          // }
        });
    }
  };

  return (
    <div>
      <div
        className="page-header text-center"
        style={{
          backgroundImage: 'url("assets/images/page-header-bg.jpg")',
        }}
      >
        <div className="container">
          <h1 className="page-title">Shopping Cart</h1>
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
              Shopping Cart
            </li>
          </ol>
        </div>
        {/* End .container */}
      </nav>
      {/* End .breadcrumb-nav */}
      <div className="cart" style={{ position: "relative" }}>
        <div>
          {cartProduct.length === 0 ? (
            <div className="text-center my-5">
              <p className="mb-3"> No Products in Cart </p>
              <a href="/shop" className="btn btn-outline-primary-2">
                Continue Shopping
              </a>
            </div>
          ) : (
            <div className="container">
              {loading ? (
                <Loading />
              ) : (
                <div className="row">
                  <div className="col-lg-9">
                    <table className="table table-cart table-mobile">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        {cartProduct.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td className="product-col">
                                <div className="product">
                                  <figure className="product-media-images">
                                    <a
                                      href={"/shop/" + item.product.id}
                                      className="other-img"
                                    >
                                      {item.product.image === "no-image.png" ? (
                                        <img
                                          src={nonImageUrl}
                                          alt="ProductImg"
                                          width={150}
                                          height={140}
                                        />
                                      ) : (
                                        <img
                                          src={
                                            productImageUrl + item.product.image
                                          }
                                          alt="ProductImg"
                                          width={150}
                                          height={140}
                                        />
                                      )}
                                    </a>
                                  </figure>
                                  <h3 className="product-title">
                                    <a href={"/shop/" + item.product.id}>
                                      {item.product.name.slice(0, 25)}
                                    </a>
                                  </h3>
                                  {/* End .product-title */}
                                </div>
                                {/* End .product */}
                              </td>
                              <td className="price-col">
                                Rs {item.product.price}
                              </td>
                              <td className="quantity-col">
                                <div className="cart-product-quantity">
                                  {/* <input
                                    type="number"
                                    className="form-control"
                                    defaultValue={item.quantity}
                                    min={1}
                                    max={item.product.quantity}
                                    step={1}
                                    data-decimals={0}
                                    required
                                    /> */}
                                  <span
                                    className="remove-quantity"
                                    onClick={() => handleDecrement(item.id)}
                                  >
                                    &mdash;
                                  </span>

                                  <div className="form-control">
                                    {item.quantity}
                                  </div>
                                  <span
                                    className="add-quantity"
                                    onClick={() =>
                                      handleIncrement(
                                        item.id,
                                        item.product.quantity
                                      )
                                    }
                                  >
                                    &#xff0b;
                                  </span>
                                </div>
                                {/* End .cart-product-quantity */}
                              </td>
                              <td className="total-col">
                                Rs {item.quantity * item.product.price}
                              </td>
                              <td className="remove-col">
                                <button className="btn-remove">
                                  <i
                                    className="icon-close"
                                    onClick={() => handleDelete(item.id)}
                                  />
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    {/* End .table table-wishlist */}
                    {/* coupon code */}
                    {/* <div className="cart-bottom">
                      <div className="cart-discount">
                        <form action="#">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              required
                              placeholder="coupon code"
                            />
                            <div className="input-group-append">
                              <button
                                className="btn btn-outline-primary-2"
                                type="submit"
                              >
                                <i className="icon-long-arrow-right" />
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      <a
                        href="#"
                        className="btn btn-outline-dark-2"
                        onClick={handleUpdateCart}
                      >
                        <span>UPDATE CART</span>
                        <i className="icon-refresh" />
                      </a>
                    </div> */}
                  </div>
                  {/* End .col-lg-9 */}
                  <aside className="col-lg-3">
                    <div className="summary summary-cart">
                      <h3 className="summary-title">Cart Total</h3>
                      {/* End .summary-title */}
                      <table className="table table-summary">
                        <tbody>
                          <tr className="summary-subtotal">
                            <td>Subtotal:</td>
                            <td>Rs {total}</td>
                          </tr>
                          {/* End .summary-subtotal */}
                          <tr className="summary-shipping">
                            <td>Shipping:</td>
                            <td>&nbsp;</td>
                          </tr>
                          <tr className="summary-shipping-row">
                            <td>
                              <div className="custom-control custom-radio">
                                <input
                                  type="radio"
                                  id="free-shipping"
                                  name="shipping"
                                  className="custom-control-input"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="free-shipping"
                                >
                                  Free Shipping
                                </label>
                              </div>
                              {/* End .custom-control */}
                            </td>
                            <td>Rs {shipping}</td>
                          </tr>
                          {/* End .summary-shipping-row */}

                          <tr className="summary-total">
                            <td>Total:</td>
                            <td>{total + shipping}</td>
                          </tr>
                          {/* End .summary-total */}
                        </tbody>
                      </table>
                      {/* End .table table-summary */}
                      <Link
                        to="/checkout"
                        className="btn btn-outline-primary-2 btn-order btn-block"
                        onClick={handleUpdateCart}
                      >
                        PROCEED TO CHECKOUT
                      </Link>
                    </div>
                    {/* End .summary */}
                    <a
                      href="/shop"
                      className="btn btn-outline-dark-2 btn-block mb-3"
                    >
                      <span>CONTINUE SHOPPING</span>
                      <i className="icon-refresh" />
                    </a>
                  </aside>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
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
          <AiOutlineClose className="mt-2 mr-5 " onClick={handleClose} />
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

export default CartDetails;
