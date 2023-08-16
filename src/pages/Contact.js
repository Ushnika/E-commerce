import React from "react";
import AddressInfo from "../components/Contactus/AddressInfo";
import ContactInfo from "../components/Contactus/ContactInfo";

const Contact = () => {
  return (
    <div>
      <ContactInfo />
      <AddressInfo />
      <button id="scroll-top" title="Back to Top">
        <i className="icon-arrow-up"></i>
      </button>
    </div>
  );
};

export default Contact;
