const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

before(done => {
  mongoose.connect('mongodb://localhost/book_trading_test');
  mongoose.connection
    .once('open', () => done())
    .on('error', error => {
      console.warn('Warning', error);
    });
});

beforeEach(done => {
  console.log('running before Each in test_helper.js');
  done();
});
