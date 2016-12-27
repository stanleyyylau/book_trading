const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new mongoose.Schema({
  title: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  tradeSent: [{
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }],
  tradeReceive: [{
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }]
})

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;