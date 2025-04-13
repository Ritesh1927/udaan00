import React, { Fragment } from "react";
import "../uppernav/UpperNav.css";
import Whatsup from "../../assets/whatsup.png";

const UpperNav = () => {
  return (
    <Fragment>
      <div className="upper-whatsup-strip inline">
        <div className="marquee-container">
          <p className="uppernav-content animate-marquee">
            <span className="upnav-no">25,000+</span> students successfully
            counselled
          </p>
        </div>
        {/* <button className="whatsup-btn">
          <a
            href="https://wa.me/917355308287?text=Hello%20How%20can%20I%20help%20you"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Whatsup} alt="WhatsApp" />
          </a>
        </button> */}
      </div>
    </Fragment>
  );
};

export default UpperNav;
