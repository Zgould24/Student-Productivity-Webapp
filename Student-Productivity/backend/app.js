//importing express to create our express backend application for node js
// const express = require('express');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Course = require('./models/course');
const CoursesRoute = require("./routes/courses");
const UsersRoute = require("./routes/users");
const AssignmentRoute = require('./routes/assignments');

//creates the express app and stores in a variable
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//establishing connection to MongoDB database with Mongoose.
mongoose.connect("mongodb+srv://hirosato:iuoh4HSEvbOccQDT@spcluster.pxhv0.mongodb.net/SPDatabase?retryWrites=true&w=majority")
          .then(()=> {
            console.log("Connected to database!");
          })
          .catch(() => {
            console.log("Connection failed.");
          });

//'next' is used to tell express to keep traveling down this file and read all of the middlewares until there is no more 'next' function

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});
app.use("/api/courses", CoursesRoute);
app.use("/api/user", UsersRoute);
app.use("/api/assignments", AssignmentRoute);


//this statement will package the app.js file and send it as an exportable module for server.js to use and run
module.exports = app;