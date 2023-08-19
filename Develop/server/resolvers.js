// resolvers.js
const Book = require('./models/Book'); // Assuming you have a Book model

const resolvers = {
  Query: {
    getBooks: async () => {
      try {
        // Fetch the list of books from your database or data source
        const books = await Book.find();
        return books;
      } catch (error) {
        throw new Error('Error fetching books: ' + error.message);
      }
    },
  },
};

module.exports = resolvers;