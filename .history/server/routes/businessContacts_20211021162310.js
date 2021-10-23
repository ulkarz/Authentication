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
router.get('/add', (req, res, next) => {

    })
    /* POST Route for processing the Add page - CREATE Operation */
router.post('/add', (req, res, next) => {

    })
    /* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', (req, res, next) => {

    })
    /* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', (req, res, next) => {

    })
    /* GET to perform the Deletion - DELETE Operation */






module.exports = router;