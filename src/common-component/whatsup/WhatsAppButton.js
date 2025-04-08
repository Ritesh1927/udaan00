import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../whatsup/WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "1234567890"; // Replace with your WhatsApp number

  return (
    <a
      href={`https://wa.me/${8700105214}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all z-50"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppButton;
