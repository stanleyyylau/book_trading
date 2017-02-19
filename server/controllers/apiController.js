const Book = require('./../models/Book')
const User = require('./../models/User')

const books = require('google-books-search');


module.exports.allBooks = function(req, res) {
    Book.find({}).then((books)=> {
        res.json(books)
    }).catch((err) => {
        res.json(err)
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
    res.json({
        hi: "hi"
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
}