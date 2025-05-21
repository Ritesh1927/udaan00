import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const { login, register, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');

  // Frontend validation
  if (!formData.email || !formData.password) {
    return setError('Email and password are required');
  }

  if (isSignup && formData.password !== formData.confirmPassword) {
    return setError('Passwords do not match');
  }

  try {
    const result = isSignup
      ? await register(formData.email, formData.password)
      : await login(formData.email, formData.password);

    console.log('Full auth response:', result); // Debug log

    if (!result?.success) {
      // Enhanced error handling
      const errorMessage = result?.error || 
                         result?.message || 
                         (result?.code ? 
                           `Operation failed (code: ${result.code})` : 
                           'Authentication failed');
      
      setError(errorMessage);
      return;
    }

    // Handle success
    if (isSignup) {
      alert(result.message || 'Registration successful! Please check your email.');
      setIsSignup(false);
      setFormData(prev => ({ ...prev, password: '', confirmPassword: '' }));
    } else {
      navigate('/dashboard');
    }

  } catch (err) {
    console.error('Full auth error:', err);
    let errorMessage = 'An unexpected error occurred';
    
    if (err.response) {
      // Handle axios response errors
      errorMessage = err.response.data?.error || 
                   err.response.data?.message || 
                   `Request failed (status: ${err.response.status})`;
    } else if (err.request) {
      // Handle no response errors
      errorMessage = 'No response from server. Check your connection.';
    }
    
    setError(errorMessage);
  }
};

  // Generate unique IDs for each form
  const emailId = `email-${isSignup ? 'signup' : 'login'}`;
  const passwordId = `password-${isSignup ? 'signup' : 'login'}`;
  const confirmPasswordId = 'confirm-password-signup';

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isSignup ? 'Create Account' : 'Login'}</h2>
        
        {error && (
          <div className="error-message">
            {error}
            {error.includes('verify') && (
              <button 
                onClick={() => navigate('/resend-verification')}
                className="resend-link"
              >
                Resend verification email
              </button>
            )}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor={emailId}>Email</label>
            <input
              id={emailId}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
              autoComplete="username"
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor={passwordId}>Password</label>
            <input
              id={passwordId}
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="8"
              disabled={loading}
              autoComplete={isSignup ? 'new-password' : 'current-password'}
              placeholder="••••••••"
            />
          </div>

          {isSignup && (
            <div className="form-group">
              <label htmlFor={confirmPasswordId}>Confirm Password</label>
              <input
                id={confirmPasswordId}
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                minLength="8"
                disabled={loading}
                autoComplete="new-password"
                placeholder="••••••••"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`auth-button ${loading ? 'loading' : ''}`}
          >
            {loading ? (
              <>
                <span className="spinner"></span>
                {isSignup ? 'Signing Up...' : 'Logging In...'}
              </>
            ) : (
              isSignup ? 'Sign Up' : 'Login'
            )}
          </button>
        </form>

        <div className="auth-toggle">
          {isSignup ? 'Already have an account?' : 'Need an account?'}
          <button
            type="button"
            onClick={() => setIsSignup(!isSignup)}
            disabled={loading}
            className="toggle-link"
          >
            {isSignup ? 'Login' : 'Sign Up'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;