let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// create the User Model instance
let userModel = require('../models/user');
let User = userModel.User; // alias


module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home' });
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('about', { title: 'About Me' });
}

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('projects', { title: 'Projects' });
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('services', { title: 'Services' });
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('contact', { title: 'Contact Me' });
}

module.exports.displayLoginPage = (req, res, next) => {
    // check if the user is already logged in
    if (!req.user) {
        res.render('auth/login', {
            title: "Login",
            messages: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName : ''
        })
    } else {
        return res.render('/');
    }
}

module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local',
        (err, user, info) => {
            if (err) {
                return next(err);
            }
            // is there a user login?
            if (!user) {
                req.flash('loginMessage', 'Authentication Error');
                return res.redirect('/login');
            }
        }
    )
}