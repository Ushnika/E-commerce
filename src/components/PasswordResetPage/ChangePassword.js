import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import API from "../../configuration/config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useResetAuthTheme } from "./ResetPasswordThemeProvider";
import { useThemeAuth } from "../../context/ThemeProvider";
import Loading from "../Elements/Loading";
import Cookies from "js-cookie";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { setShow } = useThemeAuth();
  const { values, touched, errors, handleBlur, handleChange } =
    useResetAuthTheme();
  const navigate = useNavigate("");
  const [loading, setLoading] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const email = Cookies.get("email");
  const reset_token = Cookies.get("reset-token");

  const resetPassword = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("email", email);
    formData.append("token", reset_token);
    formData.append("password", values.password);
    API.post("/user/forgot-password/token/change-password", formData)
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          toast.success(response.data.message);
          setLoading(false);
          Cookies.remove("email");
          Cookies.remove("reset-token");
          navigate("/");
          setShow(true);
        }
      })
      .catch((error) => {
        const { status, data } = error.response;
        if (status === 404) {
          setLoading(false);
          toast.error(data.message);
        }
      });
  };
  return (
    <div className="page-content">
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          {/* <div className="password-card"> */}
          <div className="d-flex flex-row justify-content-around mt-5 mx-5">
            <div className="featured-image d-md-block d-none">
              <img
                src="/assets/images/gif/password.png"
                alt="gifImg"
                width={350}
              />
            </div>
            <div className="auth-container">
              <h6 className="mt-5 mb-3">Please reset your password</h6>
              <label>Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email address"
                value={email}
                disabled
              />
              <div className="textfield_icon">
                <label>Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className={
                    errors.password && touched.password
                      ? "input-error form-control"
                      : "form-control"
                  }
                  placeholder="Password"
                  width={500}
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span onClick={handleClickShowPassword} className="eye-icon">
                  {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </span>
                {errors.password && touched.password && (
                  <p className="error mb-3">{errors.password}</p>
                )}
              </div>
              <div className="textfield_icon">
                <label>Confirm Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className={
                    errors.confirm && touched.confirm
                      ? "input-error form-control"
                      : "form-control"
                  }
                  placeholder="Confirm your Password "
                  name="confirm"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span onClick={handleClickShowPassword} className="eye-icon">
                  {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </span>
                {errors.confirm && touched.confirm && (
                  <p className="error mb-3">{errors.confirm}</p>
                )}
              </div>
              <button className="btn btn-primary" onClick={resetPassword}>
                Reset Password
              </button>
            </div>
          </div>
          {/* </div> */}
        </div>
      )}
    </div>
  );
};

export default ChangePassword;
