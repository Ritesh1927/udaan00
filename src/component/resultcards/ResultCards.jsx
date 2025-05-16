import { useNavigate } from "react-router-dom";
import React from "react";
import {
  FaLaptopCode,
  FaUniversity,
  FaChalkboardTeacher,
  FaGraduationCap,
} from "react-icons/fa";
import "./ResultCards.css";

const ResultCards = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "JEE Main Result",
      icon: <FaLaptopCode size={32} />,
      onClick: () =>
        window.open(
          "https://examinationservices.nic.in/resultservices/JEEMAIN2025S2P1/Login",
          "_blank"
        ),
    },
    {
      title: "JEE Advanced Result",
      icon: <FaUniversity size={32} />,
      onClick: () => window.open("https://jeeadv.ac.in/", "_blank"),
    },
    {
      title: "10th Result",
      icon: <FaChalkboardTeacher size={32} />,
      onClick: () => navigate("/boards/10th"),
    },
    {
      title: "12th Result",
      icon: <FaGraduationCap size={32} />,
      onClick: () => navigate("/boards/12th"),
    },
  ];

  return (
    <div className="home-container">
      <div className="modern-card-container">
        {cards.map((card, index) => (
          <div
            className="modern-result-card"
            onClick={card.onClick}
            key={index}
          >
            <div className="card-icon">{card.icon}</div>
            <div className="card-title">{card.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultCards;
