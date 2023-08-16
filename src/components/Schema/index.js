import * as yup from "yup";

const passwordRules = /^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("This field is required"),
  email: yup
    .string()
    .email("Email is required")
    .required("This field is required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, {
      message: "Password should contain 1 uppercase, 1 lowercase and 1 digit",
    })
    .required("This field is required"),
  confirm: yup
    .string()
    .oneOf(
      [yup.ref("password"), null],
      "Password and Confirm Password must match"
    ),
  email1: yup
    .string()
    .email("Email is required")
    .required("This field is required"),
  password1: yup.string().min(5).required("This field is required"),
  code: yup
    .string()
    .required("This field is required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(5, "Must be exactly 5 digits")
    .max(5, "Must be exactly 5 digits"),
});

export const billingSchema = yup.object().shape({
  first_name: yup
    .string()
    .min(3, "Firstname must be at least 3 characters long")
    .required("This field is required"),
  last_name: yup.string().required("This field is required"),
  address_1: yup.string().min(3).required("This field is required"),
  city: yup.string().min(3).required("This field is required"),
  province: yup.string().min(1).required("This field is required"),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Phone Number must be of 10 numbers")
    .max(10, "Phone Number must be of 10 numbers")
    .required("This field is required"),
  postcode: yup.string().required("This field is required"),
});

export const contactSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters long")
    .required("This field is required"),
  email: yup
    .string()
    .email("Email is required")
    .required("This field is required"),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Phone Number must be of 10 numbers")
    .max(10, "Phone Number must be of 10 numbers")
    .required("This field is required"),
  subject: yup
    .string()
    .min(5, "Subject must be at least 5 characters long")
    .required("This field is required"),
  message: yup
    .string()
    .min(3, "Message must be at least 3 characters long")
    .required("This field is required"),
});

export const passwordSchema = yup.object().shape({
  current_password: yup.string().min(5).required("This field is required"),
  new_password: yup
    .string()
    .min(5)
    .matches(passwordRules, {
      message: "Password should contain 1 uppercase, 1 lowercase and 1 digit",
    })
    .required("This field is required"),
  confirm_password: yup
    .string()
    .oneOf(
      [yup.ref("new_password"), null],
      "Password and Confirm Password must match"
    )
    .required("This field is required"),
});
