import React, { useState } from "react";
import { useAuth } from "./authContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../../src/auth/authcss/Auth.css";
import axios from "axios";
import { useAuthModal } from "./useAuthModal";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { switchTab, currentTab } = useAuthModal();
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  // const { switchTab } = useAuthModal();

  const switchToReset = () => switchTab("reset");
  const switchToRegister = () => switchTab("register");
  const switchToLogin = () => switchTab("login");

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await axios.post("/api/auth/login", { email, password });

      if (res.data.message === "OTP sent to email") {
        switchTab("otp", { email }); // Switch to OTP tab and pass email
      } else if (res.data.token) {
        login(res.data.user, res.data.token);
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-form-container">
      <div className="auth-tab-toggle">
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
              className="pass-word"
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

        <button className="forgot-paswrd" type="button" onClick={switchToReset}>
          Forgot password?
        </button>
        <div>
          <button className="form-submit" type="submit">
            Login To Your Account
          </button>
        </div>

        {/* <button type="button" onClick={switchToRegister}>
          Register
        </button> */}

        {message && <p className="auth-message">{message}</p>}
      </form>
    </div>
  );
}
