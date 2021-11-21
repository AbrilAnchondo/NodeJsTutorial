const express = require("express");
const path = require("path");
const adminController = require("../controllers/admin.js");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", adminController.getAddProductPage);

// /adming/products => GET
router.get("/products", adminController.getAdminProducts);

// /admin/product => POST
router.post("/product", adminController.postAddProduct);

// /admin/product/:productId => GET
router.get("/edit-product/:productId", adminController.getEditProduct);

module.exports = router;
