import React, { useState } from 'react';
import api from '../utils/api';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', form);
      setMessage('OTP sent to email');
      navigate('/verify-otp', { state: { email: form.email } });
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required /><br/>
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required /><br/>
      <button type="submit">Login</button>
      Register
      <p>{message}</p>
    </form>
  );
}
