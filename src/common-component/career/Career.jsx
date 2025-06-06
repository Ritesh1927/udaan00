import React from "react";
import CareerImg from "../../assets/career.png";
import "./Career.css";
function Career() {
  return (
    <>
      <div className="career-banner">
        <img src={CareerImg} alt="" />
      </div>
      <div className="container">
        <h1 className="carrer-heading"> Careers at Udaan360</h1>
        <p className="career-under-heading"> Build Your Future with Us</p>
        <p className="Career-under-content">
          At Udaan360, we don't just offer jobs we build careers. We're a team
          of passionate, driven, and creative individuals committed to making a
          difference. If you're looking for a place where your ideas matter,
          your growth is a priority, and your efforts are truly valued you’re in
          the right place.
        </p>

        <h1 className="carrer-heading"> Why Work With Us?</h1>
        <p className="career-under-heading">
          We believe that great work happens in a great environment. Our company
          culture is built on:
        </p>
        <div className="why-chose-us-career">
          <ul className="inner-why-choose-use">
            {" "}
            <li>Respect & Transparency</li>
            <li>Team Collaboration</li>
            <li>Work-Life Balance</li>
          </ul>
          <ul className="inner-why-choose-use">
            <li>Diversity & Inclusion</li>
            <li>Celebrating Wins — Big or Small</li>
          </ul>
        </div>
        <h1 className="carrer-heading"> Growth & Recognition</h1>
        <p className="career-under-heading">
          We recognize talent. We reward efforts. And we support growth at every
          level.
        </p>
        <ul className="growth-list-career">
          <li>
            {" "}
            Learning Opportunities: Regular training, workshops, and mentorship
            programs to help you upskill.
          </li>
          <li>
            Annual Appraisals & Timely Hikes: Your hard work doesn’t go
            unnoticed we believe in rewarding performance generously.
          </li>
          <li>
            Career Growth: Fast-track promotions and leadership opportunities
            for high performers.
          </li>
          <li>
            Employee of the Month & Rewards: Get recognized and rewarded for
            going above and beyond.
          </li>
        </ul>
      </div>
    </>
  );
}

export default Career;
