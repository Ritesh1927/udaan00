import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import ResetRequest from "./ResetRequest";
import VerifyOtp from "./VerifyOtp";
import { FaTimes } from "react-icons/fa";
import "../../src/auth/authcss/AuthModal.css";

const AuthModal = ({ initialTab = "login", onClose }) => {
  const [currentTab, setCurrentTab] = useState(initialTab);
  const [emailForOtp, setEmailForOtp] = useState("");

  const handleLoginSuccess = (email) => {
    if (email) {
      setEmailForOtp(email);
      setCurrentTab("otp");
    } else {
      onClose();
    }
  };

  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal">
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>
        
        {currentTab === "login" && (
          <Login 
            onClose={onClose}
            onLoginSuccess={handleLoginSuccess}
            switchToRegister={() => setCurrentTab("register")}
            switchToReset={() => setCurrentTab("reset")}
          />
        )}

        {currentTab === "register" && (
          <Register 
            onClose={onClose}
            switchToLogin={() => setCurrentTab("login")}
          />
        )}

        {currentTab === "reset" && (
          <ResetRequest 
            onClose={onClose}
            switchToLogin={() => setCurrentTab("login")}
          />
        )}

        {currentTab === "otp" && (
          <VerifyOtp 
            email={emailForOtp}
            onClose={onClose}
            switchToLogin={() => setCurrentTab("login")}
          />
        )}
      </div>
    </div>
  );
};

export default AuthModal;