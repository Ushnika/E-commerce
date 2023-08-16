import React, { createContext, useContext, useState, useEffect } from "react";
import { useFormik } from "formik";
import { basicSchema } from "../Schema";
const ResetAuthTheme = createContext();

export const useResetAuthTheme = () => {
  return useContext(ResetAuthTheme);
};

export const ResetPasswordThemeProvider = ({ children }) => {
  const [savedEmail, setSavedEmail] = useState("");
  const [savedCode, setSavedCode] = useState("");
  const { values, touched, errors, handleBlur, handleChange } = useFormik({
    initialValues: {
      email: "",
      code: "",
      password: "",
      confirm: "",
    },
    validationSchema: basicSchema,
  });

  useEffect(() => {
    setSavedEmail(values.email);
  }, [values.email]);

  return (
    <ResetAuthTheme.Provider
      value={{
        savedEmail,
        setSavedEmail,
        savedCode,
        setSavedCode,
        values,
        touched,
        errors,
        handleBlur,
        handleChange,
      }}
    >
      {children}
    </ResetAuthTheme.Provider>
  );
};

export default ResetPasswordThemeProvider;
