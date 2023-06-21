const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define user schema with indexes
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, index: true },
  createdAt: { type: Date, index: true },
});

// Create User model
const User = mongoose.model('User', userSchema);

// Function to create indexes
function createIndexes() {
  User.createIndexes((err) => {
    if (err) {
      console.error('Error creating indexes:', err);
    } else {
      console.log('Indexes created successfully');
    }
    mongoose.disconnect();
  });
}

// Invoke the createIndexes function
createIndexes();
