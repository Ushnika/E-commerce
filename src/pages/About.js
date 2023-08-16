import React from "react";
import Aboutus from "../components/About/Aboutus";
import Brand from "../components/About/Brand";
import Vision from "../components/About/Vision";

const About = () => {
  return (
    <div>
      <Vision />
      <Aboutus />
      <Brand />
      <button id="scroll-top" title="Back to Top">
        <i className="icon-arrow-up"></i>
      </button>
    </div>
  );
};

export default About;
