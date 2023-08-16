import React, { useState, useEffect } from "react";
import { useThemeCart } from "../../context/ThemeProvider";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthURL from "../../configuration/authUrl";

const Bill = ({ formik, form }) => {
  const { cartProduct, setCartProduct } = useThemeCart();
  const [total, setTotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [checked, setChecked] = useState(false);
  const [paymentType, setPaymentType] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getCartProduct = () => {
      AuthURL.get("cart/all-products")
        .then((response) => {
          if (response.status === 200) {
            console.log(response.data.data);
            setCartProduct(response.data.data.carts);
            setTotal(response.data.data.total);
            setShipping(response.data.data.shipping_price);
          }
        })
        .catch((error) => {});
    };
    getCartProduct();
  }, [setCartProduct]);

  function Validation() {
    let isValid = true;
    let error = "";

    if (checked === false) {
      error = "Please select payment method";
      isValid = false;
    }

    if (
      formik.values.first_name === "" ||
      formik.values.last_name === "" ||
      formik.values.city === "" ||
      formik.values.province === "" ||
      formik.values.address_1 === "" ||
      formik.values.postcode === "" ||
      formik.values.phone === ""
    ) {
      toast.error("Please add billing details");
      isValid = false;
    }
    setError(error);
    return isValid;
  }

  const handleClickCheckout = (e) => {
    e.preventDefault();
    console.log("hello");

    const isValid = Validation();
    if (isValid) {
      const formData = new FormData();
      formData.append("first_name", formik.values.first_name);
      formData.append("last_name", formik.values.last_name);
      formData.append("phone", formik.values.phone);
      formData.append("address_1", formik.values.address_1);
      formData.append("address_2", formik.values.address_2);
      formData.append("landmark", formik.values.landmark);
      formData.append("city", formik.values.city);
      formData.append("province", formik.values.province);
      formData.append("postcode", formik.values.postcode);

      const formData1 = new FormData();
      formData1.append("payment_type", paymentType);

      const billingEdit = AuthURL.post("billing/update", formData);
      const orderPost = AuthURL.post("order/place", formData1);

      axios
        .all([billingEdit, orderPost])
        .then(
          axios.spread((...response) => {
            const billingResponse = response[0];
            const orderResponse = response[1];
            if (billingResponse.status && orderResponse.status === 200) {
              const { billing_detail } = billingResponse.data.data;
              const keys = Object.keys(billing_detail);
              keys.forEach((key) => formik.setFieldValue(key, ""));
              // setDetails(billingResponse.data.data.billing_detail);
              // setOrderDetail(orderResponse.data.data.orders);
              formik.setFieldValue({
                first_name: "",
                last_name: "",
                phone: "",
                address_1: "",
                address_2: "",
                landmark: "",
                city: "",
                province: "",
                postcode: "",
              });
              setTotal(0);
              setCartProduct([]);
              toast.success(orderResponse.data.message);
              navigate("/shop");
            }
          })
        )
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleChecked = () => {
    const check = !checked;
    setChecked(check);
    if (check === true) {
      setPaymentType("cash_on_delivery");
    } else {
      setPaymentType("");
    }
  };

  return (
    <div>
      <div className="summary">
        <h3 className="summary-title">Your Order</h3>
        {/* End .summary-title */}
        <table className="table table-summary">
          <thead>
            <tr>
              <th>Product</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody ref={form}>
            {cartProduct.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div className="table-product">{item.product.name}</div>
                  </td>
                  <td>Rs {item.total}</td>
                </tr>
              );
            })}
            <tr className="summary-subtotal">
              <td>Subtotal:</td>
              <td>Rs. {total}</td>
            </tr>
            {/* End .summary-subtotal */}
            <tr>
              <td>Shipping:</td>
              <td>Rs. {shipping}</td>
            </tr>
            <tr className="summary-total">
              <td>Total:</td>
              <td>Rs. {total + shipping}</td>
            </tr>
            {/* End .summary-total */}
          </tbody>
        </table>
        {/* End .table table-summary */}
        <div className="accordion-summary" id="accordion-payment">
          {/* End .card */}
          <div className="card">
            <div className="card-header" id="heading-3">
              <h2 className="card-title">
                <a
                  className="collapsed"
                  role="button"
                  data-toggle="collapse"
                  href="#collapse-3"
                  aria-expanded="false"
                  aria-controls="collapse-3"
                  value={paymentType}
                  checked={checked}
                  onClick={handleChecked}
                >
                  Cash on delivery
                </a>
              </h2>
            </div>
            {/* End .card-header */}
            <div
              id="collapse-3"
              className="collapse"
              aria-labelledby="heading-3"
              data-parent="#accordion-payment"
            >
              <div className="card-body">Cash on Delivery</div>
              {/* End .card-body */}
            </div>
            {/* End .collapse */}
          </div>
          <div className="mb-3" style={{ color: "red" }}>
            {error}
          </div>
          {/* End .card */}
        </div>
        {/* End .accordion */}
        <button
          type="submit"
          className="btn btn-outline-primary-2 btn-order btn-block"
          onClick={handleClickCheckout}
        >
          <span className="btn-text">Place Order</span>
          <span className="btn-hover-text">Place Order</span>
        </button>
      </div>
      {/* End .summary */}
    </div>
  );
};

export default Bill;
