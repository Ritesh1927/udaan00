import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useAuthModal } from "./useAuthModal";
// import "../../src/auth/authcss/Reset.css";
import "../../src/auth/authcss/Register.css";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { token } = useParams(); // Get token from URL
  const navigate = useNavigate();
  const { closeModal } = useAuthModal();
  const { switchTab } = useAuthModal();

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/auth/reset-password/${token}`, {
        password,
      });

      if (res.data.message === "Password updated successfully") {
        setMessage(res.data.message);
        setTimeout(() => {
          closeModal();
          navigate("/");
        }, 1500);
      } else {
        setMessage(res.data.message || "Password reset failed");
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Password reset failed");
    }
  };

  // Handle direct URL access (maintains previous workflow)
  useEffect(() => {
    if (!token) {
      navigate("/reset-request");
    }
  }, [token, navigate]);

  return (
    <div>
      <h2>Reset Password</h2>
      <form className="auth-form" onSubmit={handleReset}>
        <div className="form-group mt10">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New password"
            required
            // minLength={8}
          />
        </div>

        <button type="submit" className="form-submit">
          Reset Password
        </button>
      </form>

      {message && (
        <p
          className={`reset-message ${
            message.includes("successfully") ? "success" : "error"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
