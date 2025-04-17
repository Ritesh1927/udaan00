import React from "react";
import "../../src/common-component/error/Error.css";
import "../dasboard-pages/Sip.css";
import Pwimg from "../assets/pwimg.png";
import Sipbanner from "../assets/bookscomp.jpg";
const Sip = () => {
  return (
    <>
      <div className="sip-image-banner-wrapper">
        <img src={Sipbanner} alt="" />
      </div>
      <div className="container Sip-page-container-wrapper">
        <div className="sip-content-container">
          <div className="sip-innner-side">
            <h1 className="sip-heading">
              School Integrated Program (SIP) with PW
            </h1>
            <p className="Sip-under-heading">
              Empowering Students With Quality Education & Career Readiness!
            </p>
            <p className="sip-explanation">
              Udaan360, in collaboration with Physics Wallah, offers a School
              Integrated Program (SIP) aimed at delivering structured academic
              coaching within schools. This ensures students receive top-tier
              preparation for competitive exams while aligning with their school
              curriculum.
            </p>
          </div>
          <div className="sip-img-conatainer">
            <img src={Pwimg} alt="" />
          </div>
        </div>
        <div className="text-center abt-sip-ques-container">
          <h1>What is the School Integrated Program (SIP)?</h1>
          <p>
            The SIP by Udaan360 & Physics Wallah integrates competitive exam
            coaching directly into the school timetable—removing the need for
            external coaching.
          </p>
        </div>
        <div className="benefits-container">
          <h1 className="sip-heading">Benefits Of SIP</h1>
          <ul>
            <li>
              Seamless Integration – Coaching during school hours; no extra
              burden
            </li>
            <li>
              {" "}
              Expert Faculty from Physics Wallah – India’s top educators for
              exam coaching
            </li>
            <li>
              {" "}
              Result-Oriented Approach – Smart study plans, regular assessments,
              and doubt-solving
            </li>
            <li>
              Affordable & High-Quality Coaching – Premium education at minimal
              cost
            </li>
            <li>
              Beyond Academics – Udaan360 ensures career success through skill
              development & placement support
            </li>
          </ul>
        </div>
        <div className="coaching-container">
          <h1 className="sip-heading">Targeted Coaching for:</h1>
          <p>
            JEE (Engineering) – IITs, NITs, and top private engineering colleges
          </p>
          <p>
            {" "}
            NEET (Medical) – MBBS, BDS, and allied healthcare professional
            programs
          </p>
        </div>
      </div>
    </>
  );
};

export default Sip;
