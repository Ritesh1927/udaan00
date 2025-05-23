import React, { useState } from 'react';
import api from '../utils/api';
import { Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', mobile: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/register', form);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required /><br/>
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required /><br/>
      <input name="mobile" type="text" placeholder="Mobile Number" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required /><br/>
      <button type="submit">Register</button>
      <Link to="/login">Login</Link>
      <p>{message}</p>
    </form>
  );
}