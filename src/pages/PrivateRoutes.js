import Cookies from "js-cookie";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  let auth = { token: Cookies.get("loginToken") };
  // let token = localStorage.getItem("loginToken");
  return auth.token ? (
    <Outlet />
  ) : (
    <div>
      <Navigate to="/" />
    </div>
  );
};

export default PrivateRoutes;
