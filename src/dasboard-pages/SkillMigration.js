import React from "react";
import "../../src/common-component/error/Error.css";
import Errorimg from "../assets/404error.jpg";
const SkillMigration = () => {
  return (
    <div className="error-wrapper">
      <div className="error-img-container">
        <img src={Errorimg} alt="" />
      </div>
    </div>
  );
};

export default SkillMigration;
