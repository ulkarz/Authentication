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
            req.login(user, (err) => {
                // server error
                if (err) {
                    return next(err);
                }
                return res.redirect('/contact-list');
            })
        })(req, res, next);
}

module.exports.displayRegisterPage = (req, res, next) => {
    // check if the user is not already logged in
    if (!req.user) {
        res.render('auth/register', {
            title: "Register",
            messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    } else {
        return res.redirect('/');
    }
}

module.exports.processRegisterPage = (req, res, next) => {
    // instantiate a user object
    let newUser = new User({
        username: req.body.username,
        //password: req.body.password,
        email: req.body.email,
        displayName: req.body.displayName
    });

    User.register(newUser, req.body.password, (user) => {
        if (err) {
            console.log("Error: Inserting New User");
            if (err.name == "UserExistsError") {
                req.flash(
                    'registerMessage',
                    'Registration Error: User already Exists!'
                );
                console.log('Error: User Already Exist!')
            }
            res.render('auth/register', {
                title: 'Register',
                messages: req.flash('registerMessage'),
                displayName: req.user ? req.user.displayName : ''
            });
        }
    });
}

module.exports.performLogoutPage = (req, res, next) => {

}