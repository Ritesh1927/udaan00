import React from "react";
import Errorimg from "../../assets/404error.jpg";
import "../error/Error.css";
const Error = () => {
  return (
    <div className="error-wrapper">
      <div className="error-img-container">
        <img src={Errorimg} alt="" />
      </div>
    </div>
  );
};

export default Error;
