import React, { useEffect, useState } from "react";
import "../footer/Footer.css";
const FooterUniversity = () => {
  const [selectedCountry, setSelectedCountry] = useState("uk");

  useEffect(() => {
    const allCards = document.querySelectorAll(
      ".university-card, .university-card-footer"
    );
    allCards.forEach((card) => {
      const country = card.getAttribute("data-country");
      if (country === selectedCountry) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    // Update active tab
    const allTabs = document.querySelectorAll(".country-tab");
    allTabs.forEach((tab) => {
      if (
        tab.textContent
          .trim()
          .toLowerCase()
          .includes(getLabelForCountry(selectedCountry))
      ) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });
  }, [selectedCountry]);

  const getLabelForCountry = (code) => {
    switch (code) {
      case "uk":
        return "united kingdom";
      case "usa":
        return "usa";
      case "germany":
        return "germany";
      case "canada":
        return "canada";
      case "australia":
        return "australia";
      default:
        return "";
    }
  };

  return (
    <>
      <div className="universities-section">
        <h3 className="universities-heading">
          Top Universities to Study Abroad
        </h3>

        {/* Country Tabs */}
        <div className="country-tabs">
          <button
            className="country-tab active"
            onClick={() => setSelectedCountry("uk")}
          >
            United Kingdom
          </button>
          <button
            className="country-tab"
            onClick={() => setSelectedCountry("usa")}
          >
            USA
          </button>
          <button
            className="country-tab"
            onClick={() => setSelectedCountry("germany")}
          >
            Germany
          </button>
          <button
            className="country-tab"
            onClick={() => setSelectedCountry("canada")}
          >
            Canada
          </button>
          <button
            className="country-tab"
            onClick={() => setSelectedCountry("australia")}
          >
            Australia
          </button>
        </div>

        {/* <!-- Universities Grid --> */}
        <div className="universities-grid">
          {/* <!-- UK Universities (default) --> */}
          <div className="university-card-footer" data-country="uk">
            <div className="university-info">
              <h4 className="university-name">University of Birmingham</h4>
              <p className="university-location">Birmingham, United Kingdom</p>
              <span className="course-count">497+ Courses</span>
            </div>
          </div>

          <div className="university-card-footer" data-country="uk">
            <div className="university-info">
              <h4 className="university-name">Coventry University</h4>
              <p className="university-location">
                Priory Street, Coventry, United Kingdom
              </p>
              <span className="course-count">519+ Courses</span>
            </div>
          </div>

          <div className="university-card-footer" data-country="uk">
            <div className="university-info">
              <h4 className="university-name">University of Greenwich</h4>
              <p className="university-location">London, United Kingdom</p>
              <span className="course-count">450+ Courses</span>
            </div>
          </div>

          <div className="university-card-footer" data-country="uk">
            <div className="university-info">
              <h4 className="university-name">Middlesex University</h4>
              <p className="university-location">
                Hendon, London, United Kingdom
              </p>
              <span className="course-count">503+ Courses</span>
            </div>
          </div>

          <div className="university-card-footer" data-country="uk">
            <div className="university-info">
              <h4 className="university-name">Heriot Watt University</h4>
              <p className="university-location">
                Riccarton, Edinburgh, United Kingdom
              </p>
              <span className="course-count">335+ Courses</span>
            </div>
          </div>

          <div className="university-card-footer" data-country="uk">
            <div className="university-info">
              <h4 className="university-name">Aston University</h4>
              <p className="university-location">Birmingham, United Kingdom</p>
              <span className="course-count">373+ Courses</span>
            </div>
          </div>

          {/* <!-- USA Universities --> */}
          <div
            className="university-card-footer"
            data-country="usa"
            style={{ display: "none" }}
          >
            <div className="university-info">
              <h4 className="university-name">
                Florida International University
              </h4>
              <p className="university-location">Miami, United States</p>
              <span className="course-count">379+ Courses</span>
            </div>
          </div>

          <div
            className="university-card-footer"
            data-country="usa"
            style={{ display: "none" }}
          >
            <div className="university-info">
              <h4 className="university-name">Auburn University</h4>
              <p className="university-location">Auburn, United States</p>
              <span className="course-count">451+ Courses</span>
            </div>
          </div>

          <div
            className="university-card-footer"
            data-country="usa"
            style={{ display: "none" }}
          >
            <div className="university-info">
              <h4 className="university-name">Roosevelt University</h4>
              <p className="university-location">Chicago, United States</p>
              <span className="course-count">385+ Courses</span>
            </div>
          </div>

          {/* <!-- Germany Universities --> */}
          <div
            className="university-card-footer"
            data-country="germany"
            style={{ display: "none" }}
          >
            <div className="university-info">
              <h4 className="university-name">
                The Ludwig Maximilian University of Munich
              </h4>
              <p className="university-location">Bavaria, Germany</p>
              <span className="course-count">425+ Courses</span>
            </div>
          </div>

          <div
            className="university-card-footer"
            data-country="germany"
            style={{ display: "none" }}
          >
            <div className="university-info">
              <h4 className="university-name">Heidelberg University</h4>
              <p className="university-location">Baden-Württemberg, Germany</p>
              <span className="course-count">378+ Courses</span>
            </div>
          </div>

          {/* <!-- Canada Universities --> */}
          <div
            className="university-card-footer"
            data-country="canada"
            style={{ display: "none" }}
          >
            <div className="university-info">
              <h4 className="university-name">University Canada West</h4>
              <p className="university-location">
                Granville Street, Vancouver, Canada
              </p>
              <span className="course-count">457+ Courses</span>
            </div>
          </div>

          <div
            className="university-card-footer"
            data-country="canada"
            style={{ display: "none" }}
          >
            <div className="university-info">
              <h4 className="university-name">Great Plains College</h4>
              <p className="university-location">Swift Current, SK, Canada</p>
              <span className="course-count">366+ Courses</span>
            </div>
          </div>

          <div
            className="university-card-footer"
            data-country="canada"
            style={{ display: "none" }}
          >
            <div className="university-info">
              <h4 className="university-name">Parkland College</h4>
              <p className="university-location">
                Sprystai Way, Yorkton, Canada
              </p>
              <span className="course-count">366+ Courses</span>
            </div>
          </div>

          {/* <!-- Australia Universities --> */}
          <div
            className="university-card-footer"
            data-country="australia"
            style={{ display: "none" }}
          >
            <div className="university-info">
              <h4 className="university-name">Parklands Christian College</h4>
              <p className="university-location">Park Ridge QLD, Australia</p>
              <span className="course-count">366+ Courses</span>
            </div>
          </div>

          <div
            className="university-card-footer"
            data-country="australia"
            style={{ display: "none" }}
          >
            <div className="university-info">
              <h4 className="university-name">The University of Melbourne</h4>
              <p className="university-location">
                Grattan Street Parkville, Victoria Australia
              </p>
              <span className="course-count">411+ Courses</span>
            </div>
          </div>

          <div
            className="university-card-footer"
            data-country="australia"
            style={{ display: "none" }}
          >
            <div className="university-info">
              <h4 className="university-name">Monash University</h4>
              <p className="university-location">Victoria, Australia</p>
              <span className="course-count">411+ Courses</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterUniversity;
