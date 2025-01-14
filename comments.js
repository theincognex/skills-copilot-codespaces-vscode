// Create web server
// Create web server
// npm install express
// npm install body-parser
// npm install nodemon
// npm install cors
// npm install mongodb
// npm install mongoose

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Comment = require('./models/Comment');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/