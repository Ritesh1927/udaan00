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
import {
  FaGraduationCap,
  FaGlobe,
  FaBriefcase,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

const AuthModal = () => {
  const { isOpen, currentTab, closeModal } = useAuthModal();

  if (!isOpen) return null;

  return (
    <div className="auth-modal-overlay  popup-overlay">
      <div className="login-popup">
        <div className="popup-header">
          <button className="popup-close" onClick={closeModal}>
            <i className="fas fa-times">
              <FaTimes />
            </i>
          </button>
          <h2 className="popup-title">
            Welcome to
            <br />
            Udaan 360
          </h2>
          <p className="popup-subtitle">Your gateway to a brighter future</p>
          <div class="popup-features">
            <ul>
              <li>
                <i className="fas fa-graduation-cap">
                  <FaGraduationCap />
                </i>{" "}
                25,000+ Success Stories
              </li>
              <li>
                <i className="fas fa-globe">
                  <FaGlobe />
                </i>{" "}
                Study Abroad Programs
              </li>
              <li>
                <i className="fas fa-briefcase">
                  <FaBriefcase />
                </i>{" "}
                Career Counselling
              </li>
              <li>
                <i className="fas fa-users">
                  <FaUsers />
                </i>{" "}
                Expert Guidance
              </li>
              <li>
                <i className="fas fa-chart-line">
                  <FaChartLine />
                </i>{" "}
                Skill Development
              </li>
            </ul>
          </div>
        </div>
        <div className="popup-body">
          {currentTab === "login" && <Login />}
          {currentTab === "register" && <Register />}
          {currentTab === "reset" && <ResetRequest />}
          {currentTab === "reset-password" && <ResetPassword />}
          {currentTab === "otp" && <VerifyOtp />}
          {currentTab === "profile" && <Profile />}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
