import { createContext, useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({
  user: null,
  loading: false,
  isAuthenticated: false,
  login: async () => ({ success: false, error: null }),
  logout: () => {},
  register: async () => ({ success: false, error: null }),
  refreshAuth: async () => {},
});

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    loading: false,
    isAuthenticated: false,
  });
  const navigate = useNavigate();

  // Configure axios instance with timeout
  const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || '/api',
    timeout: 10000,
  });

  // Authentication check
  const refreshAuth = useCallback(async () => {
    try {
      setState(prev => ({ ...prev, loading: true }));
      const token = localStorage.getItem('token');
      
      if (!token) {
        setState({
          user: null,
          isAuthenticated: false,
          loading: false,
        });
        return;
      }

      const { data } = await api.get('/auth/me', {
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

  // Initialize auth state
  useEffect(() => {
    refreshAuth();
  }, [refreshAuth]);

  // Login handler
  const login = useCallback(async (email, password) => {
    try {
      setState(prev => ({ ...prev, loading: true }));
      
      const { data } = await api.post('/auth/login', { email, password });
      
      if (!data.success) {
        throw new Error(data.error || 'Login failed');
      }

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
      
      const errorMessage = error.response?.data?.error || 
                         error.message || 
                         'Login failed';
      
      return {
        success: false,
        error: errorMessage
      };
    }
  }, [navigate]);

  // Logout handler
  const logout = useCallback(() => {
    localStorage.removeItem('token');
    setState({
      user: null,
      isAuthenticated: false,
      loading: false,
    });
    navigate('/login');
  }, [navigate]);

  // Registration handler (updated as per your request)
  const register = useCallback(async (email, password) => {
    try {
      setState(prev => ({ ...prev, loading: true }));
      
      const response = await api.post('/auth/register', { email, password });
      
      if (!response.data.success) {
        throw new Error(response.data.error || 'Registration failed');
      }

      setState(prev => ({ ...prev, loading: false }));
      return { 
        success: true,
        message: response.data.message 
      };
    } catch (error) {
      setState(prev => ({ ...prev, loading: false }));
      
      // Extract error message from response if available
      const errorMessage = error.response?.data?.error || 
                         error.message || 
                         'Registration failed';
      
      return {
        success: false,
        error: errorMessage
      };
    }
  }, []);

  // Memoized context value
  const value = useMemo(() => ({
    ...state,
    login,
    logout,
    register,
    refreshAuth,
  }), [state, login, logout, register, refreshAuth]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;