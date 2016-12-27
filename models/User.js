const mongoose = require('mongoose');
const Book = require('./Book');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  books: [{
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }]
})


/**
 * instance method, whoever use this function to add a book
 * will become the owner of the newly added book
 * @param bookTitle
 * @returns {Promise.<*>}
 */
UserSchema.methods.addBook = function (bookTitle) {
  var newBook = new Book({
    title: bookTitle,
    owner: this._id
  })

  this.books.push(newBook)
  return Promise.all([this.save(), newBook.save()])
};

/**
 * instance method
 * @param theirBookId
 * @param myBookId
 * @returns {Promise.<TResult>}
 */
UserSchema.methods.tradeWith = function (theirBookId, myBookId) {
  var myBook, theirBook;

  myBook = Book.findById(myBookId);
  theirBook = Book.findById(theirBookId);

  return Promise.all([theirBook, myBook]).then(function (result) {
    var theirs = result[0];
    var mine = result[1];
    theirs.tradeReceive.push(mine._id);
    mine.tradeSent.push(theirs._id);
    return Promise.all([mine.save(), theirs.save()])
  })

};

/**
 * Model method
 * @param userIdToCheck
 */
UserSchema.statics.checkTradeReceived = function (userIdToCheck) {
  this.findById(userIdToCheck)
    .populate({
      path: 'books',
      populate: {
        path: 'tradeReceive',
        model: 'Book'
      }
    })
    .then((result) => {
      console.log(result.books[0])
    })
};

UserSchema.statics.checkTradeSent = function (userIdToCheck) {

};

var User = mongoose.model('User', UserSchema);

module.exports = User;

