//importing express to create our express backend application for node js
const express = require('express');

//creates the express app and stores in a variable
const app = express();

//'next' is used to tell express to keep traveling down this file and read all of the middlewares until there is no more 'next' function
app.use((req, res, next) => {
    console.log('First middleware');
    next();
});

app.use((req, res, next) => {
    res.send('Hello from express!');
});

//this statement will package the app.js file and send it as an exportable module for server.js to use and run
module.exports = app;