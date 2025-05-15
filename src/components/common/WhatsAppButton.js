// src/components/common/WhatsAppButton.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../../styles/components/whatsapp-button.css';

const WhatsAppButton = () => {
  const phoneNumber = '+919900907884'; // Replace with actual WhatsApp number
  const message = 'Hello! I would like to know more about your products and services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
      <span className="tooltip">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;