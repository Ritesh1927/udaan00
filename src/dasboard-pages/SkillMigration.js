import React from "react";
import "../../src/dasboard-pages/skilledmigrate.css";
import Skill from "../assets/skilldoc.png";
import Hospital from "../assets/hospital1.jpg";
import Germany from "../assets/Flaggermany.png";
import Australia from "../assets/asutraliaflag.jpg";
import Usflag from "../assets/usflag.png";
import Malta from "../assets/maltaflag.png";
import Portugal from "../assets/portugal.png";
import Dubai from "../assets/dubaiflag.png";
import Sipbanner from "../assets/skilledbanner.jpg";
const SkillMigration = () => {
  return (
    <>
      <div className="hero-banner">{/* <h1>Skilled Migration </h1> */}</div>
      <div className="container skill-migration-container-wrapper ">
        <div className="skill-migrate-img-banner-container">
          <div className="left-migrate-container">
            <h1 className="skill-migration">
              Skilled Migration with Udaan360 - Your Pathway to a Global Career
            </h1>
            <p>
              Udaan360 offers seamless skilled migration services for
              professionals in blue-collar jobs, nursing, and technology
              sectors. We help individuals secure legal work permits, training,
              and placements in top destinations like Germany, Australia, USA,
              Malta, Portugal, Middle East, Japan, and other European countries.
            </p>
          </div>

          <div className="skilled-migrate-first-img-container">
            <img src={Skill} alt="" />
          </div>
        </div>
        <div className="migrate-benifits-container">
          <div className="hospital-img-content">
            <img src={Hospital} alt="" />
          </div>
          <div className="skilled-benefits-container">
            <h1 className="sip-heading">Why Choose Skilled Migration?</h1>
            <ul>
              <li>Higher Salaries & Better Work Conditions</li>
              <li>Legal Work Permits & PR Pathways</li>
              <li>
                Result-Oriented Approach – Smart study plans, regular
                assessments, and doubt-solving
              </li>
              <li>Family Settlement Options</li>
              <li>Training & Upskilling for Global Standards</li>
            </ul>
          </div>
        </div>
        <div className="destinations-or-job-opportunity">
          <h1 className="sip-heading">
            Skilled Migration Destinations & Job Opportunities
          </h1>
          <div className="img-and-job-content">
            <img className="flaglogo" src={Germany} alt="" />{" "}
            <p>
              Germany – High demand for nurses, IT professionals with PR
              pathways.
            </p>
          </div>
          <div className="img-and-job-content">
            <img className="flaglogo" src={Australia} alt="" />{" "}
            <p>
              Opportunities for healthcare workers, trade professionals, and IT
              specialists via skilled visa programs.
            </p>
          </div>
          <div className="img-and-job-content">
            <img className="flaglogo" src={Usflag} alt="" />{" "}
            <p>
              USA – Jobs in healthcare, logistics, hospitality, and technology
              with work permits.
            </p>
          </div>
          <div className="img-and-job-content">
            <img className="flaglogo" src={Malta} alt="" />{" "}
            <p>
              Malta – Growing demand for hospitality workers, electricians, and
              skilled technicians.
            </p>
          </div>
          <div className="img-and-job-content">
            <img className="flaglogo" src={Portugal} alt="" />{" "}
            <p>
              Portugal – Ideal for construction workers, caregivers, and
              blue-collar jobs with a fast-track visa process.
            </p>
          </div>
          <div className="img-and-job-content">
            <img className="flaglogo" src={Dubai} alt="" />{" "}
            <p>
              Dubai – Multiple opportunities in hospitality, healthcare,
              construction, retail, IT, and finance. Tax-Free Income and Fast &
              Easy Work Visa.
            </p>
          </div>
        </div>
      </div>
      <div className="parallax-migration"></div>
      <div className="container skill-migration-container-wrapper">
        <div className="">
          <div className="skilled-benefits-container our-service-migration">
            <h1 className="sip-heading">Our Services Include:</h1>
            <ul>
              <li>
                {" "}
                Job Placement & Employer Tie-Ups – Secure job offers before
                migration.
              </li>
              <li>
                Work Visa & Documentation Assistance – End-to-end support for
                visa applications.
              </li>
              <li>
                Result-Oriented Approach – Smart study plans, regular
                assessments, and doubt-solving
              </li>
              <li>
                {" "}
                Language & Skill Training – Pre-departure training to meet
                international standards.
              </li>
              <li>
                {" "}
                Relocation & Settlement Support – Accommodation, insurance, and
                cultural training.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillMigration;
