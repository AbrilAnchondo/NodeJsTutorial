const express = require("express");
const path = require("path");
const rootDir = require("../helpers/path.js");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("In the another middleware");
  // requires an absolute path, this path is the root directory of operating system. We need the path core module
  // __dirname is a global variable that holds the absolute path on our operating system to this project folder
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
