const express = require('express');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/user');
const user = require('../models/user');

router.post("/signup", (req, res, next)=> {
   
    user.findOne({email: req.body.email}).then(user=> {
        if (user) {
            return res.status(401).json({
                message: "User already exists."
            })
        }
        //bcrypt would encode the password. 
    bcrypt.hash(req.body.password, 10).then(password => {
        console.log(password);
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            username: req.body.username,
            password: password
        });
        user.save().then(result => {
            res.status(200).json({
                message: "User successfully created.",
                result: result
            });
        }).catch(err => {
        res.status(500).json({
            error: err
        })});
    })})  
})

router.post("/login", (req, res, next) => {
    console.log("authentication middleware.");
    let fetchedUser;
    User.findOne({email: req.body.email}).then(user => {
        // turned out the express won't like this part having here. 
        // if (!user){
        //     return res.status(401).json({
        //         message: "User do not exist"
        //     })
        // }
        fetchedUser = user;
        return bcrypt.compare(req.body.password, user.password);
    }).then(result => {
        if (!result){
            return res.status(401).json({
                message: "Auth failed."
            })
        }
        const token = jwt.sign({email: fetchedUser.email, userId: fetchedUser._id}, 'jcsio&@$!%!*/', {"expiresIn": "1h"});
        res.status(200).json({
            token: token,
            expiresIn: 3600,
            userId: fetchedUser._id
        })
    }).catch(err => {
        return res.status(401).json({
            message: "Auth failed"
        });
    });
})



module.exports = router;