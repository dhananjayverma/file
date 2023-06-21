const bcrypt = require('bcrypt');
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');

// Register a new user
exports.registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ email, password: hashedPassword });

    // Save the user to the database
    await newUser.save();

    res.json({ message: 'User registered successfully.' });
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).json({ message: 'Error registering user.' });
  }
};

// Login user
exports.loginUser = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error authenticating user.' });
    }

    if (!user) {
      return res.status(401).json({ message: info.message });
    }

    req.login(user, { session: false }, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error logging in user.' });
      }

      // Generate and sign a JWT
      const token = jwt.sign({ userId: user._id }, secretKey);

      res.json({ message: 'Login successful.', token });
    });
  })(req, res, next);
};

// Logout user
exports.logoutUser = (req, res) => {
  req.logout();
  res.json({ message: 'Logged out.' });
};
