import React, { useState, useEffect } from "react";
import API from "../../configuration/config";
import Loading from "../Elements/Loading";

const Privacy = () => {
  const [privacydata, setPrivacyData] = useState("");
  const page = "Privacy-Policy";
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = () => {
      setLoading(true);
      API.get("/page/single/" + page)
        .then((response) => {
          console.log(response);
          setPrivacyData(response.data.data.page_info.page_data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    };
    getData();
  }, []);

  return (
    <div>
      <nav aria-label="breadcrumb" className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/privacy">Privacy policy</a>
            </li>
          </ol>
        </div>
        {/* End .container */}
      </nav>
      <div className="page-content">
        {loading ? (
          <Loading />
        ) : (
          <div className="container">
            <h2 className="mb-3">Privacy Policy</h2>
            <div dangerouslySetInnerHTML={{ __html: privacydata }}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Privacy;
