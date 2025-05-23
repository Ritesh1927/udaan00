// ResetPassword.js
import { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";
import { useNavigate } from 'react-router-dom';

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const { token } = useParams();
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    await api.post(`/auth/reset-password/${token}`, { password });
    alert("Password updated successfully");
    navigate('/login')
  };

  return (
    <form onSubmit={handleReset}>
      <input type="password" placeholder="New password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Reset Password</button>
    </form>
  );
}
