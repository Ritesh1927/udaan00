const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const User = require("../Schema/UserSchema");
const sendEmail = require("../Utils/sendEmail");
const AuthMiddleware = require("../Middleware/AuthMiddleware");

const generateToken = (userId) =>
  jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });


///// ---- for register data display -----
router.get("/register", async (req, res) => {
  try {
    const  registerdata = await  User.find(); 
    res.json(registerdata);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
});

router.post("/register", async (req, res) => {
  const { name, email, password, mobile } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) return res.status(400).json({ message: "User exists" });

  const user = await User.create({ name, email, mobile, password });
  res.status(201).json({ message: "Registered successfully!" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    user.otp = otp;
    user.otpExpires = Date.now() + 5 * 60 * 1000;
    await user.save();

    await sendEmail(email, "Your OTP Code", `Your OTP is ${otp}`);
    res.status(200).json({ message: "OTP sent to email" });  // ✅ Only one response
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


router.post("/verify-otp", async (req, res) => {
  const { email, otp } = req.body;
  const user = await User.findOne({ email });

  if (!user || user.otp !== otp || user.otpExpires < Date.now()) {
    return res.status(400).json({ message: "Invalid or expired OTP" });
  }

  user.isVerified = true;
  user.otp = undefined;
  user.otpExpires = undefined;
  await user.save();

  const token = generateToken(user._id);
  res.status(200).json({
    token,
    user: {
      name: user.name,
      email: user.email,
      mobile: user.mobile,
    },
    message: "Login successful",
  });
});



router.put("/update-profile", AuthMiddleware, async (req, res) => {
  const { name, mobile } = req.body;

  try {
    const user = await User.findById(req.user.userId);

    if (!user) return res.status(404).json({ message: "User not found" });

    user.name = name || user.name;
    user.mobile = mobile || user.mobile;

    await user.save();

    res.json({
      message: "Profile updated successfully",
      user: {
        name: user.name,
        email: user.email,
        mobile: user.mobile,
      },
    });
  } catch (err) {
    console.error("Profile update error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/me", AuthMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('name email mobile');
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ user });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Route: POST /auth/request-reset
router.post('/request-reset', async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: 'User not found' });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '15m' });

  // Dynamically pick the base frontend URL
  const frontendBaseURL =
    process.env.NODE_ENV === 'development'
      ? process.env.FRONTEND_DEV_URL
      : process.env.FRONTEND_PROD_URLS.split(',')[0]; // Pick first prod URL

  const resetLink = `${frontendBaseURL}/reset-password/${token}`;

  await sendEmail(user.email, 'Reset Password', `Reset link: ${resetLink}`);
  res.json({ message: 'Reset link sent' });
});



// Route: POST /auth/reset-password/:token
router.post('/reset-password/:token', async (req, res) => {
  const { password } = req.body;
  const { token } = req.params;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(400).json({ message: 'Invalid token' });

    user.password = password; // Hash it if you're using bcrypt
    await user.save();
    res.json({ message: 'Password updated successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Token expired or invalid' });
  }
});


module.exports = router;
