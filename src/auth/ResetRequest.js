import { useState } from "react";
import axios from "axios";
import "../../src/auth/authcss/Reset.css";
import { useAuthModal } from "./useAuthModal";

export default function ResetRequest({ onClose, onTokenReceived }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { switchTab } = useAuthModal();

  const switchToLogin = () => switchTab('login');

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
      <h2>Forgot Password?</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
      <button type="button" onClick={switchToLogin}>
        Back to Login
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}