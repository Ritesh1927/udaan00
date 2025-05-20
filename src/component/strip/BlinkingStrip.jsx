import React from "react";
import "./BlinkingStrip.css";

const BlinkingStrip = () => {
  return (
    <div className="strip-container">
      <div className="blinker left-blink">🎓 Admission Now</div>

      <div className="scroll-message">
        <div className="scroll-track">
          <span className="scroll-text">
            📣 Book your seat now – get admission now 📣
          </span>
          <span className="scroll-text">
            📣 Book your seat now – get admission now 📣
          </span>
          <span className="scroll-text">
            📣 Book your seat now – get admission now 📣
          </span>
          <span className="scroll-text">
            📣 Book your seat now – get admission now 📣
          </span>
          <span className="scroll-text">
            📣 Book your seat now – get admission now 📣
          </span>
        </div>
      </div>

      <div className="blinker right-blink">🎓 Admission Now</div>
    </div>
  );
};

export default BlinkingStrip;
