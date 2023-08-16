import React, { useEffect, useState } from "react";
import API from "../../configuration/config";
import { bannerImageUrl } from "../../configuration/domainURL";

const Banner = () => {
  const [bannerDetails, setBannerDetails] = useState([]);

  useEffect(() => {
    getBannerDetails();
  }, []);

  const getBannerDetails = () => {
    API.get("/all-banners")
      .then((response) => {
        setBannerDetails(response.data.data.banners);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="banner-group">
        <div className="container">
          <div className="row">
            {bannerDetails.map((item, index) => {
              if (index === 0) {
                return (
                  <div className="col-md-12 col-lg-5" key={index}>
                    <div className="banner banner-large banner-overlay ">
                      <a href="/">
                        <img
                          src={bannerImageUrl + item.image}
                          alt="BannerImg"
                        />
                      </a>
                      <div className="banner-content banner-content-top">
                        <h4 className="banner-subtitle">{item.tag}</h4>
                        {/* End .banner-subtitle */}
                        <h3 className="banner-title ">{item.title}</h3>
                        {/* End .banner-title */}
                        <div className="banner-text">
                          from {item.starting_price}
                        </div>
                        {/* End .banner-text */}
                        <a
                          href={item.button_link}
                          className="btn btn-outline-gray banner-link"
                        >
                          {item.button_text}
                          <i className="icon-long-arrow-right" />
                        </a>
                      </div>
                      {/* End .banner-content */}
                    </div>
                    {/* End .banner */}
                  </div>
                );
              }
              if (index === 1) {
                return (
                  <div className="col-md-6 col-lg-3" key={index}>
                    <div className="banner banner-overlay">
                      <a href="/">
                        <img
                          src={bannerImageUrl + item.image}
                          alt="Banner"
                          // style={{ height: "65vh" }}
                        />
                      </a>
                      <div className="banner-content banner-content-bottom">
                        <h4 className="banner-subtitle text-grey">
                          {item.tag}
                        </h4>
                        {/* End .banner-subtitle */}
                        <h3 className="banner-title text-white">
                          {item.title}
                        </h3>
                        {/* End .banner-title */}
                        <div className="banner-text text-white">
                          from {item.starting_price}
                        </div>
                        {/* End .banner-text */}
                        <a
                          href={item.button_link}
                          className="btn btn-outline-white banner-link"
                        >
                          {item.button_text}
                          <i className="icon-long-arrow-right" />
                        </a>
                      </div>
                      {/* End .banner-content */}
                    </div>
                    {/* End .banner */}
                  </div>
                );
              }
              if (index === 2) {
                const displayedItems = bannerDetails.slice(index, index + 2);
                return (
                  <div className="col-md-6 col-lg-4" key={index}>
                    {displayedItems.map((data, i) => (
                      <div key={i}>
                        <div className="banner">
                          <div className="overlay">
                            <a href="/">
                              <img
                                src={bannerImageUrl + data.image}
                                alt="Banner"
                                className="banner-img"
                              />
                            </a>
                            <div className="banner-content banner-content-top">
                              <h4
                                className={`banner-subtitle ${
                                  i === 0 ? "text-black" : "text-white"
                                }`}
                              >
                                {data.tag}
                              </h4>
                              <h3
                                className={`banner-title  ${
                                  i === 0 ? "text-black" : "text-white"
                                }`}
                              >
                                {data.title}
                              </h3>
                              <a
                                href={data.button_link}
                                className={`btn  banner-link  ${
                                  i === 0
                                    ? "btn-outline-gray"
                                    : "btn-outline-white"
                                }`}
                              >
                                {data.button_text}
                                <i className="icon-long-arrow-right" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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
      {/* End .banner-group */}
      <div className="mb-5"></div>
    </div>
  );
};

export default Banner;
