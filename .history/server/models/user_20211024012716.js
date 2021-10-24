/*  File Name: user.js
    Name: Ulkar Zakaryayeva
    Student Number: 301107604
    Date: October 4, 2021
*/

//require modules for the User Model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema({
    username: {
        type: String,
        default: "",
        trim: true,
        required: "username is required"
    },
    /*
    password
    {
        type: String,
        default: "",
        trim: true,
        required: "username is required"
    }
    */
    email: {
        type: String,
        default: "",
        trim: true,
        required: "email address is required"
    },
    displayName: {
        type: String,
        default: "",
        trim: true,
        required: "Display Name is required"
    },
    created: {
        type: Date,
        default: Date.now
    },
    update: {
        type: Date,
        default: Date.now
    }

}, {
    collection: "users"
});

//configure options for User Model

let options = ({ missingPasswordError: 'Wrong / Missing Password' });

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);