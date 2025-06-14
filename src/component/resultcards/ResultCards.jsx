import { useNavigate } from "react-router-dom";
import React from "react";
import {
  FaLaptopCode,
  FaUniversity,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaTrophy,
} from "react-icons/fa";
import "./ResultCards.css";

const ResultCards = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "JEE Main Result",
      icon: <FaLaptopCode size={32} />,
      iconClass: "jee-main",
      onClick: () =>
        window.open(
          "https://examinationservices.nic.in/resultservices/JEEMAIN2025S2P1/Login",
          "_blank"
        ),
    },
    {
      title: "JEE Advanced Result",
      icon: <FaUniversity size={32} />,
      iconClass: "jee-advanced ",
      onClick: () => window.open("https://jeeadv.ac.in/", "_blank"),
    },
    {
      title: "10th Result",
      icon: <FaChalkboardTeacher size={32} />,
      iconClass: "tenth-result",
      onClick: () => navigate("/boards/10th"),
    },
    {
      title: "12th Result",
      icon: <FaGraduationCap size={32} />,
      iconClass: "twelfth-result",
      onClick: () => navigate("/boards/12th"),
    },
  ];

  return (
    <div className="results-ribbon-section">
      <div className="results-ribbon-container">
        <div className="ribbon-header">
          <div className="ribbon-title">
            <i className="fas fa-trophy">
              <FaTrophy />
            </i>
            <span>Check Your Result Now</span>
          </div>
          <div className="ribbon-subtitle">
            Get instant access to your exam results
          </div>
        </div>
        <div className="modern-card-container results-grid">
          {cards.map((card, index) => (
            <div className="result-card" onClick={card.onClick} key={index}>
              <div className={`result-icon ${card.iconClass}`}>
                <i>{card.icon}</i>
              </div>
              <div className="result-name">{card.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultCards;
