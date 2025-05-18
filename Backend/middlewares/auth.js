const jwt = require('jsonwebtoken');
const User = require('../Schema/Userschema');

exports.protect = async (req, res, next) => {
  let token;

  // 1. Get token from header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({
      error: 'Not authorized - No token provided'
    });
  }

  try {
    // 2. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 3. Check if user still exists
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({
        error: 'Not authorized - User no longer exists'
      });
    }

    // 4. Check if email is verified
    if (!user.isEmailVerified) {
      return res.status(403).json({
        error: 'Not authorized - Email not verified'
      });
    }

    // 5. Attach user to request
    req.user = user;
    next();

  } catch (error) {
    console.error('Authentication error:', error);
    res.status(401).json({
      error: 'Not authorized - Invalid token'
    });
  }
};

// Role-based authorization (optional)
exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        error: `Not authorized - ${req.user.role} cannot access this resource`
      });
    }
    next();
  };
};