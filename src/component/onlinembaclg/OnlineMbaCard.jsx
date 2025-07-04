import React from "react";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
import "./OnlineMbaClg.css";
const OnlineMbaCard = ({ college }) => {
  return (
    <div className="paris-card">
      <div className="paris-card-inner">
        {/* Image section */}
        <div className="paris-image-section">
          <div className="image-wrapper">
            <img
              src={college.image}
              alt={college.name}
              className="paris-image"
            />
            {college.isNew && (
              <div className="tag-new-course">
                <p>new course</p>
              </div>
            )}
          </div>
        </div>

        {/* Details Section */}
        <div className="paris-details">
          <div className="paris-content">
            <p className="school-name">{college.name}</p>
            <p className="program-title">{college.title}</p>
            <p className="highlight-badge">{college.highlight}</p>

            <div className="info-section">
              <div className="info-item">
                <FaGraduationCap className="info-icon" />
                <p>{college.degree}</p>
              </div>
              <div className="info-item">
                <FaCalendarAlt className="info-icon" />
                <p>{college.duration}</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="button-group">
            <button className="btn-outline">
              {" "}
              <a
                href="https://wa.me/917355308287?text=hello%20%2C%20i%20want%20to%20know%20more"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                View Program{" "}
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineMbaCard;
