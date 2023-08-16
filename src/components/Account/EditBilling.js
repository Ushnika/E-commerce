import React, { useState, useEffect } from "react";
import BillingDetails from "../Checkout/BillingDetails";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { billingSchema } from "../Schema";
import AuthURL from "../../configuration/authUrl";

const EditBilling = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
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
  const formik = useFormik({
    initialValues: details,
    validationSchema: billingSchema,
  });

  console.log(formik.values);

  useEffect(() => {
    AuthURL.get("billing/details")
      .then((response) => {
        console.log(response.data.data.billing_detail);
        const { billing_detail } = response.data.data;
        const keys = Object.keys(billing_detail);
        console.log(keys);
        keys.forEach((key) => formik.setFieldValue(key, billing_detail[key]));
      })
      .catch((error) => {
        const { status, data } = error.response;
        console.log(status);
        if (status === 404) {
          console.log(data);
          // toast.error(data.message);
        }
      });
  }, [formik]);

  const handleClickCheckout = (e) => {
    e.preventDefault();
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

    AuthURL.post("billing/update", formData)
      .then((response) => {
        setDetails(response.data.data.billing_detail);
        // setOrderDetail(orderResponse.data.data.orders);
        setDetails({
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
        navigate("/myaccount");
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div
        className="page-header text-center"
        style={{ backgroundImage: 'url("assets/images/page-header-bg.jpg")' }}
      >
        <div className="container">
          <h1 className="page-title">
            Edit<span>Billing</span>
          </h1>
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
            <li className="breadcrumb-item">
              <a href="/shop">Shop</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Checkout
            </li>
          </ol>
        </div>
        {/* End .container */}
      </nav>
      {/* End .breadcrumb-nav */}
      <div className="page-content">
        <div className="checkout">
          <div className="container">
            {/* <div className="checkout-discount">
              <form action="#">
                <input
                  type="text"
                  className="form-control"
                  required
                  id="checkout-discount-input"
                />
                <label
                  htmlFor="checkout-discount-input"
                  className="text-truncate"
                >
                  Have a coupon? <span>Click here to enter your code</span>
                </label>
              </form>
            </div> */}
            {/* End .checkout-discount */}
            <form action="#">
              <div className="row">
                <div className="col-lg-12">
                  <BillingDetails
                    details={details}
                    setDetails={setDetails}
                    formik={formik}
                  />
                  <button
                    type="submit"
                    className="btn btn-primary btn-order btn-block"
                    onClick={handleClickCheckout}
                  >
                    Edit Billing Address
                  </button>
                </div>
              </div>
              {/* End .row */}
            </form>
          </div>
          {/* End .container */}
        </div>
        {/* End .checkout */}
      </div>
      {/* End .page-content */}
    </div>
  );
};

export default EditBilling;
