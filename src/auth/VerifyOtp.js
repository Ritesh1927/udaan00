import React, { useState } from "react";
import { useAuth } from "./authContext";
import axios from "axios";
import "../../src/auth/authcss/Reset.css";
import { useAuthModal } from "./useAuthModal";

export default function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const { login } = useAuth();
  const { modalData, switchTab } = useAuthModal();
  const email = modalData.email;
  const { closeModal } = useAuthModal();

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/verify-otp", { email, otp });
      login(res.data.user, res.data.token);
      setMessage("Login Successfull")
      await delay(2000);
      closeModal();
    } catch (err) {
      setMessage(err.response?.data?.message || "OTP verification failed");
    }
  };

  return (
    <div className="otp-form-container">
      <h2>Verify OTP</h2>
      <p>Enter the OTP sent to {email}</p>
      <form onSubmit={handleSubmit}>
        <input
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          required
        />
        <button type="submit">Verify</button>
      </form>
      <button type="button" onClick={() => switchTab('login')}>
        Back to Login
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}