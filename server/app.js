const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path')

const config = require('./config/config')();
const apiController = require('./controllers/apiController');
const middleware = require('./middleware/authentication');

const app = express();
// Global middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + "/../client/build")));

// API routes here
app.get('/api/allbooks', apiController.allBooks)
app.post('/api/searchbook', apiController.searchBook)

app.post('/api/register', middleware.loggedOut, apiController.register)
app.post('/api/login', middleware.loggedOut, apiController.login)
app.get('/api/logout', middleware.loggedIn, apiController.logout)

app.post('/api/addbook', middleware.loggedIn, apiController.addBook)

// TODO: Swap for server-side universal react routing
app.get("/*", (req, res, next) => {
  res.status(301).redirect("/");
});

// Error handling here
app.use((req, res) => {
  res.status(404).send('We can\' find what you\'re looking for');
})

app.use((err, req, res, next) => {
  console.log('Error handling begin....')
  console.log(err.errorMsg)
  res.status(500).json({
    errorCode: 1,
    errorMsg: err.message
  })
})

module.exports = app;
