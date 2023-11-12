// routes/auth.js
const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  // Implement your login logic here
  console.log("called",req);
  const { email, password } = req.body;

  // Dummy logic (replace with actual authentication logic)
  if (email === 'praveen@gmail.com' && password === '12345678') {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

module.exports = router;
