import React, { useEffect, useState, useCallback } from "react";
import API from "../../configuration/config";
import { useFormik } from "formik";
import { basicSchema } from "../Schema";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-bootstrap/Modal";
import { useThemeAuth } from "../../context/ThemeProvider";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import authURL from "../../configuration/authUrl";

const TopNavbar = () => {
  const { show, setShow } = useThemeAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const { values, touched, errors, handleBlur, handleChange } = useFormik({
    initialValues: {
      //for register
      name: "",
      email: "",
      password: "",
      confirm: "",
      //for login
      email1: "",
      password1: "",
    },
    validationSchema: basicSchema,
  });
  const navigate = useNavigate();
  const [number, setNumber] = useState("");

  const getNumber = useCallback(() => {
    const names = ["company_number"];
    const formData = new FormData();
    names.forEach((name) => {
      formData.append("names[]", name);
    });
    authURL
      .post("/system-settings/get", formData)
      .then((response) => {
        if (response.status === 200) {
          const data = response.data.data.system_settings;
          data.forEach((item) => {
            setNumber(item.settings);
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getNumber();
  }, [getNumber]);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleClickShowLoginPassword = () => {
    setShowLoginPassword(!showLoginPassword);
  };
  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("c_password", values.confirm);
    API.post("/registerUser", formData)
      .then((response) => {
        if (response.status === 200) {
          const expires = new Date();
          expires.setDate(expires.getDate() + 1);
          Cookies.set("loginToken", response.data.data.token, {
            expires: expires,
          });
          setShow(false);
          toast.success(response.data.message);
          navigate(0);
        }
      })
      .catch((error) => {
        const { status, data } = error.response;
        if (status === 404) {
          // setLoading(false);
          const errors = data.data.email[0];
          toast.error(errors);
        }
      });
    // }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("email", values.email1);
    formData.append("password", values.password1);
    API.post("/loginUser", formData)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.data);
          const expires = new Date();
          expires.setDate(expires.getDate() + 1);
          // expires.setTime(expires.getTime() + 1 * 3600 * 1000);
          Cookies.set("loginToken", response.data.data.token, {
            expires: expires,
          });
          sessionStorage.setItem("loginToken", response.data.data.token);
          setShow(false);
          toast.success(response.data.message);
          navigate(0);
        }
      })
      .catch((error) => {
        const { status, data } = error.response;
        if (status === 404) {
          toast.error(data.data.error);
          const errors = data.data.email[0];
          toast.error(errors);
        }
      });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShow(false);
    // setDelShow(false);
  };
  return (
    <div>
      <div>
        <div className="container">
          <div className="header-left">
            <a href="tel:#">
              <i className="icon-phone"></i>Call: {number}
            </a>
          </div>
          {/* End .header-left */}
          <div className="header-right">
            <ul className="top-menu">
              <li>
                <ul>
                  {Cookies.get("loginToken") ? (
                    <li>
                      <p>{Cookies.get("name")}</p>
                    </li>
                  ) : (
                    <li>
                      <a
                        href="#signin-modal"
                        data-toggle="modal"
                        onClick={() => setShow(true)}
                      >
                        Sign in / Sign up
                      </a>
                    </li>
                  )}
                </ul>
              </li>
            </ul>
            {/* End .top-menu */}
          </div>
          {/* End .header-right */}
        </div>
      </div>
      {/* Sign in / Register Modal */}
      <Modal
        show={show}
        fullscreen
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <div className="modal-body">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={handleClose}
            >
              <span aria-hidden="true">
                <i className="icon-close" />
              </span>
            </button>
            <div className="form-box">
              <div className="form-tab">
                <ul className="nav nav-pills nav-fill" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="signin-tab"
                      data-toggle="tab"
                      href="#signin"
                      role="tab"
                      aria-controls="signin"
                      aria-selected="true"
                    >
                      Sign In
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="register-tab"
                      data-toggle="tab"
                      href="#register"
                      role="tab"
                      aria-controls="register"
                      aria-selected="false"
                    >
                      Register
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="tab-content-5">
                  <div
                    className="tab-pane fade show active"
                    id="signin"
                    role="tabpanel"
                    aria-labelledby="signin-tab"
                  >
                    <form action="#">
                      <div className="form-group">
                        <label htmlFor="singin-email">Email</label>
                        <input
                          type="email"
                          className={
                            errors.email1 && touched.email1
                              ? "input-error form-control"
                              : "form-control"
                          }
                          name="email1"
                          required
                          value={values.email1}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.email1 && touched.email1 && (
                          <p className="error">{errors.email1}</p>
                        )}
                      </div>
                      {/* End .form-group */}
                      <div className="form-group textfield_icon">
                        <label htmlFor="singin-password">Password *</label>
                        <input
                          type={showLoginPassword ? "text" : "password"}
                          className={
                            errors.password1 && touched.password1
                              ? "input-error form-control"
                              : "form-control"
                          }
                          name="password1"
                          required
                          value={values.password1}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.password1 && touched.password1 && (
                          <p className="error">{errors.password1}</p>
                        )}
                        <span
                          onClick={handleClickShowLoginPassword}
                          className="eye-icon"
                        >
                          {showLoginPassword ? (
                            <AiFillEyeInvisible />
                          ) : (
                            <AiFillEye />
                          )}
                        </span>
                      </div>
                      {/* End .form-group */}
                      <div className="form-footer">
                        <div className="footer-part">
                          <button
                            type="submit"
                            className="btn btn-outline-primary-2"
                            onClick={handleLogin}
                          >
                            <span>LOG IN</span>
                            <i className="icon-long-arrow-right" />
                          </button>
                        </div>
                        <div className="form-footer-part">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="signin-remember"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="signin-remember"
                            >
                              Remember Me
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                          <a
                            href="/user/forget-password"
                            className="forgot-link"
                          >
                            Forgot Your Password?
                          </a>
                        </div>
                      </div>
                      {/* End .form-footer */}
                    </form>
                    {/* <div className="form-choice">
                      <p className="text-center">or sign in with</p>
                      <div className="row">
                        <div className="col-sm-6">
                          <a href="#" className="btn btn-login btn-g">
                            <i className="icon-google" />
                            Login With Google
                          </a>
                        </div>
                        <div className="col-sm-6">
                          <LoginSocialFacebook
                            appId="1847225392291514"
                            onResolve={(response) => {
                              sessionStorage.setItem(
                                "access_token",
                                response.data.accessToken
                              );
                              sessionStorage.setItem(
                                "user",
                                response.data.name
                              );
                              window.location.reload(true);
                            }}
                            onReject={(error) => {
                              console.log(error);
                            }}
                          >
                            <a href="#" className="btn btn-login btn-f">
                              <i className="icon-facebook-f" />
                              Login With Facebook
                            </a>
                          </LoginSocialFacebook>
                        </div>
                      </div>
                    </div> */}
                    {/* End .form-choice */}
                  </div>
                  {/* .End .tab-pane */}
                  <div
                    className="tab-pane fade"
                    id="register"
                    role="tabpanel"
                    aria-labelledby="register-tab"
                  >
                    <form action="#">
                      <div className="form-group">
                        <label htmlFor="singin-email">Full Name</label>
                        <input
                          type="name"
                          className={
                            errors.name && touched.name
                              ? "input-error form-control"
                              : "form-control"
                          }
                          // className="form-control"
                          name="name"
                          required
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.name && touched.name && (
                          <p className="error">{errors.name}</p>
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="singin-email">Email</label>
                        <input
                          type="email"
                          className={
                            errors.email && touched.email
                              ? "input-error form-control"
                              : "form-control"
                          }
                          name="email"
                          required
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.email && touched.email && (
                          <p className="error">{errors.email}</p>
                        )}
                      </div>
                      {/* End .form-group */}
                      <div className="form-group textfield_icon">
                        <label htmlFor="singin-password">Password *</label>
                        <input
                          type={showPassword ? "text" : "password"}
                          className={
                            errors.password && touched.password
                              ? "input-error form-control"
                              : "form-control"
                          }
                          name="password"
                          required
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.password && touched.password && (
                          <p className="error">{errors.password}</p>
                        )}
                        <span
                          onClick={handleClickShowPassword}
                          className="eye-icon"
                        >
                          {showPassword ? (
                            <AiFillEyeInvisible />
                          ) : (
                            <AiFillEye />
                          )}
                        </span>
                      </div>
                      {/* End .form-group */}
                      <div className="form-group textfield_icon">
                        <label htmlFor="singin-password">
                          Confirm Password *
                        </label>
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          className={
                            errors.confirm && touched.confirm
                              ? "input-error form-control"
                              : "form-control"
                          }
                          name="confirm"
                          required
                          value={values.confirm}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.confirm && touched.confirm && (
                          <p className="error">{errors.confirm}</p>
                        )}
                        <span
                          onClick={handleClickShowConfirmPassword}
                          className="eye-icon"
                        >
                          {showConfirmPassword ? (
                            <AiFillEyeInvisible />
                          ) : (
                            <AiFillEye />
                          )}
                        </span>
                      </div>
                      <div className="register-btn mb-3">
                        <button
                          // disabled={isSubmitting}
                          type="submit"
                          className="btn btn-outline-primary-2"
                          onClick={handleSubmit}
                        >
                          <span>REGISTER</span>
                          <i className="icon-long-arrow-right" />
                        </button>
                      </div>
                      {/* End .form-group */}
                    </form>
                    {/* <div className="form-choice">
                      <p className="text-center">or sign in with</p>
                      <div className="row">
                        <div className="col-sm-6">
                          <a href="#" className="btn btn-login btn-g">
                            <i className="icon-google" />
                            Login With Google
                          </a>
                        </div>
                        <div className="col-sm-6">
                          <a href="#" className="btn btn-login  btn-f">
                            <i className="icon-facebook-f" />
                            Login With Facebook
                          </a>
                        </div>
                      </div>
                    </div> */}
                    {/* End .form-choice */}
                  </div>
                </div>
              </div>
            </div>
            {/* End .form-box */}
          </div>
        </Modal.Body>
      </Modal>
      {/* End .container */}
    </div>
  );
};

export default TopNavbar;
