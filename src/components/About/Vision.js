import React from "react";

const Vision = () => {
  return (
    <div>
      <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              About us
            </li>
          </ol>
        </div>
        {/* End .container */}
      </nav>
      {/* End .breadcrumb-nav */}
      <div className="container">
        <div
          className="page-header page-header-big text-center"
          style={{
            backgroundImage: 'url("assets/images/about/about-header.jpg")',
          }}
        >
          <h1 className="page-title text-white">
            About us<span className="text-white">Who we are</span>
          </h1>
        </div>
        {/* End .page-header */}
      </div>
      {/* End .container */}
    </div>
  );
};

export default Vision;
