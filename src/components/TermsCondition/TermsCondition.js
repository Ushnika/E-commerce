import React, { useEffect, useState } from "react";
import API from "../../configuration/config";
import Loading from "../Elements/Loading";

const TermsCondition = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const page = "Terms-and-Conditions";

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoading(true);
    API.get("/page/single/" + page)
      .then((response) => {
        console.log(response);
        setData(response.data.data.page_info.page_data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  return (
    <div>
      <nav aria-label="breadcrumb" className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/terms">Terms & Condition</a>
            </li>
          </ol>
        </div>
        {/* End .container */}
      </nav>
      {/* End .breadcrumb-nav */}
      <div className="page-content">
        {loading ? (
          <Loading />
        ) : (
          <div className="container">
            <h2 className="mb-3">Terms and Condition</h2>
            <div dangerouslySetInnerHTML={{ __html: data }}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TermsCondition;
