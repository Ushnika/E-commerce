import React from "react";
import Aboutus from "./About/Aboutus";
import Team from "./About/Team";
import Vision from "./About/Vision";
import Navbar from "./Navbar";
import Popup from "./Popup";
import Footer from "./Footer";

export default function About() {
  return (
    <div>
      <Vision />
      <Aboutus />
      <Team />
      <button id="scroll-top" title="Back to Top">
        <i class="icon-arrow-up"></i>
      </button>
    </div>
  );
}
