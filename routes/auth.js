// routes/auth.js
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const JWT_SECRET = "eCp3sR6u9xw2z$B&E(H+MbQeThVmYq3t";

const users = [
  {
    id: 1,
    email: "praveen@gmail.com",
    password: "12345678",
  },
  {
    id: 2,
    email: "omaadmin@gmail.com",
    password: "Admin@123",
  },
];

router.post("/login", (req, res) => {
  // Implement your login logic here
  const { email, password } = req.body;

  // Dummy logic (replace with actual authentication logic)
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1h" });

    // Send the token as a response
    res.json({ authtoken: token, message: "Loggedin Succesfully" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

module.exports = router;
