import React from "react";
import Filter from "./Filter";
import Products from "./Products";

const ShopProducts = () => {
  return (
    <div>
      <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Shop
            </li>
          </ol>
        </div>
        {/* End .container */}
      </nav>
      {/* End .breadcrumb-nav */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <Products />
            </div>
            {/* End .col-lg-9 */}
            <aside className="col-lg-3 order-lg-first">
              <Filter />
              {/* End .sidebar sidebar-shop */}
            </aside>
            {/* End .col-lg-3 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </div>
      {/* End .page-content */}
    </div>
  );
};

export default ShopProducts;
