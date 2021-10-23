let mongoose = require('mongoose');

// create a model class
let contactsModel = mongoose.Schema({
    contactname: String,
    number: String,
    email: String
}, {
    collection: "businessContacts"
});

module.exports = mongoose.model('BusinessContacts', contactsModel);