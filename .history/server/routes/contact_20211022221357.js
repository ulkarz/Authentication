let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to Business-Contacts Model
let Contact = require('../models/contact');

let contactController = require('../controllers/contact');

/* GET Route for the Contact List page - READ Operation */
router.get('/', contactController.displayContactList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', contactController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', contactController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, contactToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            //show the edit view
            res.render('contact/edit', { title: 'Edit the Contact', contact: contactToEdit });
        }
    });
});

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id

    let updatedContact = Contact({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    Contact.updateOne({ _id: id }, updatedContact, (err) => {
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

    Contact.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            //refresh the contact list
            res.redirect('/contact-list');
        }
    });
});

module.exports = router;