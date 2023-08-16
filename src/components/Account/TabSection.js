import Cookies from "js-cookie";
import React from "react";
import { Navigate } from "react-router-dom";

const TabSection = () => {
  const handleLogout = () => {
    Cookies.remove("loginToken");
    Cookies.remove("datas");
    Cookies.remove("access_token");
    Cookies.remove("user");
    Cookies.remove("cart");

    Navigate("/");
  };

  return (
    <div>
      <ul className="nav nav-dashboard flex-column mb-3 mb-md-0" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            id="tab-dashboard-link"
            data-toggle="tab"
            href="#tab-dashboard"
            role="tab"
            aria-controls="tab-dashboard"
            aria-selected="true"
          >
            Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="tab-orders-link"
            data-toggle="tab"
            href="#tab-orders"
            role="tab"
            aria-controls="tab-orders"
            aria-selected="false"
          >
            Orders
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="tab-address-link"
            data-toggle="tab"
            href="#tab-address"
            role="tab"
            aria-controls="tab-address"
            aria-selected="false"
          >
            Addresses
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="tab-account-link"
            data-toggle="tab"
            href="#tab-account"
            role="tab"
            aria-controls="tab-account"
            aria-selected="false"
          >
            Account Details
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/" onClick={handleLogout}>
            Sign Out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TabSection;
