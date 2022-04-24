const jwt = require("jsonwebtoken");

module.exports = (req, res, next) =>{
    // stores the token for authentication.
    try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, 'jcsio&@$!%!*/');
    // req.userData = {username: decodedToken.email, }
    console.log(decodedToken.userId);
    // add field in request
    req.userData = {email: decodedToken.email, creatorId: decodedToken.userId};
    console.log(req.userData);
    next();
    } catch(error){
        res.status(401).json({message: "Auth failed"});
    }
}; 