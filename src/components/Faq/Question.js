import React from "react";
import { AccordianData } from "../../data/AccordianData";

const Question = () => {
  const ShippingDetail = [];
  const OrderDetail = [];
  const PaymentDetail = [];

  Types(AccordianData);

  function Types(data) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].faqHeading === "Shipping Information")
        ShippingDetail.push(data[i]);
      if (data[i].faqHeading === "Orders and Returns")
        OrderDetail.push(data[i]);
      if (data[i].faqHeading === "Payments") PaymentDetail.push(data[i]);
    }
  }
  return (
    <div>
      {/* End .page-header */}
      <nav aria-label="breadcrumb" className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              FAQ
            </li>
          </ol>
        </div>
        {/* End .container */}
      </nav>
      {/* End .breadcrumb-nav */}

      <div className="page-content">
        <div className="container">
          {/* Shipping Questions */}
          <h2 className="title text-center mb-3">Shipping Information</h2>
          {/* End .title */}
          <div className="accordion accordion-rounded" id="accordion-1">
            {ShippingDetail.map((list, i) => {
              return (
                <div key={i}>
                  <div className="card card-box card-sm bg-light">
                    <div className="card-header" id={list.headerID}>
                      <h2 className="card-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          href={list.href}
                          aria-expanded="false"
                          aria-controls={list.ariaControls}
                        >
                          {list.question}
                        </a>
                      </h2>
                    </div>
                    {/* End .card-header */}
                    <div
                      id={list.answerID}
                      className="collapse"
                      aria-labelledby={list.aria}
                      data-parent={list.data}
                    >
                      <div className="card-body">{list.answer}</div>
                      {/* End .card-body */}
                    </div>
                    {/* End .collapse */}
                  </div>
                </div>
              );
            })}
            {/* End .card */}
          </div>
          {/* End .accordion */}

          {/* Orders and Returns Questions */}
          <h2 className="title text-center mb-3">Orders and Returns</h2>
          {/* End .title */}
          <div className="accordion accordion-rounded" id="accordion-2">
            {OrderDetail.map((list) => {
              return (
                <>
                  <div className="card card-box card-sm bg-light">
                    <div className="card-header" id={list.headerID}>
                      <h2 className="card-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          href={list.href}
                          aria-expanded="false"
                          aria-controls={list.ariaControls}
                        >
                          {list.question}
                        </a>
                      </h2>
                    </div>
                    {/* End .card-header */}
                    <div
                      id={list.answerID}
                      className="collapse"
                      aria-labelledby={list.aria}
                      data-parent={list.data}
                    >
                      <div className="card-body">{list.answer}</div>
                      {/* End .card-body */}
                    </div>
                    {/* End .collapse */}
                  </div>
                </>
              );
            })}
            {/* End .card */}
          </div>
          {/* End .accordion */}

          {/* Payments Questions */}
          <h2 className="title text-center mb-3">Payments</h2>
          {/* End .title */}
          <div className="accordion accordion-rounded" id="accordion-3">
            {ShippingDetail.map((list) => {
              return (
                <>
                  <div className="card card-box card-sm bg-light">
                    <div className="card-header" id={list.headerID}>
                      <h2 className="card-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          href={list.href}
                          aria-expanded="false"
                          // aria-controls={list.ariaControls}
                        >
                          {list.question}
                        </a>
                      </h2>
                    </div>
                    {/* End .card-header */}
                    <div
                      id={list.answerID}
                      className="collapse"
                      aria-labelledby={list.aria}
                      data-parent={list.data}
                    >
                      <div className="card-body">{list.answer}</div>
                      {/* End .card-body */}
                    </div>
                    {/* End .collapse */}
                  </div>
                </>
              );
            })}
            {/* End .card */}
          </div>
        </div>
        {/* End .container */}
      </div>
      {/* End .page-content --*/}
      <div
        className="cta cta-display bg-image pt-4 pb-4"
        style={{
          backgroundImage: "url(assets/images/backgrounds/cta/bg-7.jpg)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-9 col-xl-7">
              <div className="row no-gutters flex-column flex-sm-row align-items-sm-center">
                <div className="col">
                  <h3 className="cta-title text-white">
                    If You Have More Questions
                  </h3>
                  {/* End .cta-title */}
                  <p className="cta-desc text-white">
                    Quisque volutpat mattis eros
                  </p>
                  {/* End .cta-desc */}
                </div>
                {/* End .col */}
                <div className="col-auto">
                  <a href="/contact" className="btn btn-outline-white">
                    <span>CONTACT US</span>
                    <i className="icon-long-arrow-right" />
                  </a>
                </div>
                {/* End .col-auto */}
              </div>
              {/* End .row no-gutters */}
            </div>
            {/* End .col-md-10 col-lg-9 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </div>
      {/* End .cta */}
      <div className="mb-4" />
    </div>
  );
};

export default Question;
