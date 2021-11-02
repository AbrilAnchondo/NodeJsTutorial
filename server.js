// Core Modules: fs, os, path, http and https (to work with req and res, launch a server)

// this modules need to be imported, not available globally by default
//const http = require("http");

const path = require("path");
const express = require("express"); //exports a function so:

const app = express(); //will initialize a new obj were express will manage a lot of things

//setting a global configuration value
app.set("view engine", "ejs");
// letting express know where to find our views, this already works by default
app.set("views", "views");

const adminData = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");

const bodyParser = require("body-parser");

// use allows to add a middleware function executed for every incoming requests, receives 3 ars: req res and next
//next()is a function passes to the other function, has to be executed to allow the req to travel onto the next middleware
// app.use((req, res, next) => {
//   console.log("In the middleware");
//   next();
// });

// parsing middleware
// registers a middleware, it parses the data, calls next()
// extended is to parse nondefault features
app.use(express.urlencoded({ extended: true }));

//static middleware that forward the request to the public forlder
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", (req, res, next) => {
//   console.log("this will always show up");
//   next();
// });

app.use("/admin", adminData.routes);

app.use(shopRoutes);

//middleware to catch all requests: get, post etc
app.use((req, res, next) => {
  //res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

// function reqListener(req, res) {
// }
// // passing the function reference, so createServer looks for this function and executes it for every incoming req
// http.createServer(reqListener);

// event driven arquitechture
// the arg is a callback that gets executed everytime a req reaches the server
// createServer actually creates a server so to use it need to be stored in a variable
// const server = http.createServer(app); //with express this is not neeeded

// node will keep this running to listen to evey req
// server.listen(3000);

// becuase we are using express
app.listen(3000);
