//importing express to create our express backend application for node js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Account = require('./models/login');

//creates the express app and stores in a variable
const app = express();

// Establish a connection to the MongoDB database
mongoose.connect("mongodb+srv://zgould24:94yVZrakXjR7OQ9w@sp.jw1hj.mongodb.net/accounts?retryWrites=true&w=majority")
    .then(() => {
        console.log('Connected to Database!')
    })
    .catch(() => {
        console.log("Connection failed.");
    });

// Middleware for parsing json data
app.use(bodyParser.json());
// Middleware for parsing URL data
app.use(bodyParser.urlencoded({ extended: false}));

app.use((req, res, next) => {
    // setHeader(domain access, permission)
    // Access-Control-Allow-Origin clearly defined header understood by the browser
    // * allows any domain to access resources
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        // Domains sending certain set of headers with requests
        // setHeader(header access, headers)
        "Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, X-Access-Token, X-Key"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});
 
// Post method for the server to use to send data to the database
app.post('/login', (req, res, next) => {
    const account = new Account({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });
    console.log(account);
    account.save();
    res.status(201).json({
        message: 'Account added successfully'
    });
});

// Pass in '/login' parameter to send requests only to that specific path
app.get('/login', (req, res, next) => {
    Account.find().then(documents => {
            res.status(200).json({
                message: 'Account fetch successful',
                accounts: documents,
            })
        });
});

//this statement will package the app.js file and send it as an exportable module for server.js to use and run
module.exports = app;