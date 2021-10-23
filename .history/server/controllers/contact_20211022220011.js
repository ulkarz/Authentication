let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create a reference to the model
let Contact = require('../models/contact');