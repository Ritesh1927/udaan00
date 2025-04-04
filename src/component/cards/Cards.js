import React, { Fragment } from "react";
import "../cards/Cards.css";
import { HiArrowLongRight } from "react-icons/hi2";

const Cards = (props) => {
  return (
    <Fragment>
      <div className={`step-card-cont ${props.className}`}>
        <div className="card-1-cont">
          <div className="imgicon-card-container">
            <div className="icon-cont">
              <img src={props.src} alt="" />
            </div>
          </div>

          {/* Icon Prop */}
        </div>

        <div className={`card-1-head-cont ${props.card3head}`}>
          {props.head}
        </div>
        <div className="card-1-content">{props.content}</div>

        <div className="card-1-button-cont">
          <button className={props.buttonclass}>
            <div className="button-rotated-icon">
              <HiArrowLongRight />
            </div>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Cards;
