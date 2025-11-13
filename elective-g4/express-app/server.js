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
app.set("view engine", "ejs");
app.use(express.json());
const ProductModel = require("./models/product.model");

app.post("/api/products", async (req, res) => {
  let product = new ProductModel(req.body);
  await product.save();
  return res.send(product);
});

app.get("/api/products", async (req, res) => {
  let products = await ProductModel.find();
  return res.send(products);
});

app.get("/", async (req, res) => {
  // return res.send("Hello World");
  let products = await ProductModel.find();
  // console.log(products);
  // return res.send(products);
  return res.render("homepage", { total: 5, products });
});

app.listen(3000, () => {
  console.log("server started");
});
