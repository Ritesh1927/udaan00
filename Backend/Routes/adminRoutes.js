const express = require('express');
const router = express.Router();

const ADMIN = {
  username: process.env.ADMIN_USER,
  password: process.env.ADMIN_PASS
};

router.route('/')
  .get((req, res) => {
    // Always return showForm:true for GET requests
    res.json({ showForm: true }); 
  })
  .post((req, res) => {
    const { username, password } = req.body;
    
    if (username === ADMIN.username && password === ADMIN.password) {
      res.json({ authenticated: true });
    } else {
      res.status(401).json({ 
        authenticated: false, 
        error: 'Invalid credentials' 
      });
    }
  });

module.exports = router;