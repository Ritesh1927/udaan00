import { useState } from "react";
import axios from "axios";
import "../../src/auth/authcss/Reset.css";

export default function ResetPassword({ token, onSuccess }) {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/api/auth/reset-password/${token}`, { password });
      setMessage("Password updated successfully!");
      onSuccess();
    } catch (err) {
      setMessage(err.response?.data?.message || "Password reset failed");
    }
  };

  return (
    <div className="reset-form-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleReset}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="New password"
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}