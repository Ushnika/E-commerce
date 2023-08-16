import React from "react";

const Loading = () => {
  return (
    <div className="">
      <div
        className="spinner-border text-warning"
        role="status"
        style={{
          padding: "4rem",
          margin: "4rem auto",
          display: "block",
        }}
      >
        {/* <span className="visually-hidden m-auto">Loading...</span> */}
      </div>
    </div>
  );
};
export default Loading;
