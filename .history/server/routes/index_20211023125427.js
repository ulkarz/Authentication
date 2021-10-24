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
router.get('/home', indexController.displayHomePage);

/* GET About Me page. */
router.get('/about', indexController.displayAboutPage);

/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact Me page. */
router.get('/contact', indexController.displayContactPage);

/* GET Route for displaying the Login page */
router.get('/login', contactController.displayAddPage);

/* POST Route for processing the Login page */
router.post('/login', contactController.processAddPage);

/* GET Route for displaying the Register page */
router.get('/register', contactController.displayAddPage);

/* POST Route for processing the Register page */
router.post('/register', contactController.processAddPage);

/* GET to perform the UserLogout */
router.get('/logout', contactController.performDelete);

module.exports = router;