import React, { Fragment, useState } from "react";
import "../uppernav/UpperNav.css";
import { Link } from "react-router-dom";

const UpperNav = () => {
  return (
    <Fragment>
      <div className="upper-whatsup-strip inline">
        {/* <div className="medico-link-div">
          <Link className="medico-link">Medical Admisson</Link>
        </div> */}
        <div className="marquee-container">
          <p className="uppernav-content animate-marquee">
            <span className="upnav-no">25,000+</span> students successfully
            counselled
          </p>
        </div>
        {/* <div className="medico-link-div">
          <Link className="medico-link">Engineering Admisson</Link>
        </div> */}
      </div>
    </Fragment>
  );
};

export default UpperNav;
