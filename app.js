var express = require('express');
var app = express();
var db = require('./db');
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

var AuthController = require('./auth/AuthController');
app.use('/api/auth', AuthController);

var UserController = require('./user/UserController');
app.use('/users', UserController);

module.exports = app;