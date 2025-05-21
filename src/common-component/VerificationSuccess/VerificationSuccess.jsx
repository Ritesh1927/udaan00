import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const VerificationSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="verification-container">
      <h2>Email Verified Successfully!</h2>
      <p>You will be redirected to login page in 5 seconds.</p>
    </div>
  );
};

export default VerificationSuccess;