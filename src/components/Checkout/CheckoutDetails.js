import React, { useState, useRef } from "react";
import BillingDetails from "./BillingDetails";
import Bill from "./Bill";
import { useFormik } from "formik";
import { billingSchema } from "../Schema";

const CheckoutDetails = () => {
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
  const form = useRef();

  return (
    <div>
      <div
        className="page-header text-center"
        style={{ backgroundImage: 'url("assets/images/page-header-bg.jpg")' }}
      >
        <div className="container">
          <h1 className="page-title">
            Checkout<span>Shop</span>
          </h1>
        </div>
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
      <div className="page-content">
        <div className="checkout">
          <div className="container">
            <form action="#" ref={form}>
              <div className="row">
                <div className="col-lg-9">
                  <BillingDetails formik={formik} setDetails={setDetails} />
                </div>
                <aside className="col-lg-3">
                  <Bill formik={formik} setDetails={setDetails} form={form} />
                </aside>
              </div>
            </form>
          </div>
        </div>
        {/* End .checkout */}
      </div>
      {/* End .page-content */}
    </div>
  );
};

export default CheckoutDetails;
