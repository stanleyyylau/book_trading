const Book = require('./../models/Book')
const User = require('./../models/User')

const books = require('google-books-search');
const jwt = require("jsonwebtoken");

module.exports.allBooks = function(req, res) {
    Book.find({}).then((books)=> {
        res.json(books)
    }).catch((err) => {
        res.json(err)
    })
}

module.exports.getOneBook = function(req, res) {
    let bookId = req.params.id
    Book.findById(bookId).then((book) => {
        res.json(book)
    }).catch((err) => {
        res.json({
            errorCode: 1,
            error: err
        })
    })
}

module.exports.searchBook = function(req, res) {
    let bookTitle = req.body.title
    books.search(bookTitle, function(error, results) {
        if ( ! error ) {
            res.json(results)
        } else {
            res.json(error);
        }
    });    
}

module.exports.addBook = function(req, res) {
    let newBook = new Book({
        owner: req.decoded.id,
        title: req.body.title || "unknown title",
        author: req.body.author || "unknown author",
        pages: req.body.pages || "unknown page number",
        image: req.body.image || "unknown image",
        description: req.body.description || "unknown description"
    })

    User.findById(req.decoded.id).then((user) => {
        user.books.push(newBook._id)
        return user.save()
    }).then((user) => {
        return newBook.save()
    }).then((newBook)=>{
        res.json({
            errorCode: 0,
            msg: "Adding new book success!"
        })
    })

}

module.exports.register = function(req, res) {
    // Todo, need to check if email has been regiter or not
    let newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    // Because we have a pre save function, the password will be hashed
    newUser.save().then((user)=>{
                res.json({
                    errorCode: 0
                }).catch((err)=>{
                res.json({
                    errorCode: 1,
                    errorInfo: err
                })
            })
    })

    // Todo, might do someting on the client side so user will automatically log in after signing up
}

module.exports.login = function(req, res, next){
    // Authenticate mathod on UserSchame on bcrypt's compare function to make sure password provided is correct
    User.authenticate(req.body.email, req.body.password, (error, user) => {
        if (error || !user) {
        res.json({ errorCode: 1, errorMsg: "Invalid username or password" })
        } else {
        // Return a token if user is authenticated
        jwt.sign({ username: user.username, id: user._id }, process.env.JWT_SECRET, { algorithm: "HS256", expiresIn: "5 days"}, (error, token) => {
            if (error) {
            return next(error);
            }
            res.status(200).json({ errorCode: 0, token: token });
        });
        }
    });    
}

module.exports.logout = function(req, res, next){
  // Delete the token for request header
  if (req.decoded) {
    req.decoded = null;
  }
  // Todo, something need to happen on the client side to delete token in header or token in request body
  res.json({
      errorCode: 0,
      msg: "Logged out from system"
  })
}