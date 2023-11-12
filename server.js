const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000; // Choose a port for your server

app.use(cors());
app.use(bodyParser.json());

// Define your routes here
const authRoutes = require('./routes/auth');
app.use('', authRoutes);

app.get('/', (req, res) => {
  res.send('Hello, this is your Node.js server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
