import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "../utils/api";
import { useAuth } from "./authContext";
import react from "react";
import "../../src/auth/authcss/Auth.css";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  // ..........................show  passwrod
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await axios.post("/api/auth/login", { email, password });

      if (res.data.message === "OTP sent to email") {
        setMessage("OTP sent to email");
        // Navigate to verify-otp and pass email via state
        navigate("/verify-otp", { state: { email } });
      } else {
        setMessage("Unexpected response from server");
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-from-main-container">
      <div className="login-form-wrapper">
        <div className="login-left">
          <h2>Log In</h2>
          <p>Welcome back! Please enter your details</p>
          <form onSubmit={handleSubmit}>
            <label className="pass-label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="login-pass-wrapper">
              <label className="pass-label" htmlFor="password">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="login-pasword-2"
              />
              <span
                onClick={togglePassword}
                className="toggle-password-icon-login"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <Link to="/reset-request">Forgot password?</Link>
            <button type="submit">Log in</button>
            <p>{message}</p>
            {/* <div className="social-buttons">
              <button>
                <img src="/assets/google-icon.png" alt="" /> Google
              </button>
              <button>
                <img src="/assets/facebook-icon.png" alt="" /> Facebook
              </button>
            </div> */}
            <p>
              Don't have an account? <Link to="/register">Sign up</Link>
            </p>
          </form>
        </div>
        <div className="login-right"></div>
      </div>
    </div>
    // <div className="login-from-main-container container">
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="email"
    //       placeholder="Email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       required
    //     />
    //     <input
    //       type="password"
    //       placeholder="Password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       required
    //     />
    //     <button type="submit">Login</button>
    //     <Link to="/register">Register</Link>
    //     <p>{message}</p>
    //     <Link to="/reset-request">Forgot Password</Link>
    //   </form>
    // </div>
  );
}
