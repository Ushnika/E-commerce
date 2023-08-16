import React, { useCallback, useEffect, useState } from "react";
import authURL from "../../configuration/authUrl";
import { IconPickerItem } from "elc-react-icon-picker";
import Loading from "../Elements/Loading";

const Aboutus = () => {
  const [aboutData, setAboutData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAboutSection = useCallback(() => {
    setLoading(true);
    const names = ["About", "Feature Section", "States"];
    const formData = new FormData();
    names.forEach((name) => {
      formData.append("names[]", name);
    });
    authURL
      .post("/cms-payload-system/get", formData)
      .then((response) => {
        setLoading(false);
        console.log(response);
        const data = response.data.data.cms_payload_system;
        setAboutData([
          data.find((item) => item.name === "About"),
          data.find((item) => item.name === "Feature Section"),
          data.find((item) => item.name === "States"),
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getAboutSection();
  }, [getAboutSection]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {aboutData.map((item, index) => {
            /* About mission vision and who are we section */
            if (item?.name === "About") {
              const data = JSON.parse(item.payload);
              console.log(data);
              return (
                <div key={index}>
                  {/* About mission vision and who are we section */}
                  <div className="container ">
                    <div className="row">
                      <div className="col-lg-6 mb-3 mb-lg-0">
                        <h2 className="title">{data.title}</h2>
                        {/* End .title */}
                        <p
                          dangerouslySetInnerHTML={{ __html: data.vision }}
                        ></p>
                      </div>
                      <div className="col-lg-6">
                        <h2 className="title">{data.title1}</h2>
                        {/* End .title */}
                        <p
                          dangerouslySetInnerHTML={{ __html: data.mission }}
                        ></p>
                      </div>
                    </div>
                    <div className="mb-5" />
                  </div>
                  <div className="bg-light-2 pt-6 pb-5 mb-6 mb-lg-8">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-5 mb-3 mb-lg-0">
                          <h2 className="title">{data.title2}</h2>
                          {/* End .title */}
                          <p
                            className="mb-2"
                            dangerouslySetInnerHTML={{ __html: data.who }}
                          ></p>
                          <a
                            href={data.buttonLink}
                            className="btn btn-sm btn-minwidth btn-outline-primary-2"
                          >
                            <span>{data.buttonText}</span>
                            <i className="icon-long-arrow-right" />
                          </a>
                        </div>
                        {/* End .col-lg-5 */}
                        <div className="col-lg-6 offset-lg-1">
                          <div className="about-images">
                            <img
                              src={data.image1}
                              alt=""
                              className="about-img-front"
                            />
                            {/* <img
                              src={data.image2}
                              alt=""
                              className="about-img-back"
                            /> */}
                          </div>
                          {/* End .about-images */}
                        </div>
                        {/* End .col-lg-6 */}
                      </div>
                      {/* End .row */}
                    </div>
                    {/* End .container */}
                  </div>
                  {/* End of About mission vision and who are we section */}
                </div>
              );
            }
            /* End of About mission vision and who are we section */

            /* Start of happy clients and about us section */
            if (item?.name === "Feature Section") {
              const data = JSON.parse(item.payload);
              return (
                <div>
                  <div className="container ">
                    <div className="row justify-content-center">
                      {data.featureItem.map((item, index) => {
                        return (
                          <div className="col-lg-4 col-sm-6" key={index}>
                            <div className="icon-box icon-box-sm text-center">
                              <span className="icon-box-icon">
                                <IconPickerItem
                                  icon={item.featureItemSection.icon}
                                  color="#fdb811"
                                  size="3.4rem"
                                />
                                {/* <i className="icon-puzzle-piece" /> */}
                              </span>
                              <div className="icon-box-content">
                                <h3 className="icon-box-title">
                                  {item.featureItemSection.title}
                                </h3>
                                {/* End .icon-box-title */}
                                <p
                                  dangerouslySetInnerHTML={{
                                    __html: item.featureItemSection.description,
                                  }}
                                ></p>
                              </div>
                              {/* End .icon-box-content */}
                            </div>
                            {/* End .icon-box */}
                          </div>
                        );
                      })}
                      {/* End .col-lg-4 col-sm-6 */}
                    </div>
                    {/* End .row */}
                  </div>
                  <div className="mb-2" />
                </div>
              );
            }

            if (item?.name === "States") {
              const data = JSON.parse(item.payload);
              console.log(data);
              return (
                <div
                  className="bg-image pt-7 pb-5 pt-md-12 pb-md-9 mb-3"
                  style={{
                    backgroundImage: "url(assets/images/about/about-bg.jpg)",
                  }}
                >
                  <div className="container">
                    <div className="row">
                      {data.stateItem.map((item, index) => {
                        return (
                          <div className="col-6 col-md-3" key={index}>
                            <div className="count-container text-center">
                              <div className="count-wrapper text-white">
                                <span
                                  className="count"
                                  data-from={0}
                                  data-to={40}
                                  data-speed={3000}
                                  data-refresh-interval={50}
                                >
                                  {item.stateItemSection.number}
                                </span>
                              </div>
                              {/* End .count-wrapper */}
                              <h3 className="count-title text-white">
                                {item.stateItemSection.title}
                              </h3>
                              {/* End .count-title */}
                            </div>
                            {/* End .count-container */}
                          </div>
                        );
                      })}
                    </div>
                    {/* End .row */}
                  </div>
                  {/* End .container */}
                </div>
              );
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};

export default Aboutus;
