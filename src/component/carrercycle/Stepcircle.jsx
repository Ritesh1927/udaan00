import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Stepcircle.css";

const Stepcircle = () => {
  const navigate = useNavigate();
  const [hoveredStep, setHoveredStep] = useState(null);

  const steps = [
    { label: "Career Counselling", path: "/career-counselling" },
    { label: "Stream Selection", path: "/stream-selection" },
    { label: "College Selection", path: "/college-selection" },
    { label: "Exam Preparation", path: "/exam-preparation" },
    { label: "Admission", path: "/admission" },
    { label: "Placement", path: "/placement" },
  ];

  const handleClick = (path) => {
    navigate(path);
  };

  const handleMouseEnter = (index) => {
    setHoveredStep(index);
  };

  const handleMouseLeave = () => {
    setHoveredStep(null);
  };

  return (
    <section className="career-cycle-section">
      <div className="career-cycle-wrapper">
        {/* Monkey image */}
        {/* <img
          src={monkeyImage}
          alt="Monkey"
          className={`monkey-image ${
            hoveredStep !== null ? `jump-to-step-${hoveredStep}` : ""
          }`}
        /> */}

        {/* Center text */}
        <div className="center-text">
          Building Bridges To
          <br />
          Your FUTURE
        </div>

        {/* Steps */}
        <div className="rotating-steps-wrapper">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`cycle-step step-${index}`}
              onClick={() => handleClick(step.path)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <span>{step.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stepcircle;
