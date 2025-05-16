import React, { Fragment, useState, } from "react";
import "../uppernav/UpperNav.css";


const UpperNav = () => {
  

  return (
    <Fragment>
      <div className="upper-whatsup-strip inline">
        <div className="marquee-container">
          <p className="uppernav-content animate-marquee">
            <span className="upnav-no">25,000+</span> <br /> students
            successfully counselled
          </p>
        </div>


      </div>
    </Fragment>
  );
};

export default UpperNav;
