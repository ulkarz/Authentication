let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to Business-Contacts Model
let BusinessContacts = require('../models/bcontacts');

/* GET Route for the Contact List page - READ Operation */
router.get('/', (req, res, next) => {
    BusinessContacts.find((err, ContactList) => {
        if (err) {
            return console.error(err);
        } else {
            // console.log(ContactList);

            res.render('bcontacts', { title: 'Business Contacts List', ContactList: ContactList })
        }
    });
});

/* GET Route for displaying the Add page - CREATE Operation */

/* POST Route for processing the Add page - CREATE Operation */

/* GET Route for displaying the Edit page - UPDATE Operation */

/* POST Route for processing the Edit page - UPDATE Operation */

/* GET to perform the Deletion - DELETE Operation */






module.exports = router;