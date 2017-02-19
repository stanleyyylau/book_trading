const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path')

const config = require('./config/config')();
const apiController = require('./controllers/apiController');

const app = express();
// Global middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + "/../client/build")));

// API routes here
app.get('/api/allbooks', apiController.allBooks)
app.post('/api/searchbook', apiController.searchBook)
app.post('/api/addbook', apiController.addBook)
app.post('/api/register', apiController.register)

// TODO: Swap for server-side universal react routing
app.get("/*", (req, res, next) => {
  res.status(301).redirect("/");
});

// Error handling here
app.use((req, res) => {
  res.status(404).send('We can\' find what you\'re looking for');
})

app.use((err, req, res, next) => {
  console.error('got error')
  console.log(err)
  res.status(500).send('Something broke!')
})

module.exports = app;
