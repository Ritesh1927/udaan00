import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { useAuth } from "../../auth/authContext"; // Assuming authContext is in this path

import "./LoginModal.css"; // Your existing modal styling

const LoginModal = ({ isOpen, onClose }) => {
  const [isRegister, setIsRegister] = useState(false); // To toggle between Login and Register tabs
  const [modalStep, setModalStep] = useState("auth"); // 'auth' for login/register, 'otp' for OTP verification
  const [otp, setOtp] = useState(""); // Correctly defined otp state

  // Consolidated states for both Login and Register forms
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // New state for register
  const [name, setName] = useState(""); // New state for register
  const [mobile, setMobile] = useState(""); // New state for register

  const [showPassword, setShowPassword] = useState(false); // For both login & register password fields
  const [message, setMessage] = useState(""); // Single message state for all operations

  const navigate = useNavigate();
  const { login: authContextLogin } = useAuth();

  // Effect to manage body scroll and reset states on modal close
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Clear all form states and reset step when modal closes
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setName("");
      setMobile("");
      setOtp(""); // Ensure OTP state is also cleared on close
      setMessage("");
      setIsRegister(false); // Reset to login tab
      setModalStep("auth"); // Reset to auth step
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null; // Don't render if not open
  }

  // Utility delay function
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Toggle password visibility (now applies to all password fields)
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Handle login form submission
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages
    try {
      const res = await axios.post("/api/auth/login", { email, password });

      if (res.data.message === "OTP sent to email") {
        setMessage("OTP sent to your email. Please verify.");
        setModalStep("otp"); // Switch to OTP step
      } else if (res.data.token) {
        authContextLogin(res.data.user, res.data.token);
        setMessage("Login successful! Redirecting...");
        await delay(1500);
        onClose();
        navigate("/");
      } else {
        setMessage("Unexpected response from server.");
      }
    } catch (err) {
      // THIS CATCH BLOCK IS WHERE THE 504 ERROR IS HANDLED ON THE CLIENT SIDE
      // The error originates from the server, not this code.
      setMessage(
        err.response?.data?.message || "Login failed: Server Timeout or Error."
      );
      console.error("Login Error:", err);
      if (err.code === "ECONNABORTED" || err.message.includes("timeout")) {
        setMessage(
          "Login failed: Server took too long to respond. Please try again."
        );
      } else if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setMessage(
          err.response.data?.message ||
            `Login failed: ${err.response.status} ${err.response.statusText}`
        );
      } else if (err.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an http.ClientRequest in node.js
        setMessage(
          "Login failed: No response from server. Check your network or server status."
        );
      } else {
        // Something happened in setting up the request that triggered an Error
        setMessage(`Login failed: ${err.message}`);
      }
    }
  };

  // Handle OTP verification submission
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages
    try {
      const res = await axios.post("/api/auth/verify-otp", {
        email: email, // Use the email already stored in state
        otp,
      });
      authContextLogin(res.data.user, res.data.token);
      setMessage("OTP verified. Login successful! Redirecting...");
      await delay(1000);
      onClose();
      navigate("/");
    } catch (err) {
      // THIS CATCH BLOCK IS WHERE THE 504 ERROR IS HANDLED ON THE CLIENT SIDE
      setMessage(
        err.response?.data?.message ||
          "OTP verification failed: Server Timeout or Error."
      );
      console.error("OTP Verification Error:", err);
      if (err.code === "ECONNABORTED" || err.message.includes("timeout")) {
        setMessage(
          "OTP verification failed: Server took too long to respond. Please try again."
        );
      } else if (err.response) {
        setMessage(
          err.response.data?.message ||
            `OTP verification failed: ${err.response.status} ${err.response.statusText}`
        );
      } else if (err.request) {
        setMessage(
          "OTP verification failed: No response from server. Check your network or server status."
        );
      } else {
        setMessage(`OTP verification failed: ${err.message}`);
      }
    }
  };

  // Handle Register form submission
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      const res = await axios.post("/api/auth/register", {
        name,
        email,
        mobile,
        password,
      });

      setMessage(res.data.message || "Registration successful!");
      // Assuming registration might also send an OTP or directly log in
      if (res.data.message === "OTP sent to email") {
        setModalStep("otp"); // Switch to OTP step if OTP is part of registration flow
      } else if (res.data.token) {
        authContextLogin(res.data.user, res.data.token);
        setMessage("Registration successful! Logging in...");
        await delay(1500);
        onClose();
        navigate("/");
      } else {
        // If registration is successful but doesn't log in directly or send OTP
        setMessage("Registration successful! Please log in.");
        setIsRegister(false); // Switch to login tab
        setEmail(""); // Clear email/password fields for next login attempt
        setPassword("");
        setConfirmPassword("");
        setName("");
        setMobile("");
      }
    } catch (err) {
      // THIS CATCH BLOCK IS WHERE THE 504 ERROR IS HANDLED ON THE CLIENT SIDE
      setMessage(
        err.response?.data?.message ||
          "Registration failed: Server Timeout or Error."
      );
      console.error("Registration Error:", err);
      if (err.code === "ECONNABORTED" || err.message.includes("timeout")) {
        setMessage(
          "Registration failed: Server took too long to respond. Please try again."
        );
      } else if (err.response) {
        setMessage(
          err.response.data?.message ||
            `Registration failed: ${err.response.status} ${err.response.statusText}`
        );
      } else if (err.request) {
        setMessage(
          "Registration failed: No response from server. Check your network or server status."
        );
      } else {
        setMessage(`Registration failed: ${err.message}`);
      }
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <FiX size={24} />
        </button>

        <div className="modal-body">
          <div className="modal-left-panel">
            <h2>Welcome to Udaan 360</h2>
            <p>Your gateway to a brighter future</p>
            <div className="modal-features">
              <div>
                <span className="icon">🏆</span> 25,000+ Success Stories
              </div>
              <div>
                <span className="icon">🎓</span> Study Abroad Programs
              </div>
              <div>
                <span className="icon">🤝</span> Career Counselling
              </div>
              <div>
                <span className="icon">💡</span> Expert Guidance
              </div>
              <div>
                <span className="icon">🚀</span> Skill Development
              </div>
            </div>
          </div>

          <div className="modal-right-panel">
            {modalStep === "auth" ? (
              <>
                <div className="auth-tabs">
                  <button
                    className={`tab-button ${!isRegister ? "active" : ""}`}
                    onClick={() => {
                      setIsRegister(false);
                      setMessage("");
                      setEmail("");
                      setPassword("");
                      setConfirmPassword(""); // Clear confirm password
                      setName("");
                      setMobile("");
                    }}
                  >
                    Login
                  </button>
                  <button
                    className={`tab-button ${isRegister ? "active" : ""}`}
                    onClick={() => {
                      setIsRegister(true);
                      setMessage("");
                      setEmail("");
                      setPassword("");
                      setConfirmPassword(""); // Clear confirm password
                      setName("");
                      setMobile("");
                    }}
                  >
                    Register
                  </button>
                </div>

                {!isRegister ? ( // Login Form
                  <form className="auth-form" onSubmit={handleLoginSubmit}>
                    <div className="form-group">
                      <label htmlFor="login-email">Email Address</label>
                      <input
                        type="email"
                        id="login-email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="login-password">Password</label>
                      <div className="password-input-wrapper">
                        <input
                          type={showPassword ? "text" : "password"}
                          id="login-password"
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <span
                          onClick={togglePasswordVisibility}
                          className="toggle-password-icon"
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                      </div>
                    </div>

                    <Link
                      to="/reset-request"
                      className="forgot-password"
                      onClick={onClose}
                    >
                      Forgot your password?
                    </Link>

                    <button type="submit" className="submit-btn login-btn">
                      Login to Your Account
                    </button>

                    {message && <p className="auth-message">{message}</p>}

                    <div className="or-separator">
                      <span>or continue with</span>
                    </div>
                    <div className="social-login">
                      <button type="button" className="google-btn">
                        <FcGoogle size={20} /> Google
                      </button>
                      <button type="button" className="facebook-btn">
                        <FaFacebook size={20} /> Facebook
                      </button>
                    </div>
                    <p className="signup-link-text">
                      Don't have an account?{" "}
                      <Link
                        to="#" // Use '#' to stay in modal, just switch tab
                        className="signup-link"
                        onClick={() => {
                          setIsRegister(true);
                          setMessage(""); // Clear message when switching tabs
                          setEmail("");
                          setPassword("");
                          setConfirmPassword("");
                          setName("");
                          setMobile("");
                        }}
                      >
                        Sign up
                      </Link>
                    </p>
                  </form>
                ) : (
                  // Register Form
                  <form className="auth-form" onSubmit={handleRegisterSubmit}>
                    <div className="form-group">
                      <label htmlFor="register-name">Full Name</label>
                      <input
                        name="name"
                        id="register-name"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="register-email">Email Address</label>
                      <input
                        name="email"
                        id="register-email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="register-mobile">Mobile Number</label>
                      <input
                        name="mobile"
                        id="register-mobile"
                        type="text"
                        placeholder="Mobile Number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="register-password">Password</label>
                      <div className="password-input-wrapper">
                        <input
                          name="password"
                          id="register-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <span
                          onClick={togglePasswordVisibility} // Use common toggle
                          className="toggle-password-icon"
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="confirm-password">Confirm Password</label>
                      <input
                        name="confirmPassword"
                        id="confirm-password"
                        type={showPassword ? "text" : "password"} // Use common toggle
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>

                    <button type="submit" className="submit-btn register-btn">
                      Register Now
                    </button>
                    {message && <p className="auth-message">{message}</p>}

                    <div className="or-separator">
                      <span>or continue with</span>
                    </div>
                    <div className="social-login">
                      <button type="button" className="google-btn">
                        <FcGoogle size={20} /> Google
                      </button>
                      <button type="button" className="facebook-btn">
                        <FaFacebook size={20} /> Facebook
                      </button>
                    </div>
                    <p className="signup-link-text">
                      Already have an account?{" "}
                      <Link
                        to="#" // Use '#' to stay in modal, just switch tab
                        className="signup-link"
                        onClick={() => {
                          setIsRegister(false); // Switch to login tab
                          setMessage("");
                          setEmail("");
                          setPassword("");
                          setConfirmPassword("");
                          setName("");
                          setMobile("");
                        }}
                      >
                        Login
                      </Link>
                    </p>
                  </form>
                )}
              </>
            ) : (
              // OTP Verification Form
              <div className="otp-section">
                <h2>Verify OTP</h2>
                <p>
                  An OTP has been sent to **{email}**. Please enter it below.
                </p>
                <form onSubmit={handleOtpSubmit} className="auth-form">
                  <div className="form-group">
                    <label htmlFor="otp-input">Enter OTP</label>
                    <input
                      type="text"
                      id="otp-input"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="e.g., 123456"
                      required
                      maxLength="6"
                    />
                  </div>
                  <button type="submit" className="submit-btn login-btn">
                    Verify OTP
                  </button>
                  {message && <p className="auth-message">{message}</p>}
                  <p className="resend-otp-text">
                    Didn't receive OTP?{" "}
                    <button
                      type="button"
                      className="resend-otp-btn"
                      onClick={async () => {
                        setMessage("Resending OTP...");
                        try {
                          // Assuming your backend has a resend OTP endpoint
                          await axios.post("/api/auth/resend-otp", { email });
                          setMessage("OTP resent successfully!");
                        } catch (error) {
                          setMessage(
                            error.response?.data?.message ||
                              "Failed to resend OTP."
                          );
                        }
                      }}
                    >
                      Resend OTP
                    </button>
                  </p>
                  <button
                    type="button"
                    className="back-to-login-btn"
                    onClick={() => {
                      setModalStep("auth"); // Go back to login/register form
                      setMessage("");
                      setOtp("");
                    }}
                  >
                    Back to Login
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
