import React, { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuthModal } from "./useAuthModal";
import { useAuth } from "./authContext";
import "../../src/auth/authcss/Register.css";

export default function Register({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { switchTab, currentTab } = useAuthModal(); // Added currentTab for toggle
  // const { switchTab } = useAuthModal(); // Get modal navigation methods
  const { login } = useAuth();

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/register", form);
      setMessage(res.data.message);

      // ✅ Switch to login tab after successful registration
      if (res.data.success || res.data.message) {
        switchTab("login");
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Error");
    }
  };

  const switchToLogin = () => switchTab("login");
  const switchToRegister = () => switchTab("register");

  return (
    <div className="register-modal-container">
      <div className="auth-tabs">
        <button
          className={`auth-tab-btn ${currentTab === "login" ? "active" : ""}`}
          onClick={switchToLogin}
        >
          Login
        </button>
        <button
          className={`auth-tab-btn ${
            currentTab === "register" ? "active" : ""
          }`}
          onClick={switchToRegister}
        >
          Register
        </button>
      </div>
      {/* <h2>Sign Up</h2> */}
      {/* <p className="create-tag-register">Create your account to get started</p> */}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Email">Email *</label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile *</label>
          <input
            name="mobile"
            type="text"
            placeholder="Mobile Number"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <div className="password-input-wrapper">
            <label htmlFor="Password">Password *</label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <span onClick={togglePassword} className=" register-toggle">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        <button className="form-submit" type="submit">
          Register
        </button>
        {/* 
        <div className="auth-switch-text">
          Already have an account?{" "}
          <button
            type="button"
            className="text-link"
            onClick={() => switchTab("login")}
          >
            Log In
          </button>
        </div> */}

        {message && <p className="auth-message">{message}</p>}
      </form>
    </div>
  );
}
