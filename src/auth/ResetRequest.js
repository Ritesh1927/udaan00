import { useState } from "react";
import axios from "axios";
import "../../src/auth/authcss/Reset.css";
import { useAuthModal } from "./useAuthModal";
import { FaArrowLeft } from "react-icons/fa";

export default function ResetRequest({ onClose, onTokenReceived }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { switchTab } = useAuthModal();

  const switchToLogin = () => switchTab("login");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/request-reset", { email });
      setMessage("Reset link sent to your email");
    } catch (err) {
      setMessage(err.response?.data?.message || "Error sending reset link");
    }
  };

  return (
    <div className="reset-form-container">
      <h2 className="mb20">Forgot Password?</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Enter Mail For Reset Password</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>

        <button className="form-submit send-reset-link" type="submit">
          Send Reset Link
        </button>
      </form>
      <button className="back-btn" type="button" onClick={switchToLogin}>
        <i>
          <FaArrowLeft />
        </i>
        Back to Login
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}
