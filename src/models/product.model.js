 const mongoose = require("mongoose");

const Product = mongoose.Schema({
  idProduct: Number,
  description: String,
  brand: String,
  price:Number
});

module.exports = mongoose.model("Product", Product);