const express = require("express");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  console.log("In the another middleware");
  res.send(
    "<form action='/admin/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>"
  );
});

// /admin/product => POST
router.post("/product", (req, res, next) => {
  console.log("data", req.body);
  res.redirect("/");
});

module.exports = router;