const Product = require("../models/product.js");

exports.getAddProductPage = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    // formCSS: true,
    // productCSS: true,
    // activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getAdminProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      products: products,
      pageTitle: "Admin Product List",
      path: "/admin/products",
    });
  });
};
