import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './authContext';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;  // ⏳ Show spinner or message while checking

  return user ? children : <Navigate to="/login" />;
}
