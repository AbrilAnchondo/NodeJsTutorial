const express = require("express");
const path = require("path");
//const rootDir = require("../helpers/path.js");
const productsController = require("../controllers/products.js");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", productsController.getAddProductPage);

// /admin/product => POST
router.post("/product", productsController.postAddProduct);

//module.exports = router;

module.exports = router;
