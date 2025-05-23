import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import api from '../utils/api';
import { useAuth } from './authContext';
import react from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

   const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const res = await api.post('/auth/login', { email, password });

      if (res.data.message === 'OTP sent to email') {
        setMessage('OTP sent to email');
        // Navigate to verify-otp and pass email via state
        navigate('/verify-otp', { state: { email } });
      } else {
        setMessage('Unexpected response from server');
      }
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
      <Link to="/register">Register</Link>
      <p>{message}</p>
      <Link to="/reset-request">Forgot Password</Link>
    </form>
  );
}
