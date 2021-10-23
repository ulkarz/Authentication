/* File Name: index.js
   Name: Ulkar Zakaryayeva
   Student Number: 301107604
   Date: October 4, 2021
*/


let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET Home page. */
router.get('/', indexController.displayHomePage);

/* GET Home page. */
router.get('/home', function(req, res, next) {
    res.render('index', { title: 'Home', });
});

/* GET About Me page. */
router.get('/about', function(req, res, next) {
    res.render('about', { title: 'About Me', });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
    res.render('projects', { title: 'Projects', });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
    res.render('services', { title: 'Services', });
});

/* GET Contact Me page. */
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact Me', });
});

module.exports = router;