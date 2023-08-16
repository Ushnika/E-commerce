import React, { useState } from "react";
import API from "../../configuration/config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useResetAuthTheme } from "./ResetPasswordThemeProvider";
import Loading from "../Elements/Loading";
import Cookies from "js-cookie";

const EmailVerification = () => {
  const { values, touched, errors, handleBlur, handleChange } =
    useResetAuthTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const email = Cookies.get("email");

  const verifyToken = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("email", email);
    formData.append("token", values.code);
    API.post("/user/forgot-password/token-check", formData)
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          toast.success(response.data.message);
          setLoading(false);
          navigate("/user/reset-password");
          sessionStorage.setItem("reset-token", values.code);
          Cookies.set("reset-token", values.code);
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
          <div className="d-flex flex-row yjustify-content-center mt-5">
            <div className="featured-image d-md-block d-none">
              <img
                src="/assets/images/gif/password.png"
                alt="gifImg"
                width={350}
              />
            </div>
            <div>
              <h6 className="auth-container mt-5 mb-3">
                We will send a code/token to your Email
              </h6>
              <input
                type="email"
                className="form-control"
                value={email}
                placeholder="Enter your email address"
                disabled
              />
              <input
                type="number"
                className={
                  errors.code && touched.code
                    ? "input-error form-control"
                    : "form-control"
                }
                placeholder="Verification Code"
                name="code"
                value={values.code}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.code && touched.code && (
                <p className="error mb-3">{errors.code}</p>
              )}
              <button className="btn btn-primary rounded" onClick={verifyToken}>
                Verify Code
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailVerification;
