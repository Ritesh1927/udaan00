import React, { Fragment } from "react";
import "../cards/Cards.css";
import { FaBrain } from "react-icons/fa6";
import { FaLightbulb, FaUserGraduate } from "react-icons/fa6";
import { FaBullseye, FaRocket } from "react-icons/fa";

// import { HiArrowLongRight } from "react-icons/hi2";

const Cards = (props) => {
  return (
    <Fragment>
      {/* <!-- Benefits Grid --> */}
      <div className="benefits-grid">
        {/* <!-- Card 1 - Explore and be aware --> */}
        <div className="benefit-card card-red">
          <div className="card-content">
            <div className="card-icon">
              <i className="fas fa-lightbulb">
                <FaLightbulb />
              </i>
            </div>
            <h3 className="card-title-benifit">Explore and be aware</h3>
            <p className="card-description">
              Explore hundreds of career options and academic pathways.
            </p>
          </div>
          <div className="card-diamond red-diamond"></div>
        </div>

        {/* <!-- Card 2 - Discover your abilities --> */}
        <div className="benefit-card card-purple">
          <div className="card-content">
            <div className="card-icon">
              <i className="fas fa-brain">
                <FaBrain />
              </i>
            </div>
            <h3 className="card-title-benifit">Discover your abilities and skills</h3>
            <p className="card-description">
              Use scientific diagnostic tools to recognise your abilities and
              interests.
            </p>
          </div>
          <div className="card-diamond purple-diamond"></div>
        </div>

        {/* <!-- Card 3 - Set realistic career goals --> */}
        <div className="benefit-card card-yellow">
          <div className="card-content">
            <div className="card-icon">
              <i className="fas fa-bullseye">
                <FaBullseye />
              </i>
            </div>
            <h3 className="card-title-benifit">Set realistic career goals</h3>
            <p className="card-description">
              Select career paths aligned with your interests, skills and
              aptitude.
            </p>
          </div>
          <div className="card-diamond yellow-diamond"></div>
        </div>

        {/* <!-- Card 4 - Get Guidance --> */}
        <div className="benefit-card card-blue">
          <div className="card-content">
            <div className="card-icon">
              <i className="fas fa-user-graduate">
                <FaUserGraduate />
              </i>
            </div>
            <h3 className="card-title-benifit">
              Get Guidance from experienced counsellors
            </h3>
            <p className="card-description">
              Gain clarity and select your career or academic options with
              expert guidance.
            </p>
          </div>
          <div className="card-diamond blue-diamond"></div>
        </div>

        {/* <!-- Card 5 - Boost confidence --> */}
        <div className="benefit-card card-orange">
          <div className="card-content">
            <div className="card-icon">
              <i className="fas fa-rocket">
                <FaRocket />
              </i>
            </div>
            <h3 className="card-title-benifit">Boost confidence</h3>
            <p className="card-description">
              Eliminate doubt and be confident about your career and academic
              pathways.
            </p>
          </div>
          <div className="card-diamond orange-diamond"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cards;
