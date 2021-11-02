const express = require("express");
const path = require("path");
const rootDir = require("../helpers/path.js");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  //console.log("In the another middleware");
  // requires an absolute path, this path is the root directory of operating system. We need the path core module
  // __dirname is a global variable that holds the absolute path on our operating system to this project folder
  //console.log("products", adminData.products);
  //res.sendFile(path.join(rootDir, "views", "shop.html"));
  const products = adminData.products;
  console.log("getting products:", products);
  res.render("shop", { products: products, pageTitle: "Shop", path: "/" });
});

module.exports = router;
