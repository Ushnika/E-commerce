import React, { useEffect, useState } from "react";
import authURL from "../../configuration/authUrl";
import Loading from "../Elements/Loading";

const Brand = () => {
  const [aboutData, setAboutData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAboutSection = () => {
    setLoading(true);
    const name = "Partners";
    const formData = new FormData();
    formData.append("name", name);
    authURL
      .post("/cms-payload-system/get", formData)
      .then((response) => {
        setLoading(false);
        console.log(response);
        const data = response.data.data.cms_payload_system;
        setAboutData(JSON.parse(data.payload));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAboutSection();
  }, []);

  const list = aboutData.partnerList;
  console.log(list);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {/* brands section */}
          <div className="container">
            <div className="row mt-5">
              <div className="col-lg-5">
                <div className="brands-text">
                  <h2
                    className="title"
                    dangerouslySetInnerHTML={{ __html: aboutData.mainHeading }}
                  ></h2>
                  <p
                    dangerouslySetInnerHTML={{ __html: aboutData.subHeading }}
                  ></p>
                </div>
                {/* End .brands-text */}
              </div>
              <div className="col-lg-7">
                <div className="brands-display">
                  <div className="row justify-content-center">
                    {list &&
                      list.map((item, index) => {
                        return (
                          <div className="col-6 col-sm-4" key={index}>
                            <span className="brand">
                              <img
                                src={item.partnerListSection.imageLink}
                                alt="Brand Name"
                              />
                            </span>
                          </div>
                        );
                      })}
                  </div>
                  {/* End .row */}
                </div>
                {/* End .brands-display */}
              </div>
              {/* End .col-lg-7 */}
            </div>
            {/* End .row */}
            {/* <hr className="mt-4 mb-6" /> */}
          </div>
          {/* end of brands section */}
        </div>
      )}
    </div>
  );
};

export default Brand;
