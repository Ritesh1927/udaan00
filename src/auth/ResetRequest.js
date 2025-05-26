// ResetRequest.js
import { useState } from "react";
import api from "../utils/api";
import "../../src/auth/authcss/Reset.css";
import { Link, Links } from "react-router-dom";
import axios from "axios";

export default function ResetRequest() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/auth/request-reset", { email });
    alert("Reset link sent to your email");
  };

  return (
    <div className="reset-main-container">
      <div className="reset-form-wrapper">
        <div className="reset-left">
          <h2>Forgot Password?</h2>
          <p>Enter your email to receive a password reset link.</p>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Send Reset Link</button>
          </form>
          <p style={{ marginTop: "20px" }}>
            Remember your password? <Link to="/login">Go to Login</Link>
          </p>
        </div>
        <div className="reset-right" />
      </div>
    </div>
  );
}
