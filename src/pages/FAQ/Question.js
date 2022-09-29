import React from "react";
import { AccordianData } from "../../Data/AccordianData";

export default function Question() {
  const ShippingDetail = [];
  const OrderDetail = [];
  const PaymentDetail = [];

  var data = Types(AccordianData);

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
        <div className="container another-container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
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
        <div className="container another-container">
          {/* Shipping Questions */}
          <h2 className="title text-center mb-3">Shipping Information</h2>
          {/* End .title */}
          <div className="accordion accordion-rounded" id="accordion-1">
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
          <div className="accordion accordion-rounded" id="accordion-3">
            <div className="card card-box card-sm bg-light">
              <div className="card-header" id="heading3-1">
                <h2 className="card-title">
                  <a
                    className="collapsed"
                    role="button"
                    data-toggle="collapse"
                    href="#collapse3-1"
                    aria-expanded="false"
                    aria-controls="collapse3-1"
                  >
                    What payment types can I use?
                  </a>
                </h2>
              </div>
              {/* End .card-header */}
              <div
                id="collapse3-1"
                className="collapse"
                aria-labelledby="heading3-1"
                data-parent="#accordion-3"
              >
                <div className="card-body">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna nibh, viverra non, semper
                  suscipit, posuere a, pede. Donec nec justo eget felis
                  facilisis fermentum.
                </div>
                {/* End .card-body */}
              </div>
              {/* End .collapse */}
            </div>
            {/* End .card */}
            <div className="card card-box card-sm bg-light">
              <div className="card-header" id="heading3-2">
                <h2 className="card-title">
                  <a
                    className="collapsed"
                    role="button"
                    data-toggle="collapse"
                    href="#collapse3-2"
                    aria-expanded="false"
                    aria-controls="collapse3-2"
                  >
                    Can I pay by Gift Card?
                  </a>
                </h2>
              </div>
              {/* End .card-header */}
              <div
                id="collapse3-2"
                className="collapse"
                aria-labelledby="heading3-2"
                data-parent="#accordion-3"
              >
                <div className="card-body">
                  Ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                  odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                  turpis. Suspendisse urna nibh, viverra non, semper suscipit,
                  posuere a, pede. Donec nec justo eget felis facilisis
                  fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing
                  elit. Donec odio. Quisque volutpat mattis eros.
                </div>
                {/* End .card-body */}
              </div>
              {/* End .collapse */}
            </div>
            {/* End .card */}
            <div className="card card-box card-sm bg-light">
              <div className="card-header" id="heading3-3">
                <h2 className="card-title">
                  <a
                    className="collapsed"
                    role="button"
                    data-toggle="collapse"
                    href="#collapse3-3"
                    aria-expanded="false"
                    aria-controls="collapse3-3"
                  >
                    I can't make a payment
                  </a>
                </h2>
              </div>
              {/* End .card-header */}
              <div
                id="collapse3-3"
                className="collapse"
                aria-labelledby="heading3-3"
                data-parent="#accordion-3"
              >
                <div className="card-body">
                  Nullam malesuada erat ut turpis. Suspendisse urna nibh,
                  viverra non, semper suscipit, posuere a, pede. Donec nec justo
                  eget felis facilisis fermentum.Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. Donec odio. Quisque volutpat
                  mattis eros. Lorem ipsum dolor sit amet, consectetuer
                  adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                </div>
                {/* End .card-body */}
              </div>
              {/* End .collapse */}
            </div>
            {/* End .card */}
            <div className="card card-box card-sm bg-light">
              <div className="card-header" id="heading3-4">
                <h2 className="card-title">
                  <a
                    className="collapsed"
                    role="button"
                    data-toggle="collapse"
                    href="#collapse3-4"
                    aria-expanded="false"
                    aria-controls="collapse3-4"
                  >
                    Has my payment gone through?
                  </a>
                </h2>
              </div>
              {/* End .card-header */}
              <div
                id="collapse3-4"
                className="collapse"
                aria-labelledby="heading3-4"
                data-parent="#accordion-3"
              >
                <div className="card-body">
                  Nullam malesuada erat ut turpis. Suspendisse urna nibh,
                  viverra non, semper suscipit, posuere a, pede. Donec nec justo
                  eget felis facilisis fermentum.Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. Donec odio. Quisque volutpat
                  mattis eros. Lorem ipsum dolor sit amet, consectetuer
                  adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                </div>
                {/* End .card-body */}
              </div>
              {/* End .collapse */}
            </div>
            {/* End .card */}
          </div>
          {/* End .accordion */}
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
                  <a href="contact.html" className="btn btn-outline-white">
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
}
