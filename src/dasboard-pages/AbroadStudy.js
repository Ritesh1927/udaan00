import React from "react";
import "../dasboard-pages/AbroadStudy.css";
import Sbanner from "../assets/studyabroad-banner.jpg";
import Handshake from "../assets/handshake.png";
import Trophy from "../assets/trophy.png";
import Schloarship from "../assets/scholarship.png";
import Gradcap from "../assets/gradCap.png";
import DreamCourse from "../assets/DreamCourse.png";
import Assistance from "../assets/assistance.png";
import Testprep from "../assets/testPrep.png";
import Visa from "../assets/visa.png";
import Financial from "../assets/financial.png";
import Acco from "../assets/acco.png";
import AbroadUniversity from "../component/abroaduniversity/AbroadUniversity";

const AbroadStudy = () => {
  return (
    <>
   
      <section className="study-aborad-main-wrapper">
        <div className="study-abroad-banner">
          <img src={Sbanner} alt="Banner" />
        </div>
        <div className="container">
          <div className="first-container-container ">
            <p className="why-heading">
              Why Choose <span className="why-heading-color">Udaan360 ?</span>
            </p>
            <div className="udaan-choose-why-child-wrap">
              <div className="udaan-choose-why-child">
                <div className="why-chs-img-wrapper">
                  <img className="why-chs-img" src={Handshake} alt="" />
                </div>
                <p>
                  <span className="study-no">150+</span> University Partners
                </p>
              </div>
              <div className="udaan-choose-why-child">
                <div className="why-chs-img-wrapper">
                  <img className="why-chs-img" src={Trophy} alt="" />
                </div>
                <p>
                  <span className="study-no"> 500+</span> Success Stories
                </p>
              </div>
              <div className="udaan-choose-why-child">
                <div className="why-chs-img-wrapper">
                  <img className="why-chs-img" src={Schloarship} alt="" />
                </div>
                <p>
                  Scholarship up to <span className="study-no"> 50%</span>
                </p>
              </div>
              <div className="udaan-choose-why-child">
                <div className="why-chs-img-wrapper">
                  <img className="why-chs-img" src={Gradcap} alt="" />
                </div>
                <p>
                  Courses starting at
                  <span className="study-no"> ₹12 Lakhs</span>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="second-container-container">
            <p className="why-heading new-heading">
              Advantage of<span className="why-heading-color"> Udaan360 </span>
            </p>
            <div className="study-abroad-advantage-container">
              <div className="study-aborad-advantage-child">
                <div className="advantage-img-wrapper">
                  <img src={DreamCourse} alt="" />
                </div>
                <p>Finding the Program That is Right for You</p>
              </div>
              <div className="study-aborad-advantage-child">
                <div className="advantage-img-wrapper">
                  <img src={Assistance} alt="" />
                </div>
                <p>Curated Expert-led Application Assistance</p>
              </div>
              <div className="study-aborad-advantage-child">
                <div className="advantage-img-wrapper">
                  <img src={Testprep} alt="" />
                </div>
                <p>English Assessment Test Prep On-the-go</p>
              </div>
              <div className="study-aborad-advantage-child">
                <div className="advantage-img-wrapper">
                  <img src={Visa} alt="" />
                </div>
                <p>Cracking the Interviews & the All-important VISA</p>
              </div>
              <div className="study-aborad-advantage-child">
                <div className="advantage-img-wrapper">
                  <img src={Financial} alt="" />
                </div>
                <p>Financial Assistance </p>
              </div>
              <div className="study-aborad-advantage-child">
                <div className="advantage-img-wrapper">
                  <img src={Acco} alt="" />
                </div>
                <p>Making Sure You Stay Right, And Stay Well</p>
              </div>
            </div>
          </div>
          <AbroadUniversity />
        </div>
      </section>
    </>
  );
};

export default AbroadStudy;
