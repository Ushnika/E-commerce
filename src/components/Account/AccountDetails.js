import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { passwordSchema } from "../Schema";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useThemeAddLoginDetails } from "../../context/ThemeProvider";
import AuthURL from "../../configuration/authUrl";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const AccountDetails = () => {
  const { name, setName, email } = useThemeAddLoginDetails();
  const [values, setValues] = useState({
    current: {
      password: "",
      showPassword: false,
    },
    new: {
      password: "",
      showPassword: false,
    },
    confirm: {
      password: "",
      showPassword: false,
    },
  });
  const formik = useFormik({
    initialValues: {
      current_password: "",
      new_password: "",
      confirm_password: "",
    },
    validationSchema: passwordSchema,
  });
  const navigate = useNavigate();

  const handleClickShowPassword = (stateName) => () => {
    setValues({
      ...values,
      [stateName]: {
        ...values[stateName],
        showPassword: !values[stateName].showPassword,
      },
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("old_password", formik.values.current_password);
    formData.append("new_password", formik.values.new_password);
    formData.append("confirm_password", formik.values.confirm_password);
    formData.append("_method", "PUT");

    AuthURL.post("profile/update-password", formData)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          formik.resetForm();
          toast.success(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        const { status } = error.response;
        if (status === 404) {
          toast.error("Your current password is incorrect. Please try again");
        }
      });
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("_method", "PUT");
    AuthURL.post("profile/update-profile", formData)
      .then((response) => {
        console.log(response);
        toast.success(response.data.message);
        Cookies.set("name", name);
        navigate(0);
      })
      .catch((error) => {});
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-6 accountdetails">
          <div className="card">
            <form action="#">
              <div className="row">
                <div className="col-sm-12">
                  <label>FullName *</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label>Email *</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    defaultValue={email}
                    disabled
                  />
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleUpdateProfile}
                  >
                    <span>Submit</span>
                    <i className="icon-long-arrow-right" />
                  </button>
                </div>
                {/* End .col-sm-6 */}
              </div>
              {/* End .row */}
            </form>
          </div>
        </div>
        <div className="col-md-6 accountdetails">
          <div className="card">
            <form action="#">
              <div className="textfield_icon">
                <label>Current password</label>
                <input
                  type={values.current.showPassword ? "text" : "password"}
                  className={
                    formik.errors.current_password &&
                    formik.touched.current_password
                      ? "input-error form-control"
                      : "form-control"
                  }
                  name="current_password"
                  value={formik.values.current_password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.current_password &&
                  formik.touched.current_password && (
                    <p className="error">{formik.errors.current_password}</p>
                  )}
                <span
                  onClick={handleClickShowPassword("current")}
                  className="eye-icon"
                >
                  {values.current.showPassword ? (
                    <AiFillEyeInvisible />
                  ) : (
                    <AiFillEye />
                  )}
                </span>
              </div>
              <div className="textfield_icon">
                <label>New password</label>
                <input
                  type={values.new.showPassword ? "text" : "password"}
                  className={
                    formik.errors.new_password && formik.touched.new_password
                      ? "input-error form-control"
                      : "form-control"
                  }
                  name="new_password"
                  value={formik.values.new_password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.new_password && formik.touched.new_password && (
                  <p className="error">{formik.errors.new_password}</p>
                )}
                <span
                  onClick={handleClickShowPassword("new")}
                  className="eye-icon"
                >
                  {values.new.showPassword ? (
                    <AiFillEyeInvisible />
                  ) : (
                    <AiFillEye />
                  )}
                </span>
              </div>
              <div className="textfield_icon">
                <label>Confirm new password</label>
                <input
                  type={values.confirm.showPassword ? "text" : "password"}
                  className={
                    formik.errors.confirm_password &&
                    formik.touched.confirm_password
                      ? "input-error form-control"
                      : "form-control"
                  }
                  name="confirm_password"
                  value={formik.values.confirm_password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.confirm_password &&
                  formik.touched.confirm_password && (
                    <p className="error">{formik.errors.confirm_password}</p>
                  )}
                <span
                  onClick={handleClickShowPassword("confirm")}
                  className="eye-icon"
                >
                  {values.confirm.showPassword ? (
                    <AiFillEyeInvisible />
                  ) : (
                    <AiFillEye />
                  )}
                </span>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleUpdate}
              >
                <span>Submit</span>
                <i className="icon-long-arrow-right" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
