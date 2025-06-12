import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import ResetRequest from "./ResetRequest";
import ResetPassword from "./ResetPassword";
import VerifyOtp from "./VerifyOtp";
import { FaTimes } from "react-icons/fa";
import "../../src/auth/authcss/AuthModal.css";

const AuthModal = ({ initialTab = "login", onClose }) => {
  const [currentTab, setCurrentTab] = useState(initialTab);
  const [emailForOtp, setEmailForOtp] = useState("");
  const [resetToken, setResetToken] = useState("");

  const switchToTab = (tabName) => {
    setCurrentTab(tabName);
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
            onLoginSuccess={(email) => {
              setEmailForOtp(email);
              switchToTab("otp");
            }}
            switchToRegister={() => switchToTab("register")}
            switchToReset={() => switchToTab("reset")}
          />
        )}

        {currentTab === "register" && (
          <Register
            onClose={onClose}
            switchToLogin={() => switchToTab("login")}
          />
        )}

        {currentTab === "reset" && (
          <ResetRequest
            onClose={onClose}
            switchToLogin={() => switchToTab("login")}
            onTokenReceived={(token) => {
              setResetToken(token);
              switchToTab("reset-password");
            }}
          />
        )}

        {currentTab === "reset-password" && (
          <ResetPassword
            token={resetToken}
            onSuccess={() => {
              switchToTab("login");
            }}
          />
        )}

        {currentTab === "otp" && (
          <VerifyOtp
            email={emailForOtp}
            onClose={onClose}
            switchToLogin={() => switchToTab("login")}
          />
        )}
      </div>
    </div>
  );
};

export default AuthModal;