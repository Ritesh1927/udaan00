import React, { useContext } from 'react';
import '../logout/Logout.css';
import AuthContext from '../../context/AuthContext';

const Logout = ({ isOpen, onClose }) => {
  const { logout } = useContext(AuthContext);

  if (!isOpen) return null;

  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2 className="modal-title">Confirm Logout</h2>
        <p className="modal-message">Are you sure you want to logout?</p>
        <div className="modal-actions">
          <button onClick={onClose} className="btn cancel-btn">
            Cancel
          </button>
          <button onClick={handleLogout} className="btn logout-btn">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;