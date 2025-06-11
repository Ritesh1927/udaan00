import React from "react";
import "./BlinkingStrip.css";
import { FaBolt } from "react-icons/fa6";
const BlinkingStrip = () => {
  return (
    // <div classNameName="strip-container">
    //   <div classNameName="blinker left-blink">
    //     <i>
    //       <FaBolt />
    //     </i>
    //     <a
    //       target="_blank"
    //       href="https://wa.me/917355308287?text=hello%20%2C%20i%20want%20to%20know%20more"
    //     >
    //       Admission Now
    //     </a>
    //   </div>

    //   <div classNameName="scroll-message">
    //     <div classNameName="scroll-track">
    //       <span classNameName="scroll-text">
    //         Book your seat now – get admission now
    //       </span>
    //       <span classNameName="scroll-text">
    //         Book your seat now – get admission now
    //       </span>
    //       <span classNameName="scroll-text">
    //         Book your seat now – get admission now
    //       </span>
    //       <span classNameName="scroll-text">
    //         Book your seat now – get admission now
    //       </span>
    //       <span classNameName="scroll-text">
    //         Book your seat now – get admission now{" "}
    //       </span>
    //       <span classNameName="scroll-text">
    //         Book your seat now – get admission now{" "}
    //       </span>
    //       <span classNameName="scroll-text">
    //         Book your seat now – get admission now{" "}
    //       </span>
    //     </div>
    //   </div>

    //   {/* <div classNameName="blinker right-blink">
    //     <a
    //       target="_blank"
    //       href="https://wa.me/917355308287?text=hello%20%2C%20i%20want%20to%20know%20more"
    //     >
    //       Admission Now
    //     </a>
    //   </div> */}
    // </div>
    <>
      <div className="ticker-section">
        <div className="ticker-container">
          <div className="admission-flash">
            <i className="">
              <FaBolt />
            </i>
            GET ADMISSION NOW
          </div>
          <div className="ticker-content">
            <div className="ticker-text">
              📚 Book your seat now – get admission now 🎓
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Limited seats available – secure
              your future today 📚 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Book your seat
              now – get admission now 🎓 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Expert
              counselling for your career success 📚
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Book your seat now – get admission
              now 🎓 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 25,000+ successful
              placements 📚 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Book your seat now –
              get admission now 🎓 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlinkingStrip;
