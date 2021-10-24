// Core Modules: fs, os, path, http and https (to work with req and res, launch a server)
// this modules need to be imported, not available globally by default
const http = require('http');
const fs = require('fs'); //allows to work with the file system

// function reqListener(req, res) {

// }
// // passing the function reference, so createServer looks for this function and executes it for every incoming req
// http.createServer(reqListener);

//event driven arquitechture
// the arg is a callback that gets executed everytime a req reaches the server
// createServer actually creates a server so to use it need to be stored in a variable
const server = http.createServer((req, res) => {
  //console.log('req',req.url, req.method, req.headers);
  //process.exit(); this command quits the server, typically you dont call this be cause we want the server running

  //routing requests
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title> Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type=text name=message><button type=submit>Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  //redirecting requests
  if (url === '/message') {
    //befoe doing anything with the response we want to get/parse the data
    //adding an event listener to the req
    const body = [];
    req.on('data', (data) => {
      console.log('data', data);
      body.push(data);
    });

    //once it is done parsing
    req.on('end', () => {
      const parsedData = Buffer.concat(body).toString();
      //console.log(parsedData);
      const message = parsedData.split('=')[1]; // to get the value from the key value pair sent by thte req
      fs.writeFileSync('message.text', message);
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My first Node.js Server</title></head>');
  res.write('<body><h1>Hello from my Node Server</h1></body>');
  res.write('</html>');
  res.end();
});

// node will keep this running to listen to evey req
server.listen(3000);