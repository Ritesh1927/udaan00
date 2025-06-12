import { useState } from "react";
// Reuse existing Login page
import Login from "./Login";
import Register from "./Register"; // Reuse existing Register page
// import OTPVerification from "./OTPVerification";
// import ForgotPassword from "./ForgotPassword";
import "./authcss/AuthModal.css";

const AuthModal = ({ initialMode = "login", onClose }) => {
  const [mode, setMode] = useState(initialMode); // "login", "register", "otp", "forgotPassword"

  return (
    <div className="auth-modal-overlay ">
      <div className="auth-modal-content">
        <button
          onClick={onClose}
          className="auth-modal-close"
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="auth-modal-body">
          {mode === "login" && (
            <Login
              onSwitchToRegister={() => setMode("register")}
              onForgotPassword={() => setMode("forgotPassword")}
            />
          )}
          {mode === "register" && (
            <Register
              onSwitchToLogin={() => setMode("login")}
              onClose={onClose}
              onRegisterSuccess={(user) => {
                // Handle post-registration logic
                console.log("Registered user:", user);
              }}
            />
          )}
          {/* {mode === "otp" && <OTPVerification onClose={onClose} />}
          {mode === "forgotPassword" && <ForgotPassword onClose={onClose} />} */}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
