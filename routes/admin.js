const express = require("express");
const path = require("path");
const rootDir = require("../helpers/path.js");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  //console.log("In the another middleware");
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/product => POST
router.post("/product", (req, res, next) => {
  //console.log("data", req.body);
  res.redirect("/");
});

module.exports = router;
