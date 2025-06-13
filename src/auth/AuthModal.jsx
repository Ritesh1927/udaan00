import React from "react";
import Login from "./Login";
import Register from "./Register";
import ResetRequest from "./ResetRequest";
import ResetPassword from "./ResetPassword";
import VerifyOtp from "./VerifyOtp";
import Profile from "./Profile";
import { FaTimes } from "react-icons/fa";
import "../../src/auth/authcss/AuthModal.css";
import { useAuthModal } from "./useAuthModal";

const AuthModal = () => {
  const { isOpen, currentTab, closeModal } = useAuthModal();

  if (!isOpen) return null;

  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal">
        <button className="close-btn" onClick={closeModal}>
          <FaTimes />
        </button>

        {currentTab === "login" && <Login />}
        {currentTab === "register" && <Register />}
        {currentTab === "reset" && <ResetRequest />}
        {currentTab === "reset-password" && <ResetPassword />}
        {currentTab === "otp" && <VerifyOtp />}
        {currentTab === "profile" && <Profile />}
      </div>
    </div>
  );
};

export default AuthModal;