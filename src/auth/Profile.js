import React, { useEffect, useState } from 'react';
import api from '../utils/api';
import { useAuth } from './authContext';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const { token } = useAuth();
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch user details from backend
    const fetchUserProfile = async () => {
      try {
        const res = await api.get('/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const userData = res.data.user;
        setName(userData.name || '');
        setMobile(userData.mobile || '');
        setEmail(userData.email || '');
      } catch (err) {
        console.error('Failed to load profile', err);
        setMessage('Failed to load profile');
      }
    };

    if (token) fetchUserProfile();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.put(
        '/auth/update-profile',
        { name, mobile },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage('Profile updated successfully!');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Update failed');
    }
  };

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');  // Optional: Redirect to login after logout
  };

  return (
    <div>
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} readOnly />
        </label>
        <br />
        <label>
          Mobile:
          <input
            type="text"
            value={mobile}
            placeholder="Enter mobile number"
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Update Details</button>
        <p>{message}</p>
      </form>

      <button onClick={handleLogout} style={{ marginTop: '20px' }}>
        Logout
      </button>

    </div>
  );
}
