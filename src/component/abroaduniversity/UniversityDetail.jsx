import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
// import "./UniversityDetail.css";

const UniversityDetail = () => {
  const { name } = useParams();
  const { state } = useLocation();
  const uni = state?.uni;

  const navigate = useNavigate();

  if (!uni) {
    return <p>University data not available.</p>;
  }

  return (
    <div className="uni-detail-container">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Go Back
      </button>
      <h1>{uni.name}</h1>
      <img src={uni.logo} alt={uni.name} className="uni-detail-logo" />
      <p><strong>Location:</strong> {uni.location}</p>
      <p><strong>Courses Offered:</strong> {uni.courses}</p>

      {uni.about && (
        <p><strong>About:</strong> {uni.about}</p>
      )}
      {uni.tuition && (
        <p><strong>Tuition Fees:</strong> {uni.tuition}</p>
      )}
      {uni.intake && (
        <p><strong>Intake Months:</strong> {uni.intake}</p>
      )}
      {uni.website && (
        <p>
          <strong>Official Site:</strong>{" "}
          <a href={uni.website} target="_blank" rel="noreferrer">
            Visit Website
          </a>
        </p>
      )}
    </div>
  );
};

export default UniversityDetail;
