import React from "react";
import "../logout/Logout.css";
const Logout = ({ isOpen, onClose, onLogout }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2 className="modal-title">Confirm Logout</h2>
        <p className="modal-message">Are you sure you want to logout?</p>
        <div className="modal-actions">
          <button onClick={onClose} className="btn cancel-btn">
            Cancel
          </button>
          <button onClick={onLogout} className="btn logout-btn">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
