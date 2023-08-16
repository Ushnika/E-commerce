import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import AuthURL from "../../configuration/authUrl";
import { nonImageUrl, productImageUrl } from "../../configuration/domainURL";
import { useThemeAddLoginDetails } from "../../context/ThemeProvider";
import AccountDetails from "./AccountDetails";
// import { toast } from "react-toastify";

const TabContent = () => {
  const [orderDetails, setOrderDetails] = useState([]);
  const [orderProduct, setOrderProduct] = useState([]);
  const [billingAddress, setBillingAddress] = useState({});
  const { details } = useThemeAddLoginDetails();
  const [error, setError] = useState(false);

  useEffect(() => {
    getOrderDetails();
    getBillingDetails();
  }, []);

  const getOrderDetails = () => {
    let orderItems = [];
    AuthURL.get("order/my-orders")
      .then((response) => {
        const data = response.data.data.orders;
        setOrderDetails(response.data.data.orders);
        data.forEach((item) => {
          orderItems = orderItems.concat(item.orderitems);
        });
        setOrderProduct(orderItems);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getBillingDetails = () => {
    AuthURL.get("billing/details")
      .then((response) => {
        setBillingAddress(response.data.data.billing_detail);
      })
      .catch((error) => {
        console.log(error);
        setError(true);

        // const { status, data } = error.response;
        // if (status === 404) {
        //   // setError(true);
        //   toast.error(data.message);
        // }
      });
  };

  return (
    <div>
      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="tab-dashboard"
          role="tabpanel"
          aria-labelledby="tab-dashboard-link"
        >
          <p>
            Hello{" "}
            <span className="font-weight-normal text-dark">{details.name}</span>{" "}
            <br />
            From your account dashboard you can view your recent orders , manage
            your shipping and billing addresses , and edit your password and
            account details .
          </p>
        </div>
        {/* .End .tab-pane */}
        <div
          className="tab-pane fade"
          id="tab-orders"
          role="tabpanel"
          aria-labelledby="tab-orders-link"
        >
          {Cookies.get("loginToken") ? (
            <div>
              {console.log(orderDetails.length)}
              {orderDetails.length === 0 ? (
                <div>
                  <p>No order has been made yet.</p>
                  <a href="/shop" className="btn btn-outline-primary-2">
                    <span>GO SHOP</span>
                    <i className="icon-long-arrow-right" />
                  </a>
                </div>
              ) : (
                <table className="table table-cart table-mobile">
                  <thead>
                    <tr>
                      <th>Product Image</th>
                      <th>Product Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Total</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {orderProduct.map((item, index) => {
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
                                      width={50}
                                      height={50}
                                    />
                                  ) : (
                                    <img
                                      src={productImageUrl + item.product.image}
                                      alt="ProductImg"
                                      width={50}
                                      height={50}
                                    />
                                  )}
                                </a>
                              </figure>

                              {/* End .product-title */}
                            </div>
                            {/* End .product */}
                          </td>
                          <td>
                            <h3 className="product-title">
                              <a href={"/shop/" + item.product.id}>
                                {item.product.name}
                              </a>
                            </h3>
                          </td>
                          <td className="quantity-col">{item.quantity}</td>
                          <td className="price-col">Rs {item.product.price}</td>
                          <td className="total-col">
                            Rs {item.quantity * item.product.price}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          ) : (
            <div>
              <p>Please login to see your orders</p>
              <a href="/shop" className="btn btn-outline-primary-2">
                <span>GO SHOP</span>
                <i className="icon-long-arrow-right" />
              </a>
            </div>
          )}
        </div>
        {/* .End .tab-pane */}
        <div
          className="tab-pane fade"
          id="tab-address"
          role="tabpanel"
          aria-labelledby="tab-address-link"
        >
          <p>
            The following addresses will be used on the checkout page by
            default.
          </p>
          <div className="row">
            <div className="col-lg-6">
              <div className="card card-dashboard">
                <div className="card-body">
                  <h3 className="card-title">Billing Address</h3>
                  {/* End .card-title */}
                  {console.log(billingAddress)}
                  {error ? (
                    <p>
                      No Billing Address Added
                      <br />
                      <a href="/editBilling">
                        Add <i className="icon-edit" />
                      </a>
                    </p>
                  ) : (
                    <p>
                      User Name :{" "}
                      {billingAddress.first_name +
                        " " +
                        billingAddress.last_name}
                      <br />
                      Address1 : {billingAddress.address_1}
                      <br />
                      Address2 : {billingAddress.address_2}
                      <br />
                      City : {billingAddress.city}
                      <br />
                      Landmark : {billingAddress.landmark}
                      <br />
                      Phone : {billingAddress.phone}
                      <br />
                      Postcode : {billingAddress.postcode}
                      <br />
                      <a href="/editBilling">
                        Edit <i className="icon-edit" />
                      </a>
                    </p>
                  )}
                </div>
                {/* End .card-body */}
              </div>
              {/* End .card-dashboard */}
            </div>
            {/* End .col-lg-6 */}
          </div>
          {/* End .row */}
        </div>
        {/* .End .tab-pane */}
        <div
          className="tab-pane fade"
          id="tab-account"
          role="tabpanel"
          aria-labelledby="tab-account-link"
        >
          <AccountDetails />
        </div>
        {/* .End .tab-pane */}
      </div>
    </div>
  );
};

export default TabContent;
