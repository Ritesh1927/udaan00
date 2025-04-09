import React, { Fragment } from "react";
import "../uppernav/UpperNav.css";
import Whatsup from "../../assets/whatsup.png";
const UpperNav = () => {
  return (
    <Fragment>
      <div className="upper-whatsup-strip inline ">
        <p className="uppernav-content">
          {" "}
          we have successfully counselled 25000+ students
        </p>
        <button className="whatsup-btn">
          <a
            href="https://wa.me/8700105214?text=Hello How can i help you"
            target="_blank9"
          >
            <img src={Whatsup} alt="" />
          </a>
        </button>
      </div>
    </Fragment>
  );
};

export default UpperNav;
