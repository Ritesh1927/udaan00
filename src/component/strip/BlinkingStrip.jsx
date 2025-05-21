import React from "react";
import "./BlinkingStrip.css";

const BlinkingStrip = () => {
  return (
    <div className="strip-container">
      <div className="blinker left-blink">
        <a
          target="_blank"
          href="https://wa.me/917355308287?text=hello%20%2C%20i%20want%20to%20know%20more"
        >
          Admission Now
        </a>
      </div>

      <div className="scroll-message">
        <div className="scroll-track">
          <span className="scroll-text">
            Book your seat now – get admission now
          </span>
          <span className="scroll-text">
            Book your seat now – get admission now
          </span>
          <span className="scroll-text">
            Book your seat now – get admission now
          </span>
          <span className="scroll-text">
            Book your seat now – get admission now
          </span>
          <span className="scroll-text">
            Book your seat now – get admission now{" "}
          </span>
          <span className="scroll-text">
            Book your seat now – get admission now{" "}
          </span>
          <span className="scroll-text">
            Book your seat now – get admission now{" "}
          </span>
        </div>
      </div>

      <div className="blinker right-blink">
        <a
          target="_blank"
          href="https://wa.me/917355308287?text=hello%20%2C%20i%20want%20to%20know%20more"
        >
          Admission Now
        </a>
      </div>
    </div>
  );
};

export default BlinkingStrip;
