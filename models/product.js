const fs = require("fs");
const path = require("path");
const rootDir = require("../helpers/path.js");
const Cart = require("./cart.js");

const p = path.join(rootDir, "data", "products.json");

const getProductsFromFile = (cb) => {
  // cb will be executed once it is done reading the file
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id, title, imageUrl, price, description) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  save() {
    getProductsFromFile((products) => {
      if (this.id) {
        // console.log("this.id", this.id);
        const existingProductIndex = products.findIndex(
          (product) => product.id === this.id
        );
        const updatedProducts = [...products];
        updatedProducts[existingProductIndex] = this;
        //console.log("prod w/existing id", this);
        fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
          console.log("err", err);
        });
      } else {
        this.id = Math.floor(Math.random() * 1000).toString();
        // console.log("this.id", this.id);
        // console.log("new prod", this);
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err) => {
          console.log("err", err);
        });
      }
    });
  }

  // method delete product by id
  static deleteById(id) {
    console.log("id from prod model", id);
    getProductsFromFile((products) => {
      const product = products.find((prod) => prod.id === id);
      const updatedProducts = products.filter((product) => product.id !== id);
      console.log("Product from Model", product);
      fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
        if (!err) {
          // delete product from cart
          Cart.deleteProduct(id, product.price);
        }
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id, cb) {
    getProductsFromFile((products) => {
      const product = products.find((p) => p.id === id);
      cb(product);
    });
  }
};
