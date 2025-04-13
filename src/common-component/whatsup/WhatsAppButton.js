import React from "react";
// import { FaWhatsapp } from "react-icons/fa";
import "../whatsup/WhatsAppButton.css";
import Whatsup from "../../assets/whatsup.png";
const WhatsAppButton = () => {
  const phoneNumber = "1234567890"; // Replace with your WhatsApp number

  return (
    <>
      <div className="whatsapp-button">
        <a
          href="https://wa.me/917355308287?text=Hello%20How%20can%20I%20help%20you"
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
