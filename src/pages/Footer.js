import React, { useCallback, useEffect, useState } from "react";
import authURL from "../configuration/authUrl";
import { IconPickerItem } from "elc-react-icon-picker";

const Footer = () => {
  const [footerData, setFooterData] = useState([]);
  const [footerDetail, setFooterDetail] = useState([]);
  // const currentYear = new Date().getFullYear();

  const getFooter = useCallback(() => {
    const names = [
      "Footer Section #1",
      "Footer Section #2",
      "Footer Section #3",
      "Footer Section #4",
      "Footer Section #5",
    ];
    const formData = new FormData();
    names.forEach((name) => {
      formData.append("names[]", name);
    });
    authURL
      .post("/footer-payload-system/get", formData)
      .then((response) => {
        const data = response.data.data.footer_payload_system;
        setFooterData([
          data.find((item) => item.name === "Footer Section #1"),
          data.find((item) => item.name === "Footer Section #2"),
          data.find((item) => item.name === "Footer Section #3"),
          data.find((item) => item.name === "Footer Section #4"),
          data.find((item) => item.name === "Footer Section #5"),
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getCopyrightDetails = useCallback(() => {
    const names = ["footer_text", "company_number"];
    const formData = new FormData();
    names.forEach((name) => {
      formData.append("names[]", name);
    });
    authURL
      .post("/system-settings/get", formData)
      .then((response) => {
        if (response.status === 200) {
          const data = response.data.data.system_settings;
          setFooterDetail(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    getFooter();
    getCopyrightDetails();
  }, [getFooter, getCopyrightDetails]);

  return (
    <div>
      <footer className="footer footer-2">
        {/* End .footer-newsletter bg-image */}
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              {footerData.map((item, index) => {
                if (item?.name === "Footer Section #1") {
                  const data = JSON.parse(item.payload);
                  return (
                    <div className="col-sm-12 col-lg-6" key={index}>
                      <div className="widget widget-about">
                        {data.imageLink && (
                          <img
                            src={data.imageLink}
                            className="footer-logo"
                            alt="Footer Logo"
                            width={105}
                            height={25}
                          />
                        )}
                        <p>{data.description}</p>
                        <div className="widget-about-info">
                          <div className="row">
                            <div className="col-sm-6 col-md-4">
                              <span className="widget-about-title">
                                Got Question? Call us 24/7
                              </span>

                              {footerDetail.map((item, index) => {
                                if (item.name === "company_number") {
                                  return (
                                    <a
                                      href={`tel:${item.settings}`}
                                      key={index}
                                    >
                                      {item.settings}
                                    </a>
                                  );
                                }
                                return null;
                              })}
                            </div>
                            <div className="col-sm-6 col-md-8">
                              <span className="widget-about-title">
                                Payment Method
                              </span>
                              <figure className="footer-payments">
                                <img
                                  src="/assets/images/payments.png"
                                  alt="Payment methods"
                                  width={272}
                                  height={20}
                                />
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
                if (item?.name === "Footer Section #2") {
                  const data = JSON.parse(item.payload);
                  return (
                    <div className="col-sm-4 col-lg-2" key={index}>
                      <div className="widget">
                        <h4 className="widget-title">{data.title}</h4>
                        <ul className="widget-list">
                          {data.footerLink.map((item, index) => {
                            return (
                              <li key={index}>
                                <a href={item.footerLinkSection.sectionLink}>
                                  {item.footerLinkSection.sectionName}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  );
                }
                if (item?.name === "Footer Section #3") {
                  const data = JSON.parse(item.payload);
                  return (
                    <div className="col-sm-4 col-lg-2" key={index}>
                      <div className="widget">
                        <h4 className="widget-title">{data.title}</h4>
                        <ul className="widget-list">
                          {data.footerLink.map((item, index) => {
                            return (
                              <li key={index}>
                                <a href={item.footerLinkSection.sectionLink}>
                                  {item.footerLinkSection.sectionName}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  );
                }
                if (item?.name === "Footer Section #4") {
                  const data = JSON.parse(item.payload);
                  return (
                    <div className="col-sm-4 col-lg-2" key={index}>
                      <div className="widget">
                        <h4 className="widget-title">{data.title}</h4>
                        <ul className="widget-list">
                          {data.footerLink.map((item, index) => {
                            return (
                              <li key={index}>
                                <a href={item.footerLinkSection.sectionLink}>
                                  {item.footerLinkSection.sectionName}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </div>
        {/* End .footer-middle */}
        <div className="footer-bottom">
          <div className="container">
            {footerDetail.map((item, index) => {
              if (item.name === "footer_text") {
                return (
                  <p className="footer-copyright" key={index}>
                    {item.settings}
                  </p>
                );
              }
              return null;
            })}
            {/* Copyright © {currentYear} Gokyo Store. All Rights Reserved. */}
            {/* End .footer-copyright */}
            <ul className="footer-menu">
              <li>
                <a href="/terms">Terms Of Use</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
            </ul>
            {/* End .footer-menu */}
            <div className="social-icons social-icons-color">
              {footerData.map((item, index) => {
                if (item?.name === "Footer Section #5") {
                  const data = JSON.parse(item.payload);
                  console.log(data);
                  return (
                    <>
                      <span className="social-label" key={index}>
                        {data.title}
                      </span>
                      {data.footerLink.map((item, index) => {
                        return (
                          <a
                            href={item.footerLinkSection.sectionLink}
                            className="social-icon"
                            title="Facebook"
                            target="_blank"
                            key={index}
                            rel="noreferrer"
                          >
                            <IconPickerItem
                              icon={item.footerLinkSection.sectionName}
                              size={12}
                            />
                            {/* <FontAwesomeIcon icon={`fab ${iconName}`} /> */}
                            {/* <FontAwesomeIcon icon={faFacebookF} />
                            <FontAwesomeIcon icon="camera" /> */}
                          </a>
                        );
                      })}
                    </>
                  );
                }
                return null;
              })}
            </div>
            {/* End .soial-icons */}
          </div>
          {/* End .container */}
        </div>
        {/* End .footer-bottom */}
      </footer>
      {/* End .footer */}
    </div>
  );
};

export default Footer;
