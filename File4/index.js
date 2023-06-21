const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://array:arr123@cluster0.8hkghd8.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define schema
const authorSchema = new mongoose.Schema({
  name: String,
});

const bookSchema = new mongoose.Schema({
  title: String,
  authors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Author' }],
});

// Define models
const Author = mongoose.model('Author', authorSchema);
const Book = mongoose.model('Book', bookSchema);

// Create authors
const author1 = new Author({ name: 'John Doe' });
const author2 = new Author({ name: 'Jane Smith' });

// Save authors to the database using Promises
Promise.all([author1.save(), author2.save()])
  .then((savedAuthors) => {
    // Create a book with the referenced author IDs
    const book = new Book({
      title: 'Sample Book',
      authors: [savedAuthors[0]._id, savedAuthors[1]._id],
    });

    // Save the book to the database
    return book.save();
  })
  .then((savedBook) => {
    // Populate the authors field of the book
    return Book.findById(savedBook._id).populate('authors').exec();
  })
  .then((populatedBook) => {
    console.log('Populated Book:', populatedBook);
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error('Error:', err);
  });
