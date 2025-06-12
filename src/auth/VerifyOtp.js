import React, { useState } from "react";
import { useAuth } from "./authContext";
import axios from "axios";
import "../../src/auth/authcss/Reset.css";

export default function VerifyOtp({ email, onClose, switchToLogin }) {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/verify-otp", { email, otp });
      login(res.data.user, res.data.token);
      onClose();
    } catch (err) {
      setMessage(err.response?.data?.message || "OTP verification failed");
    }
  };

  return (
    <div className="otp-form-container">
      <h2>Verify OTP</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          required
        />
        <button type="submit">Verify</button>
      </form>
      <button type="button" onClick={switchToLogin}>
        Back to Login
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}