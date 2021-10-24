/*  File Name: user.js
    Name: Ulkar Zakaryayeva
    Student Number: 301107604
    Date: October 23, 2021
*/

let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Placeholder');
});

module.exports = router;