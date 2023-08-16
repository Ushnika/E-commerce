import React, { useCallback, useEffect, useState } from "react";
import { useFormik } from "formik";
import { contactSchema } from "../Schema";
import API from "../../configuration/config";
import { toast } from "react-toastify";
import authURL from "../../configuration/authUrl";
import moment from "moment";

const ContactInfo = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: contactSchema,
  });
  const [details, setDetails] = useState([]);

  const getDetails = useCallback(() => {
    const names = [
      "company_name",
      "street_address",
      "city",
      "opening_days",
      "opening_hours",
      "closing_hours",
      "company_number",
      "additional_opening_days",
      "additional_opening_hours",
      "additional_closing_hours",
      "company_email",
      "default_email",
    ];
    const formData = new FormData();
    names.forEach((name) => {
      formData.append("names[]", name);
    });
    authURL
      .post("/system-settings/get", formData)
      .then((response) => {
        if (response.status === 200) {
          const data = response.data.data.system_settings;
          setDetails(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(details);

  useEffect(() => {
    getDetails();
  }, [getDetails]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", formik.values.name);
    formData.append("email", formik.values.email);
    formData.append("phone", formik.values.phone);
    formData.append("subject", formik.values.subject);
    formData.append("message", formik.values.message);

    API.post("/contact-us", formData)
      .then((response) => {
        formik.resetForm();
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Contact us
            </li>
          </ol>
        </div>
        {/* End .container */}
      </nav>
      {/* End .breadcrumb-nav */}
      <div className="container">
        <div
          className="page-header page-header-big text-center"
          style={{
            backgroundImage: 'url("assets/images/contact/contact-header.jpg")',
          }}
        >
          <h1 className="page-title text-white">
            Contact us<span className="text-white">keep in touch with us</span>
          </h1>
        </div>
        {/* End .page-header */}
      </div>
      {/* End .container */}

      {/* Start of contact info and form */}
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-2 mb-lg-0">
            <h2 className="title mb-1">Contact Information</h2>
            {/* End .title mb-2 */}
            {/* <p className="mb-3">
              Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
              dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
              dapibus eu, fermentum et, dapibus sed, urna.
            </p> */}
            <div className="row">
              <div className="col-sm-7">
                <div className="contact-info">
                  {/* Company heading */}
                  <h3>
                    {details.find((item) => item?.name === "company_name")
                      ?.settings || "The Office"}
                  </h3>
                  <ul className="contact-list">
                    {/* Company address */}
                    <li>
                      <i className="icon-map-marker" />
                      {details.find((item) => item?.name === "street_address")
                        ?.settings +
                        ", " +
                        details.find((item) => item?.name === "city")
                          ?.settings || "Street address, City"}
                    </li>
                    {/* Opening section */}
                    <li>
                      <i className="icon-clock-o" />
                      <span>
                        {details.find((item) => item?.name === "opening_days")
                          ?.settings || "Opening days"}
                      </span>
                      <br />
                      {/* using moment js to convert the acquired time to am/pm format */}
                      {moment(
                        details.find((item) => item?.name === "opening_hours")
                          ?.settings,
                        "hh:mm"
                      ).format("hh:mm a") +
                        "-" +
                        moment(
                          details.find((item) => item?.name === "closing_hours")
                            ?.settings,
                          "hh:mm"
                        ).format("hh:mm a") || "Opening Hours"}
                    </li>
                    {/* additional opening section */}
                    <li>
                      <i className="icon-calendar" />
                      <span>
                        {details.find(
                          (item) => item?.name === "additional_opening_days"
                        )?.settings || "Additional days"}
                      </span>
                      <br />
                      {/* using moment js to convert the acquired time to am/pm format */}
                      {moment(
                        details.find(
                          (item) => item?.name === "additional_opening_hours"
                        )?.settings,
                        "hh:mm"
                      ).format("hh:mm a") +
                        "-" +
                        moment(
                          details.find(
                            (item) => item?.name === "additional_closing_hours"
                          )?.settings,
                          "hh:mm"
                        ).format("hh:mm a") || "Additional hours"}
                    </li>
                    {/* company number */}
                    <li>
                      <i className="icon-phone" />
                      <a href="tel:#">
                        {details.find((item) => item?.name === "company_number")
                          ?.settings || "Phone No"}
                      </a>
                    </li>
                    {/* company email */}
                    <li>
                      <i className="icon-envelope" />
                      <a href="tel:#">
                        {details.find((item) => item?.name === "company_email")
                          ?.settings || "Email"}
                      </a>
                    </li>
                  </ul>
                  {/* End .contact-list */}
                </div>
                {/* End .contact-info */}
              </div>
            </div>
            {/* End .row */}
          </div>
          <div className="col-lg-6">
            <h2 className="title mb-1">Got Any Questions?</h2>
            <p className="mb-2">
              Use the form below to get in touch with the sales team
            </p>
            <form action="#" className="contact-form mb-3">
              <div className="row">
                <div className="col-sm-6">
                  <label htmlFor="cname" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control my-3"
                    name="name"
                    placeholder="Name *"
                    required
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.name && formik.touched.name && (
                    <p className="error">{formik.errors.name}</p>
                  )}
                </div>
                <div className="col-sm-6">
                  <label htmlFor="cemail" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control my-3"
                    name="email"
                    placeholder="Email *"
                    required
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <p className="error">{formik.errors.email}</p>
                  )}
                </div>
              </div>
              {/* End .row */}
              <div className="row">
                <div className="col-sm-6">
                  <label htmlFor="cphone" className="sr-only">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="form-control my-3"
                    name="phone"
                    placeholder="Phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.phone && formik.touched.phone && (
                    <p className="error">{formik.errors.phone}</p>
                  )}
                </div>
                <div className="col-sm-6">
                  <label htmlFor="csubject" className="sr-only">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control my-3"
                    name="subject"
                    placeholder="Subject"
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.subject && formik.touched.subject && (
                    <p className="error">{formik.errors.subject}</p>
                  )}
                </div>
              </div>
              {/* End .row */}
              <label htmlFor="cmessage" className="sr-only">
                Message
              </label>
              <textarea
                className="form-control my-3"
                cols={30}
                rows={4}
                name="message"
                required
                placeholder="Message *"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.message && formik.touched.message && (
                <p className="error">{formik.errors.message}</p>
              )}
              <button
                type="submit"
                className="btn btn-outline-primary-2 btn-minwidth-sm"
                onClick={handleSubmit}
              >
                <span>SUBMIT</span>
                <i className="icon-long-arrow-right" />
              </button>
            </form>
            {/* End .contact-form */}
          </div>
          {/* End .col-lg-6 */}
        </div>
        {/* End .row */}
        <hr className="mt-4 mb-5" />
      </div>
      {/* End of contact info and form */}
    </div>
  );
};

export default ContactInfo;
