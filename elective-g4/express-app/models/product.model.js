let mongoose = require("mongoose");
let schema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
});
let Model = mongoose.model("Product", schema);
module.exports = Model;
