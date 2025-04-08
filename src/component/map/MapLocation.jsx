import React, { Fragment } from "react";
import "../../component/map/MapLocation.css";
const MapLocation = () => {
  return (
    <Fragment>
      {/* //////////////// */}

      <div className="map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3212.5543963000478!2d77.43602571824822!3d28.590304470931233!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef933c1b31f3%3A0x48f5d76fc56b1388!2sGOLDEN%20I!5e0!3m2!1sen!2sin!4v1744095440208!5m2!1sen!2sin"
          width="700"
          height="460"
          className="location-map-content"
          // style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Fragment>
  );
};

export default MapLocation;
