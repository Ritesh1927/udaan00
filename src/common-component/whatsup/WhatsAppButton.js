import React from "react";
// import { FaWhatsapp } from "react-icons/fa";
import "../whatsup/WhatsAppButton.css";
import Whatsup from "../../assets/whatsup.png";
const WhatsAppButton = () => {
  return (
    <>
      <div className="whatsapp-button">
        <a
          href="https://wa.me/917355308287?text=hello%20%2C%20i%20want%20to%20know%20more"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="whtsupimg" src={Whatsup} alt="whats up" />
        </a>
      </div>
    </>
  );
};

export default WhatsAppButton;
