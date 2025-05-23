import React, { createContext, useContext, useState, useEffect } from 'react';
import api from "../utils/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [loading, setLoading] = useState(true); 

  // Fetch user only when token changes — NOT when user changes
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get('/auth/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data.user);
      } catch (err) {
        console.error("Failed to fetch user:", err);
        setUser(null);
        localStorage.removeItem('token'); // Ensure token is cleared if invalid
        setToken('');
      } finally {
        setLoading(false); // Done loading
      }
    };

    if (token) {
      fetchUser();
    } else {
      setUser(null); // Just to be safe
      setLoading(false);
    }
  }, [token]); // ✅ Removed `user` from dependency array

  const login = (userData, newToken) => {
    setUser(userData);
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  const logout = () => {
    setUser(null);
    setToken('');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
