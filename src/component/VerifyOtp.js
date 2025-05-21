import React, { useState } from 'react';
import api from '../utils/api';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../authContext';

export default function VerifyOtp() {
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/verify-otp', { email: state.email, otp });
      login(res.data.token);
      setMessage('Login successful');
      navigate('/');
    } catch (err) {
      setMessage(err.response?.data?.message || 'OTP verification failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={otp} onChange={e => setOtp(e.target.value)} placeholder="Enter OTP" required />
      <button type="submit">Verify OTP</button>
      <p>{message}</p>
    </form>
  );
}
