const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../Schema/Userschema');
const { sendEmail } = require('../utils/emailSender');
const crypto = require('crypto');

// Register
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Create user with hashed password
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
    user.emailVerificationExpires = Date.now() + 24 * 60 * 60 * 1000; // 24 hours

    await user.save();

    // Send verification email
    const verificationUrl = process.env.NODE_ENV === "development"
      ? `${process.env.FRONTEND_DEV_URL}/verify-email/${verificationToken}`
      : `${process.env.FRONTEND_PROD_URLS.split(',')[0]}/verify-email/${verificationToken}`;
    
    try {
      await sendEmail({
        email: user.email,
        subject: 'Verify Your Email - Udaan360',
        html: `Please click <a href="${verificationUrl}">here</a> to verify your email.`
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Delete the user if email fails to prevent unverified accounts
      await User.findByIdAndDelete(user._id);
      return res.status(500).json({ error: 'Failed to send verification email' });
    }

    res.status(201).json({ 
      success: true, 
      message: 'Verification email sent',
      // Only include token in development for testing
      ...(process.env.NODE_ENV === "development" && { token: verificationToken })
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ 
      error: 'Server error',
      ...(process.env.NODE_ENV === "development" && { details: error.message })
    });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Find user with password
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      // Security: Increment failed attempts
      await User.findByIdAndUpdate(user._id, { 
        $inc: { loginAttempts: 1 },
        ...(user.loginAttempts >= 4 && { lockUntil: Date.now() + 30*60*1000 }) // Lock for 30 mins after 5 attempts
      });
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check if account is locked
    if (user.lockUntil && user.lockUntil > Date.now()) {
      return res.status(403).json({ 
        error: `Account locked. Try again after ${Math.ceil((user.lockUntil - Date.now())/60000)} minutes`
      });
    }

    // Check email verification
    if (!user.isEmailVerified) {
      return res.status(403).json({ 
        error: 'Email not verified',
        resendLink: '/api/auth/resend-verification'
      });
    }

    // Reset login attempts on successful login
    await User.findByIdAndUpdate(user._id, { 
      loginAttempts: 0,
      lockUntil: null,
      lastLogin: Date.now() 
    });

    // Generate JWT
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    // Respond with token
    res.status(200).json({
      success: true,
      token,
      user: {
        id: user._id,
        email: user.email,
        lastLogin: user.lastLogin
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      error: 'Server error',
      ...(process.env.NODE_ENV === "development" && { details: error.message })
    });
  }
});

// Verify Email
router.get('/verify-email/:token', async (req, res) => {
  try {
    const hashedToken = crypto
      .createHash('sha256')
      .update(req.params.token)
      .digest('hex');

    const user = await User.findOne({
      emailVerificationToken: hashedToken,
      emailVerificationExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ 
        error: 'Invalid or expired token',
        solution: 'Request a new verification email'
      });
    }

    user.isEmailVerified = true;
    user.emailVerificationToken = undefined;
    user.emailVerificationExpires = undefined;
    await user.save();

    // Redirect to frontend success page
    const successUrl = process.env.NODE_ENV === "development"
      ? `${process.env.FRONTEND_DEV_URL}/verification-success`
      : `${process.env.FRONTEND_PROD_URLS.split(',')[0]}/verification-success`;

    res.redirect(successUrl);

  } catch (error) {
    console.error('Email verification error:', error);
    res.status(500).json({ 
      error: 'Server error',
      ...(process.env.NODE_ENV === "development" && { details: error.message })
    });
  }
});

// Resend Verification Email
router.post('/resend-verification', async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.isEmailVerified) {
      return res.status(400).json({ error: 'Email already verified' });
    }

    // Generate new token
    const verificationToken = crypto.randomBytes(32).toString('hex');
    user.emailVerificationToken = crypto
      .createHash('sha256')
      .update(verificationToken)
      .digest('hex');
    user.emailVerificationExpires = Date.now() + 24 * 60 * 60 * 1000;
    await user.save();

    // Send email
    const verificationUrl = process.env.NODE_ENV === "development"
      ? `${process.env.FRONTEND_DEV_URL}/verify-email/${verificationToken}`
      : `${process.env.FRONTEND_PROD_URLS.split(',')[0]}/verify-email/${verificationToken}`;

    await sendEmail({
      email: user.email,
      subject: 'Verify Your Email - Udaan360',
      html: `Please click <a href="${verificationUrl}">here</a> to verify your email.`
    });

    res.status(200).json({ success: true, message: 'Verification email resent' });

  } catch (error) {
    console.error('Resend verification error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;