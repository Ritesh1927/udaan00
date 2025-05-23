import React from "react";

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
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button
        onClick={handleDownload}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#705BA4",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Download PDF
      </button>
    </div>
  );
};

export default DownloadPdf;
