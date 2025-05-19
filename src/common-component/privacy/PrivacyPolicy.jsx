import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1 className="privacy-policy__title">Privacy Policy</h1>
      <p className="privacy-policy__date">Effective Date: [Insert Date]</p>

      <p className="privacy-policy__intro">
        Welcome to <strong>[Your Website Name]</strong>! Your privacy is extremely important to us.
        This Privacy Policy outlines how we collect, use, share, and protect your personal information when you use our website and services.
      </p>

      <section className="privacy-policy__section">
        <h2 className="privacy-policy__heading">1. Information We Collect</h2>
        <h3 className="privacy-policy__subheading">a. Personal Information</h3>
        <ul className="privacy-policy__list">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Billing and shipping address</li>
          <li>Payment information (via secure payment gateways)</li>
          <li>Account credentials (if you create an account)</li>
        </ul>

        <h3 className="privacy-policy__subheading">b. Non-Personal Information</h3>
        <ul className="privacy-policy__list">
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Pages visited</li>
          <li>Time spent on pages</li>
          <li>Referring URL</li>
          <li>Device type and operating system</li>
        </ul>
      </section>

      <section className="privacy-policy__section">
        <h2 className="privacy-policy__heading">2. How We Collect Information</h2>
        <p className="privacy-policy__text">
          We collect information through direct input, cookies, analytics, and third-party tools.
        </p>
      </section>

      <section className="privacy-policy__section">
        <h2 className="privacy-policy__heading">3. Use of Information</h2>
        <ul className="privacy-policy__list">
          <li>Provide and maintain services</li>
          <li>Process transactions</li>
          <li>Communicate with you</li>
          <li>Improve performance</li>
          <li>Comply with legal requirements</li>
        </ul>
      </section>

      <section className="privacy-policy__section">
        <h2 className="privacy-policy__heading">4. Payment Processing</h2>
        <p className="privacy-policy__text">
          All payments are securely processed via trusted gateways like [Razorpay/Stripe/PayPal]. We do not store your full card details.
        </p>
      </section>

      <section className="privacy-policy__section">
        <h2 className="privacy-policy__heading">5. Sharing and Disclosure</h2>
        <p className="privacy-policy__text">
          We do not sell or rent personal info. Info is shared only with trusted third parties or legal authorities when required.
        </p>
      </section>

      <section className="privacy-policy__section">
        <h2 className="privacy-policy__heading">6. Cookies and Tracking</h2>
        <p className="privacy-policy__text">
          We use cookies to improve experience and analyze usage. You can manage cookies via browser settings.
        </p>
      </section>

      <section className="privacy-policy__section">
        <h2 className="privacy-policy__heading">7. Data Security</h2>
        <p className="privacy-policy__text">
          We use SSL, secure servers, and access restrictions. Though we take measures, 100% internet security isn't guaranteed.
        </p>
      </section>

      <section className="privacy-policy__section">
        <h2 className="privacy-policy__heading">8. Your Rights</h2>
        <ul className="privacy-policy__list">
          <li>Access your data</li>
          <li>Request changes or deletion</li>
          <li>Withdraw consent</li>
        </ul>
        <p className="privacy-policy__text">
          Contact us at: <strong>[Your Support Email]</strong>
        </p>
      </section>

      <section className="privacy-policy__section">
        <h2 className="privacy-policy__heading">9. Third-Party Links</h2>
        <p className="privacy-policy__text">
          We are not responsible for the privacy policies of external sites linked from our platform.
        </p>
      </section>

      <section className="privacy-policy__section">
        <h2 className="privacy-policy__heading">10. Children's Privacy</h2>
        <p className="privacy-policy__text">
          We don’t knowingly collect data from children under 13. If we do, we delete it immediately.
        </p>
      </section>

      <section className="privacy-policy__section">
        <h2 className="privacy-policy__heading">11. Policy Changes</h2>
        <p className="privacy-policy__text">
          This policy may be updated. Revisit this page to stay informed of any changes.
        </p>
      </section>

      <section className="privacy-policy__section">
        <h2 className="privacy-policy__heading">12. Contact Us</h2>
        <p className="privacy-policy__text">Email: [Your Support Email]</p>
        <p className="privacy-policy__text">Address: [Your Business Address]</p>
        <p className="privacy-policy__text">Phone: [Your Business Phone Number]</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
