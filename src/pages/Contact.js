import React from "react";
import AddressInfo from "./Contactus/AddressInfo";
import ContactInfo from "./Contactus/ContactInfo";

export default function Contact() {
  return (
    <div>
      <ContactInfo />
      <AddressInfo />
      <button id="scroll-top" title="Back to Top">
        <i class="icon-arrow-up"></i>
      </button>
    </div>
  );
}
