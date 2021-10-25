const fs = require('fs'); //allows to work with the file system
//routing requests

const requestHandler = (req, res) => {
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
  if (url === '/message' && method === 'POST') {
    //befoe doing anything with the response we want to get/parse the data
    //adding an event listener to the req
    const body = [];
    req.on('data', (data) => {
      console.log('data', data);
      body.push(data);
    });
  
    //once it is done parsing
    return req.on('end', () => {
      const parsedData = Buffer.concat(body).toString();
      //console.log(parsedData);
      const message = parsedData.split('=')[1]; // to get the value from the key value pair sent by thte req
      fs.writeFile('message.text', message, (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My first Node.js Server</title></head>');
  res.write('<body><h1>Hello from my Node Server</h1></body>');
  res.write('</html>');
  res.end();
}

module.exports = requestHandler;