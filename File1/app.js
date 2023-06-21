const express = require('express');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

// Import routes
const authRoutes = require('./routes/authRoutes');

// Import passport configuration
require('./config/passpost')(passport);

// Create Express app
const app = express();

// Generate a secure secret key
const generateSecretKey = () => {
  return crypto.randomBytes(32).toString('hex');
};

// Middleware
const secretKey = generateSecretKey();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({ secret: secretKey, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Database connection
mongoose
  .connect('mongodb+srv://pass:pass123@cluster0.8lln0mg.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Token authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    req.user = user;
    next();
  });
};

// Routes
app.use('/auth', authRoutes);

// Protected route
app.get('/protected-route', authenticateToken, (req, res) => {
  res.json({ message: 'Access granted', user: req.user });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
