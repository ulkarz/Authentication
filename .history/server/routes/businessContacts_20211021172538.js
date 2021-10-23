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

            res.render('contacts/list', { title: 'Business Contacts List', ContactList: ContactList });
        }
    });
});

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', (req, res, next) => {
    res.render('contacts/add', { title: 'Add Contact' });
});

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', (req, res, next) => {
    let newContact = BusinessContacts({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    BusinessContacts.create(newContact, (err, BusinessContacts) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            //refresh the contact list
            res.redirect('/contact-list');
        }
    });

});

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    BusinessContacts.findById(id, (err, contactToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            //show the edit view
            res.render('contacts/edit', { title: 'Edit Contact', contact: contactToEdit });
        }
    });
});

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id

    let updateContact = BusinessContacts({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    BusinessContacts.updateOne({ _id: id }, updateContact, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            //refresh the contact list
            res.redirect('/contact-list');
        }
    })
});

/* GET to perform the Deletion - DELETE Operation */
router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;

    BusinessContacts.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            //refresh the contact list
            res.redirect('/contact-list');
        }
    })
});





module.exports = router;