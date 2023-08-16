import React, { useEffect } from "react";
import AuthURL from "../../configuration/authUrl";

const BillingDetails = ({ formik }) => {
  // const { values, touched, errors, handleBlur, handleChange } = useFormik({
  //   initialValues: details,
  //   validationSchema: billingSchema,
  // });

  const getCheckingDetails = () => {
    AuthURL.get("billing/details")
      .then((response) => {
        console.log(response.data.data.billing_detail);
        const { billing_detail } = response.data.data;
        console.log(billing_detail);
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
  };
  useEffect(() => {
    getCheckingDetails();
  }, []);

  // const handleValueChange = (e) => {
  //   setDetails({ ...details, [e.target.name]: e.target.value });
  // };

  return (
    <div>
      <h2 className="checkout-title">Billing Details</h2>
      {/* End .checkout-title */}
      <div className="row">
        <div className="col-sm-6 billing_textfield">
          <label>First Name *</label>
          <input
            type="text"
            name="first_name"
            className={
              formik.errors.first_name && formik.touched.first_name
                ? "input-error form-control"
                : "form-control"
            }
            required
            onChange={formik.handleChange}
            value={formik.values.first_name}
            onBlur={formik.handleBlur}
          />
          {formik.errors.first_name && formik.touched.first_name && (
            <p className="error">{formik.errors.first_name}</p>
          )}
        </div>
        {/* End .col-sm-6 */}
        <div className="col-sm-6 billing_textfield">
          <label>Last Name *</label>
          <input
            type="text"
            name="last_name"
            className="form-control"
            required
            onChange={formik.handleChange}
            value={formik.values.last_name}
            onBlur={formik.handleBlur}
          />
          {formik.errors.last_name && formik.touched.last_name && (
            <p className="error">{formik.errors.last_name}</p>
          )}
        </div>
      </div>
      <div className="billing_textfield">
        <label>Street address 1 *</label>
        <input
          type="text"
          className="form-control"
          placeholder="House number and Street name"
          name="address_1"
          required
          onChange={formik.handleChange}
          value={formik.values.address_1}
          onBlur={formik.handleBlur}
        />
        {formik.errors.address_1 && formik.touched.address_1 && (
          <p className="error">{formik.errors.address_1}</p>
        )}
      </div>
      <div className="billing_textfield">
        <label>Street address 2 (Optional)</label>
        <input
          type="text"
          className="form-control"
          placeholder="Appartments, suite, unit etc ..."
          name="address_2"
          required
          onChange={formik.handleChange}
          value={formik.values.address_2}
          onBlur={formik.handleBlur}
        />
        {formik.errors.address_2 && formik.touched.address_2 && (
          <p className="error">{formik.errors.address_2}</p>
        )}
      </div>
      <div className="row">
        <div className="col-sm-6 billing_textfield">
          <label>Town / City *</label>
          <input
            type="text"
            className="form-control"
            required
            name="city"
            onChange={formik.handleChange}
            value={formik.values.city}
            onBlur={formik.handleBlur}
          />
          {formik.errors.city && formik.touched.city && (
            <p className="error">{formik.errors.city}</p>
          )}
        </div>
        {/* End .col-sm-6 */}
        <div className="col-sm-6 billing_textfield">
          <label>Landmark (Optional)</label>
          <input
            type="text"
            className="form-control"
            name="landmark"
            onChange={formik.handleChange}
            placeholder="Near Kalimati bus station"
            value={formik.values.landmark}
            onBlur={formik.handleBlur}
          />
        </div>
        {/* End .col-sm-6 */}
      </div>
      <div className="row">
        <div className="col-sm-6 billing_textfield">
          <label>Province *</label>
          <input
            type="text"
            className="form-control"
            required
            name="province"
            onChange={formik.handleChange}
            value={formik.values.province}
            onBlur={formik.handleBlur}
          />
          {formik.errors.province && formik.touched.province && (
            <p className="error">{formik.errors.province}</p>
          )}
        </div>
        {/* End .col-sm-6 */}
        <div className="col-sm-6 billing_textfield">
          <label>Phone *</label>
          <input
            type="text"
            className="form-control"
            required
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            onBlur={formik.handleBlur}
          />
          {formik.errors.phone && formik.touched.phone && (
            <p className="error">{formik.errors.phone}</p>
          )}
        </div>
      </div>
      <div className="billing_textfield">
        <label>Postcode *</label>
        <input
          type="text"
          className="form-control"
          required
          name="postcode"
          onChange={formik.handleChange}
          value={formik.values.postcode}
          onBlur={formik.handleBlur}
        />
        {formik.errors.postcode && formik.touched.postcode && (
          <p className="error">{formik.errors.postcode}</p>
        )}
      </div>
    </div>
  );
};

export default BillingDetails;
