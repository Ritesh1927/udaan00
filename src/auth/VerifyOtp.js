import React, { useState } from "react";
import api from "../utils/api";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./authContext";
import "../../src/auth/authcss/Reset.css";
import axios from "axios";

export default function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/verify-otp", {
        email: state.email,
        otp,
      });
      login(res.data.user, res.data.token);
      setMessage("Login successful");
      navigate("/profile");
    } catch (err) {
      setMessage(err.response?.data?.message || "OTP verification failed");
    }
  };

  return (
    <div className="reset-main-container">
      <div className="reset-form-wrapper">
        <div className="reset-left">
          <h2>Verify OTP</h2>
          <p>Enter the OTP sent to your email.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              required
            />
            <button type="submit">Verify OTP</button>
            {/* <p>{message}</p> */}
          </form>
          <p style={{ marginTop: "20px", color: "red" }}>{message}</p>
        </div>
        <dixv className="reset-right" />
      </div>
    </div>
  );
}
