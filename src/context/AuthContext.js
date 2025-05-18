// src/context/AuthContext.js
import { createContext, useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// 1. Define TypeScript-like shape for better autocompletion
const AuthContext = createContext({
  user: null,
  loading: true,
  isAuthenticated: false,
  login: async () => ({ success: false, error: null }),
  logout: () => {},
  register: async () => ({ success: false, error: null }),
  refreshAuth: async () => {},
});

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    loading: true,
    isAuthenticated: false,
  });
  const navigate = useNavigate();

  // 2. Authentication check
  const refreshAuth = useCallback(async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No token found');

      const { data } = await axios.get('/api/me', {
        headers: { Authorization: `Bearer ${token}` }
      });

      setState({
        user: data.user,
        isAuthenticated: true,
        loading: false,
      });
    } catch (error) {
      localStorage.removeItem('token');
      setState({
        user: null,
        isAuthenticated: false,
        loading: false,
      });
    }
  }, []);

  // 3. Initialize auth state
  useEffect(() => {
    refreshAuth();
  }, [refreshAuth]);

  // 4. Login handler
  const login = useCallback(async (email, password) => {
    try {
      setState(prev => ({ ...prev, loading: true }));
      
      const { data } = await axios.post('/api/auth/login', { email, password });
      localStorage.setItem('token', data.token);

      setState({
        user: data.user,
        isAuthenticated: true,
        loading: false,
      });

      navigate('/dashboard');
      return { success: true };
    } catch (error) {
      setState(prev => ({ ...prev, loading: false }));
      return {
        success: false,
        error: error.response?.data?.error || 'Login failed'
      };
    }
  }, [navigate]);

  // 5. Logout handler
  const logout = useCallback(() => {
    localStorage.removeItem('token');
    setState({
      user: null,
      isAuthenticated: false,
      loading: false,
    });
    navigate('/login');
  }, [navigate]);

  // 6. Registration handler
  const register = useCallback(async (email, password) => {
    try {
      setState(prev => ({ ...prev, loading: true }));
      
      await axios.post('/api/auth/register', { email, password });
      
      setState(prev => ({ ...prev, loading: false }));
      return { success: true };
    } catch (error) {
      setState(prev => ({ ...prev, loading: false }));
      return {
        success: false,
        error: error.response?.data?.error || 'Registration failed'
      };
    }
  }, []);

  // 7. Memoized context value
  const value = useMemo(() => ({
    ...state,
    login,
    logout,
    register,
    refreshAuth,
  }), [state, login, logout, register, refreshAuth]);

  // 8. Proper provider with value
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;