import React from "react";
import { FaDownload } from "react-icons/fa";
import "../footer/Footer.css";
const DownloadPdf = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/brochure.pdf`;
    link.download = "brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="footer-download">
      <button className="download-pdf-btn" onClick={handleDownload}>
        <i class="fas fa-download">
          <FaDownload />
        </i>
        Download Pdf
      </button>
    </div>
  );
};

export default DownloadPdf;
