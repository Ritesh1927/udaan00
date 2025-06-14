import React, { useState } from "react";
import "./LeadTile.css";
import { FaGraduationCap } from "react-icons/fa";
import LeadForm from "./LeadForm";

function LeadTile() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="fixed-lead-button-fix">
        <button
          className="fixed-lead-btn-fix"
          onClick={handleOpenModal}
          title="Get Free Counselling"
        >
          <i className="fas fa-graduation-cap">
            {" "}
            <FaGraduationCap />
          </i>
          <div className="fixed-lead-text">
            <div className="main-text">Free</div>
            <div className="sub-text">Counselling</div>
          </div>
        </button>
      </div>

      {isModalOpen && <LeadForm onClose={handleCloseModal} />}
    </>
  );
}

export default LeadTile;
