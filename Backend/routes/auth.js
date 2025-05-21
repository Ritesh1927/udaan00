require('dotenv').config();
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../Schema/Userschema');
const { sendEmail } = require('../utils/emailSender');
const crypto = require('crypto');

// Debug Endpoint (Remove in production)
router.get('/test', async (req, res) => {
  try {
    // Test database connection
    await User.findOne({});
    
    // Test email sending
    await sendEmail({
      email: process.env.EMAIL_FROM,
      subject: 'Test Email from Udaan360',
      html: '<h1>This is a test email</h1><p>If you received this, email service is working.</p>'
    });

    res.json({
      success: true,
      message: 'All systems operational',
      database: 'Connected',
      email: 'Sent successfully',
      env: process.env.NODE_ENV,
      frontendUrl: process.env.NODE_ENV === 'development' 
        ? process.env.FRONTEND_DEV_URL 
        : process.env.FRONTEND_PROD_URLS.split(',')[0]
    });
  } catch (error) {
    console.error('Test endpoint error:', error);
    res.status(500).json({
      success: false,
      error: error.message,
      database: error.message.includes('MongoDB') ? 'Failed' : 'Connected',
      email: error.message.includes('email') ? 'Failed' : 'Not tested'
    });
  }
});

// Rate Limiter Middleware
const rateLimit = (windowMs, max) => {
  const requests = new Map();
  return (req, res, next) => {
    const ip = req.ip || req.connection.remoteAddress;
    const current = requests.get(ip) || { count: 0, startTime: Date.now() };
    
    if (Date.now() - current.startTime > windowMs) {
      requests.set(ip, { count: 1, startTime: Date.now() });
      return next();
    }
    
    if (current.count >= max) {
      return res.status(429).json({ 
        success: false,
        error: 'Too many requests. Please try again later.',
        code: 'RATE_LIMITED'
      });
    }
    
    requests.set(ip, { ...current, count: current.count + 1 });
    next();
  };
};

router.use(rateLimit(15 * 60 * 1000, 20));

// Registration Endpoint
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      console.log('Missing email or password');
      return res.status(400).json({ 
        success: false,
        error: 'Email and password are required',
        code: 'MISSING_FIELDS'
      });
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format',
        code: 'INVALID_EMAIL'
      });
    }

    // Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('Email already exists:', email);
      return res.status(409).json({ 
        success: false,
        error: 'Email already registered',
        code: 'EMAIL_EXISTS'
      });
    }

    // Create user
    const user = new User({
      email,
      password: await bcrypt.hash(password, 12)
    });

    // Generate verification token
    const verificationToken = crypto.randomBytes(32).toString('hex');
    user.emailVerificationToken = crypto
      .createHash('sha256')
      .update(verificationToken)
      .digest('hex');
    user.emailVerificationExpires = Date.now() + 24 * 60 * 60 * 1000;
    
    await user.save();
    console.log('User created successfully:', email);

    // Send verification email
    const verificationUrl = `${process.env.NODE_ENV === 'development' 
      ? process.env.FRONTEND_DEV_URL 
      : process.env.FRONTEND_PROD_URLS.split(',')[0]}/verify-email/${verificationToken}`;
    
    try {
      console.log('Sending verification email to:', email);
      await sendEmail({
        email: user.email,
        subject: 'Verify Your Email - Udaan360',
        html: `Please click <a href="${verificationUrl}">here</a> to verify your email.`
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      await User.findByIdAndDelete(user._id);
      return res.status(500).json({ 
        success: false,
        error: 'Failed to send verification email',
        code: 'EMAIL_FAILED',
        details: process.env.NODE_ENV === 'development' ? emailError.message : undefined
      });
    }

    return res.status(201).json({ 
      success: true,
      message: 'Verification email sent. Please check your inbox.',
      code: 'VERIFICATION_SENT'
    });

  } catch (error) {
    console.error('Registration error:', {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });
    
    return res.status(500).json({ 
      success: false,
      error: 'Registration failed. Please try again.',
      code: 'REGISTRATION_FAILED',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Login Endpoint
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ 
        success: false,
        error: 'Email and password are required',
        code: 'MISSING_FIELDS'
      });
    }

    const user = await User.findOne({ email }).select('+password +loginAttempts +lockUntil');
    
    if (!user) {
      return res.status(401).json({ 
        success: false,
        error: 'Invalid email or password',
        code: 'INVALID_CREDENTIALS'
      });
    }

    // Check account lock
    if (user.lockUntil && user.lockUntil > Date.now()) {
      const minutesLeft = Math.ceil((user.lockUntil - Date.now()) / (60 * 1000));
      return res.status(403).json({ 
        success: false,
        error: `Account locked. Try again in ${minutesLeft} minute(s).`,
        code: 'ACCOUNT_LOCKED'
      });
    }

    // Check password
    if (!(await bcrypt.compare(password, user.password))) {
      user.loginAttempts += 1;
      if (user.loginAttempts >= 5) {
        user.lockUntil = Date.now() + 30 * 60 * 1000;
      }
      await user.save();

      return res.status(401).json({ 
        success: false,
        error: 'Invalid email or password',
        remainingAttempts: 5 - user.loginAttempts,
        code: 'INVALID_CREDENTIALS'
      });
    }

    // Check email verification
    if (!user.isEmailVerified) {
      return res.status(403).json({ 
        success: false,
        error: 'Please verify your email before logging in',
        resendLink: '/api/auth/resend-verification',
        code: 'UNVERIFIED_EMAIL'
      });
    }

    // Reset attempts on success
    user.loginAttempts = 0;
    user.lockUntil = null;
    user.lastLogin = Date.now();
    await user.save();

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    return res.json({
      success: true,
      token,
      user: {
        id: user._id,
        email: user.email,
        isEmailVerified: user.isEmailVerified
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ 
      success: false,
      error: 'Login failed. Please try again.',
      code: 'LOGIN_FAILED'
    });
  }
});

router.get('/verify-email/:token', async (req, res) => {
  try {
    console.log('Verification token received:', req.params.token); // Debug log
    
    const hashedToken = crypto
      .createHash('sha256')
      .update(req.params.token)
      .digest('hex');

    console.log('Hashed token:', hashedToken); // Debug log

    const user = await User.findOne({
      emailVerificationToken: hashedToken,
      emailVerificationExpires: { $gt: Date.now() }
    });

    if (!user) {
      console.log('Invalid or expired token'); // Debug log
      return res.status(400).json({ 
        success: false,
        error: 'Invalid or expired token',
        code: 'INVALID_TOKEN'
      });
    }

    user.isEmailVerified = true;
    user.emailVerificationToken = undefined;
    user.emailVerificationExpires = undefined;
    await user.save();

    console.log('Email verified for:', user.email); // Debug log

    // Redirect to frontend with success message
    const redirectUrl = `${process.env.FRONTEND_DEV_URL}/verification-success`;
    console.log('Redirecting to:', redirectUrl); // Debug log
    res.redirect(redirectUrl);

  } catch (error) {
    console.error('Verification error:', error);
    res.status(500).json({
      success: false,
      error: 'Email verification failed',
      code: 'VERIFICATION_FAILED'
    });
  }
});

module.exports = router;