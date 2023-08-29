import React, { useState } from 'react';
import QRCodeModal from './QRCodeModal'; // Import the QRCodeModal component

const QRCodeDisplay = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [qrDataURL, setQRDataURL] = useState(null);
  const [inputURL, setInputURL] = useState('');

  const openModal = () => {
    setModalIsOpen(true);
    generateQRCode(inputURL);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const generateQRCode = (url) => {
    // Generate QR code and set qrDataURL based on the URL
    // For example, using the qrcode package
    const qrCodeDataURL = '...'; // Replace with generated QR data URL
    setQRDataURL(qrCodeDataURL);
  };

  const handleURLChange = (event) => {
    setInputURL(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter URL"
        value={inputURL}
        onChange={handleURLChange}
      />
      <button onClick={openModal}>Generate QR Code</button>

      <QRCodeModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        qrDataURL={qrDataURL}
        text={inputURL}
      />
    </div>
  );
};

export default QRCodeDisplay;
