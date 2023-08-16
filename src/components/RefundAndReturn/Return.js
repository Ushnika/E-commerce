import React, { useState, useEffect } from "react";
import API from "../../configuration/config";
import Loading from "../Elements/Loading";

const Return = () => {
  const [data, setData] = useState("");
  const page = "Return-Policy";
  const [loading, setLoading] = useState(false);

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
              <a href="/returnpolicy">Return policy</a>
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
            <h2 className="mb-3">Return Policy</h2>
            <div dangerouslySetInnerHTML={{ __html: data }}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Return;
