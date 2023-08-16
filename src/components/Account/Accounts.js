import React from "react";
import TabContent from "./TabContent";
import TabSection from "./TabSection";

const Accounts = () => {
  return (
    <div>
      <div
        className="page-header text-center"
        style={{ backgroundImage: 'url("assets/images/page-header-bg.jpg")' }}
      >
        <div className="container">
          <h1 className="page-title">My Account</h1>
        </div>
        {/* End .container */}
      </div>
      {/* End .page-header */}
      <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              My Account
            </li>
          </ol>
        </div>
        {/* End .container */}
      </nav>
      {/* End .breadcrumb-nav */}

      <div className="page-content">
        <div className="dashboard">
          <div className="container">
            <div className="row">
              <aside className="col-md-4 col-lg-3">
                <TabSection />
              </aside>
              {/* End .col-lg-3 */}
              <div className="col-md-8 col-lg-9">
                <TabContent />
              </div>
              {/* End .col-lg-9 */}
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </div>
        {/* End .dashboard */}
      </div>
      {/* End .page-content */}
    </div>
  );
};

export default Accounts;
