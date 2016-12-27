const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const config = require('./config/config')();

app.use(bodyParser.json());

// Add your routers here
app.get('/', function (req, res) {
  res.send('Welcome to this home page')
})


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
