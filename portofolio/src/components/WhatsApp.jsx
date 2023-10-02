import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export const WhatsApp = () => {
  const handleWhatsAppMessage = () => {
    const phoneNumber = "+254743460871"; // Replace with your WhatsApp number

    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="top-[90%] right-3 fixed">
      <ul>
        <li
          className="px-0 hover:scale-105 cursor-pointer 
          rounded-md duration-300 bg-green-500"
          onClick={handleWhatsAppMessage}
        >
          <h6>
            Chat with Me
            <FaWhatsapp size={25} />
          </h6>
        </li>
      </ul>
    </div>
  );
};
