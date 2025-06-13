import React, { useState } from "react";
import { useAuth } from "./authContext";
import axios from "axios";
import "../../src/auth/authcss/Register.css";
import "../../src/auth/authcss/Reset.css";
import { FaArrowLeft } from "react-icons/fa";
import { useAuthModal } from "./useAuthModal";

export default function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const { login } = useAuth();
  const { modalData, switchTab } = useAuthModal();
  const email = modalData.email;
  const { closeModal } = useAuthModal();

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/verify-otp", { email, otp });
      login(res.data.user, res.data.token);
      setMessage("Login Successfull");
      await delay(2000);
      closeModal();
    } catch (err) {
      setMessage(err.response?.data?.message || "OTP verification failed");
    }
  };

  return (
    <div className="otp-form-container">
      <h3 className="  mb20">
        Enter the OTP sent to :-{" "}
        <span className="verify-email-heading-mail">{email}</span>
      </h3>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-group mt10">
          <label htmlFor="">Verify Otp</label>
          <input
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            required
          />
        </div>

        <button className="form-submit verify-otp-form-submit" type="submit">
          Verify
        </button>
      </form>
      <button
        className="back-btn"
        type="button"
        onClick={() => switchTab("login")}
      >
        <i>
          <FaArrowLeft />
        </i>
        Back to Login
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}
