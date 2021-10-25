// Core Modules: fs, os, path, http and https (to work with req and res, launch a server)
// this modules need to be imported, not available globally by default
const http = require('http');

const routes = require('./routes.js');

// function reqListener(req, res) {
// }
// // passing the function reference, so createServer looks for this function and executes it for every incoming req
// http.createServer(reqListener);

// event driven arquitechture
// the arg is a callback that gets executed everytime a req reaches the server
// createServer actually creates a server so to use it need to be stored in a variable
const server = http.createServer(routes);
 
// node will keep this running to listen to evey req
server.listen(3000);