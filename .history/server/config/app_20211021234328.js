//Installed 3rd party packages
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');


// database setup
let mongoose = require('mongoose');
let DB = require('./db');

// point mongoose to the DB URI
mongoose.connect(DB.URI, { useNewUrlParser: true, useUnifiedTopology: true });

let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
mongoDB.once('open', () => {
    console.log('Connected to MongoDB...');
});

let indexRouter = require('../routes/index');
let usersRouter = require('../routes/users');
let contactsRouter = require('../routes/businessContacts');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs'); // express -e

let ejsOptions = {
    // delimiter: '?', Adding this to tell you do NOT use this like I've seen in other docs, does not work for Express 4
    async: true
};

// The engine is using a callback method for async rendering
app.engine('ejs', async(path, data, cb) => {
    try {
        let html = await ejs.renderFile(path, data, ejsOptions);
        cb(null, html);
    } catch (e) {
        cb(e, '');
    }
});
app.route('/contact-list').get(async(req, res) => {
    // layout.ejs is my version of blocking. I pass the page name as an option to render custom pages in the template
    return res.render('list.ejs', { page: 'contact-list' }, (err, html) => standardResponse(err, html, res));
});
const standardResponse = (err, html, res) => {
    // If error, return 500 page
    if (err) {
        console.log(err);
        // Passing null to the error response to avoid infinite loops XP
        return res.status(500).render('list.ejs', { page: '500', error: err }, (err, html) => standardResponse(null, html, res));
        // Otherwise return the html
    } else {
        return res.status(200).send(html);
    }
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contact-list', contactsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error', { title: 'Error' });
});

module.exports = app;