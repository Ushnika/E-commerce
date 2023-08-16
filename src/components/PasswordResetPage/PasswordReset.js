import React from "react";
import API from "../../configuration/config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useResetAuthTheme } from "./ResetPasswordThemeProvider";
import { useState } from "react";
import Loading from "../Elements/Loading";
import Cookies from "js-cookie";

const PasswordReset = () => {
  const navigate = useNavigate();
  const { values, touched, errors, handleBlur, handleChange } =
    useResetAuthTheme();
  const [loading, setLoading] = useState(false);

  const sendEmail = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("email", values.email);
    API.post("/user/forgot-password", formData)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          toast.success(response.data.message);
          setLoading(false);
          navigate("/user/verification");
          sessionStorage.setItem("email", values.email);
          Cookies.setItem("email", values.email);
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
          <div className="d-flex flex-row justify-content-around mt-5">
            <div className="d-md-block d-none">
              <img
                src="/assets/images/gif/password.png"
                alt="gifImg"
                width={350}
              />
            </div>
            <div>
              <h4 className="mt-5 mb-3">Forgot your password?</h4>
              <h6 className="mt-5 mb-3">
                Please enter the account that you want to reset the password.
              </h6>
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                className={
                  errors.email && touched.email
                    ? "input-error form-control"
                    : "form-control"
                }
                placeholder="Enter your email address"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <p className="error mb-3">{errors.email}</p>
              )}
              <button className="btn btn-primary rounded" onClick={sendEmail}>
                Send Verification Code
              </button>
            </div>
          </div>
          {/* </div> */}
        </div>
      )}
    </div>
  );
};

export default PasswordReset;
