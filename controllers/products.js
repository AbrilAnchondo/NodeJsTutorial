// product related logic

const products = [];

exports.getAddProductPage = (req, res, next) => {
  //console.log("In the another middleware");
  //res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    // formCSS: true,
    // productCSS: true,
    // activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  //console.log("data", req.body);
  products.push({ title: req.body.title });
  //console.log("products arr", products);
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  // requires an absolute path, this path is the root directory of operating system. We need the path core module
  // __dirname is a global variable that holds the absolute path on our operating system to this project folder
  //res.sendFile(path.join(rootDir, "views", "shop.html"));
  res.render("shop", { products: products, pageTitle: "Shop", path: "/" });
};