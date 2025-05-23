// ResetRequest.js
import { useState } from "react";
import api from "../utils/api";

export default function ResetRequest() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/auth/request-reset", { email });
    alert("Reset link sent to your email");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Send Reset Link</button>
    </form>
  );
}
