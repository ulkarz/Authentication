let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create a reference to the model
let Contact = require('../models/contact');

module.exports.displayContactList = (req, res, next) => {
    Contact.find((err, contactList) => {
        if (err) {
            return console.error(err);
        } else {
            // console.log(ContactList);
            res.render('contact/list', { title: 'Business Contacts List', ContactList: contactList });
        }
    });
}