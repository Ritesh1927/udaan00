// ResetPassword.js
import { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";
import "../../src/auth/authcss/Reset.css";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const { token } = useParams();
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    await api.post(`/auth/reset-password/${token}`, { password });
    alert("Password updated successfully");
    navigate("/login");
  };

  return (
    <div className="reset-main-container">
      <div className="reset-form-wrapper">
        <div className="reset-left">
          <h2>Reset Password</h2>
          <p>Enter your new password below</p>
          <form onSubmit={handleReset}>
            <input
              type="password"
              placeholder="New password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Reset Password</button>
          </form>
        </div>
        <div className="reset-right" />
      </div>
    </div>
  );
}
