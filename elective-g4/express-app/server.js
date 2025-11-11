//server side js
const express = require("express");
const app = express();
let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/electiveg4", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check connection
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.log("MongoDB connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});

const ProductModel = require("./models/product.model");
app.post("/api/products", (req, res) => {
  return res.send([]);
});
app.get("/api/products", (req, res) => {
  return res.send(["Hello"]);
});

app.get("/", async (req, res) => {
  // return res.send("Hello World");
  let products = await ProductModel.find();
  console.log(products);
  return res.send(products);
});

app.listen(3000, () => {
  console.log("server started");
});
