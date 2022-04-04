//imports (using a "const" is good code since you don't plan on changing imports)
const { debug } = require('console');
const http = require('http');
const { env } = require('process');
const app = require('./backend/app');

// const port = process.env.PORT || 3000;

// //this tells which port express will be working on 
// app.set('port', port)
// //creating the server that will take a request and send a response; the server isn't running at this point
// const server = http.createServer(app);

// //server will be listening from a designated assigned port OR a specified one like '3000'

// //when it listens, the server will run and nothing will happen until it sees what it is listening for
// server.listen(port);

// this function will ensure that when a port number is passed through a variable, we can check to make sure that 'val' is a valid number
//   can be used to create a valid port number
const normalizePort = val => {
    var port = parseInt(val, 10);

    if(isNaN(port)) {
        // named pipe
        return val;
    }

    if(port >= 0) {
        // port number 
        return port;
    }

    return false;
};

// will throw errors that happen when trying to access port and will handle it gracefully and exit the program
const onError = error => {
    if(error.syscall !== "listen") {
        throw error;
    }

    const bind = typeof addr === "string" ? "pipe" + addr : "port " +  port;
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
};

// logs that we are now listening for incoming requests from the server
 const onListening = () => {
    const addr = server.address();
    const bind = typeof addr === "string" ? "pipe" + addr : "port " + port;
    debug("Listening on " + bind);
 };

 // checks port and returns it if it is valid or not
 const port = normalizePort(process.env.PORT || 3000);
 // links the port to the express app
 app.set("port", port);

 // creates the node server, adds the error and listening functions and establishes port to node server
 const server = http.createServer(app);
 server.on("error", onError);
 server.on("listening", onListening);
 server.listen(port);