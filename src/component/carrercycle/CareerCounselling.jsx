import React from "react";
import "./CareerCounselling.css";
import {
  FaUserGraduate,
  FaQuestionCircle,
  FaChartLine,
  FaGlobe,
} from "react-icons/fa";
import { MdExplore, MdSupportAgent } from "react-icons/md";

const CareerCounselling = () => {
  return (
    <div className="career-page">
      <section className="career-hero">
        <h1>Career Counselling at Udaan360</h1>
        <p>Your guide to a successful future – in India or abroad.</p>
      </section>

      <section className=" container career-section with-icon">
        <FaQuestionCircle className="career-icon" />
        <div className="career-text">
          <h2>What is Career Counselling?</h2>
          <p>
            Career counselling is a process that helps individuals understand
            themselves, their goals, and the world of opportunities so they can
            make informed educational, career, and life decisions. It involves
            assessments, guidance, and one-on-one interaction with experienced
            counsellors.
          </p>
        </div>
      </section>

      <section className="container career-section alt-layout">
        <div className="career-text">
          <h2>Why Career Counselling?</h2>
          <ul>
            <li>Identify your interests, strengths, and weaknesses</li>
            <li>Get clarity about streams, subjects, and careers</li>
            <li>Plan your future with expert guidance</li>
            <li>Reduce stress and confusion during decision-making</li>
          </ul>
        </div>
        <FaUserGraduate className="career-icon" />
      </section>

      <section className=" container career-section full-width">
        <h2>Importance of Career Counselling</h2>
        <p>
          Choosing the right career path is one of the most important decisions
          in a student's life. At Udaan360, we ensure students don't make career
          decisions out of pressure or confusion. We provide:
        </p>
        <div className="career-grid">
          <div className="career-box">
            <FaChartLine className="icon" />
            <h3>Career Roadmapping</h3>
            <p>
              We help you map out your career path with milestones and guidance
              tailored to your goals.
            </p>
          </div>
          <div className="career-box">
            <MdSupportAgent className="icon" />
            <h3>1-on-1 Guidance</h3>
            <p>
              Personal counselling sessions to ensure you feel confident about
              your future choices.
            </p>
          </div>
          <div className="career-box">
            <MdExplore className="icon" />
            <h3>Explore Opportunities</h3>
            <p>
              Learn about career options in India and abroad based on your
              academic and personal preferences.
            </p>
          </div>
          <div className="career-box">
            <FaGlobe className="icon" />
            <h3>Global Scope</h3>
            <p>
              Our counselling includes guidance for international studies,
              exams, and visa procedures.
            </p>
          </div>
        </div>
      </section>

      <section className="career-callout">
        <h2>We’re With You Every Step of the Way</h2>
        <p>
          Whether you're in 10th, 12th, or pursuing graduation, our team is here
          to help you make the right choices at the right time.
        </p>
        <button className="career-button">
          {" "}
          <a href=""> Book Your Counselling Session</a>{" "}
        </button>
      </section>
    </div>
  );
};

export default CareerCounselling;
