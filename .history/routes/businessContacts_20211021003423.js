let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to Business-Contacts Model
let BusinessContacts = require('../models/bcontacts');

/* GET Route for the Contact List page - READ Operation */
router.get('/', (req, res, next) => {
    BusinessContacts.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
           // console.log(ContactList);

           res.render('bcontacts', {title: 'Business Contacts List', ContactList: contactList})
        }
    })
})

module.exports = router;
