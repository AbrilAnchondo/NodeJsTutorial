const express = require("express");
const path = require("path");
const rootDir = require("../helpers/path.js");

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  //console.log("In the another middleware");
  //res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "admin/add-product",
  });
});

// /admin/product => POST
router.post("/product", (req, res, next) => {
  //console.log("data", req.body);
  products.push({ title: req.body.title });
  //console.log("products arr", products);
  res.redirect("/");
});

//module.exports = router;

exports.routes = router;
exports.products = products;
