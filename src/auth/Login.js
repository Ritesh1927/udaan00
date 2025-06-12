import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "./authContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../src/auth/authcss/Auth.css";

export default function Login({ onClose, onLoginSuccess, switchToRegister, switchToReset }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await axios.post("/api/auth/login", { email, password });

      if (res.data.message === "OTP sent to email") {
        onLoginSuccess(email);
      } else {
        login(res.data.token);
        onClose();
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Log In</h2>
      <p className="auth-subtitle">Welcome back! Please enter your details</p>
      
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group password-group">
          <label htmlFor="password">Password</label>
          <div className="password-input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span onClick={togglePassword} className="password-toggle">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        <button type="button" className="text-link" onClick={switchToReset}>
          Forgot password?
        </button>

        <button type="submit" className="auth-submit-btn">
          Log in
        </button>

        {message && <p className="auth-message">{message}</p>}

        <div className="auth-switch">
          Don't have an account?{" "}
          <button type="button" className="text-link" onClick={switchToRegister}>
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}