/*  File Name: contact.js
    Name: Ulkar Zakaryayeva
    Student Number: 301107604
    Date: October 23, 2021
*/

let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
}, {
    collection: "businessContacts"
});

module.exports = mongoose.model('Contact', contactModel);