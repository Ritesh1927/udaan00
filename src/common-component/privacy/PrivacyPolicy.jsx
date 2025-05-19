import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1 className="privacy-policy__title">Privacy Policy for Udaan360 Email Service</h1>
      <p className="privacy-policy__date">Effective Date: {new Date().toLocaleDateString()}</p>

      <section className="privacy-policy__section">
        <h2 className="privacy-policy__heading">1. Information We Collect</h2>
        <p className="privacy-policy__text">
          We collect only the minimum information required for account verification:
        </p>
        <ul className="privacy-policy__list">
          <li>Email address</li>
          <li>Account verification status</li>
          <li>Login timestamps (for security purposes only)</li>
        </ul>
      </section>

      <section className="privacy-policy__section">
        <h2 className="privacy-policy__heading">2. How We Use Your Information</h2>
        <p className="privacy-policy__text">
          Your data is used exclusively for:
        </p>
        <ul className="privacy-policy__list">
          <li>Sending account verification emails</li>
          <li>Securing your account against unauthorized access</li>
          <li>Complying with legal requirements when necessary</li>
        </ul>
      </section>

      <section className="privacy-policy__section">
        <h2 className="privacy-policy__heading">3. Data Security</h2>
        <p className="privacy-policy__text">
          We implement robust security measures including:
        </p>
        <ul className="privacy-policy__list">
          <li>End-to-end encrypted connections (HTTPS/SSL)</li>
          <li>Google OAuth 2.0 for secure email delivery</li>
          <li>Regular security audits and monitoring</li>
          <li>Password hashing with bcrypt algorithm</li>
        </ul>
      </section>

      <section className="privacy-policy__section">
        <h2 className="privacy-policy__heading">4. Third-Party Services</h2>
        <p className="privacy-policy__text">
          We use Google's Gmail API solely to send verification emails. 
          Google's <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">privacy policy</a> applies to their services.
        </p>
      </section>

      <section className="privacy-policy__section">
        <h2 className="privacy-policy__heading">5. Data Retention</h2>
        <p className="privacy-policy__text">
          We retain your email address only as long as necessary for verification purposes. 
          Verification tokens expire automatically after 24 hours.
        </p>
      </section>

      <section className="privacy-policy__section">
        <h2 className="privacy-policy__heading">6. Your Rights</h2>
        <p className="privacy-policy__text">
          You have the right to:
        </p>
        <ul className="privacy-policy__list">
          <li>Request access to your stored data</li>
          <li>Request deletion of your account information</li>
          <li>Withdraw consent for data processing</li>
        </ul>
      </section>

      <section className="privacy-policy__section">
        <h2 className="privacy-policy__heading">7. Contact Us</h2>
        <p className="privacy-policy__text">
          For privacy concerns or data requests, contact our Data Protection Officer at:
        </p>
        <ul className="privacy-policy__list">
          <li><strong>Email:</strong> privacy@udaan360.in</li>
          <li><strong>Support:</strong> support@udaan360.in</li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicy;