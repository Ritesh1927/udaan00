import React, { Fragment, useState } from "react";
import "./Admisson.css";
const colleges = {
  btech: [
    { name: "IIT Delhi", location: "Delhi" },
    { name: "MIT Pune", location: "Pune" },
    { name: "NIT Trichy", location: "Trichy" },
  ],
  medical: [
    { name: "AIIMS Delhi", location: "Delhi" },
    { name: "KMC Manipal", location: "Manipal" },
    { name: "CMC Vellore", location: "Vellore" },
  ],
  management: [
    { name: "IIM Ahmedabad", location: "Ahmedabad" },
    { name: "XLRI Jamshedpur", location: "Jamshedpur" },
    { name: "FMS Delhi", location: "Delhi" },
  ],
};
const Admisson = () => {
  const [activeTab, setActiveTab] = useState("btech");

  const handleTabClick = (type) => setActiveTab(type);
  return (
    <Fragment>
      <section className="college-section">
        <h2 className="section-title">Explore Colleges by Category</h2>
        <div className="category-tabs">
          <div
            className={`category-card ${activeTab === "btech" ? "active" : ""}`}
            onClick={() => handleTabClick("btech")}
          >
            B.Tech
          </div>
          <div
            className={`category-card ${
              activeTab === "medical" ? "active" : ""
            }`}
            onClick={() => handleTabClick("medical")}
          >
            Medical
          </div>
          <div
            className={`category-card ${
              activeTab === "management" ? "active" : ""
            }`}
            onClick={() => handleTabClick("management")}
          >
            Management
          </div>
        </div>

        <div className="college-cards">
          {colleges[activeTab].map((college, index) => (
            <div key={index} className="college-card">
              <h3>{college.name}</h3>
              <p>{college.location}</p>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Admisson;
