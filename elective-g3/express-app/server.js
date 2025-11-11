// install node
// it will install node and npm
// https://nodejs.org/en/download
// test node and npm by running node -v and npm -v in terminal
// run npm init -y to create a package.json file
// install express by running npm install

// in development mode run nodemon server.js
// install nodemon globally by running npm install -g nodemon

const express = require("express");
const mongoose = require("mongoose");
const app = express();
var expressLayouts = require("express-ejs-layouts");
var ProductModel = require("./models/product.model");
let apiProductsRouter = require("./routes/api/products");
const PORT = 3000;

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/electiveg3", {
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

//expose public folder to the browser
//now we can access files in public folder directly
//http://localhost:3000/contact-us.html
// if static files are in a folder named 'public', use the following line
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(expressLayouts); //  setup layout mechanism
// app.get("/contact-us.html", (req, res) => {
//   res.send("Contact Us Page");
// });
app.use("/api/products", apiProductsRouter);

app.get("/contact-us", (req, res) => {
  res.render("contactus");
});
app.get("/hobbies.html", (req, res) => {
  res.render("contactus");
});

app.get("/", async (req, res) => {
  res.send("Hello World!");
  // let products = await ProductModel.find();
  // res.send(products);
  // res.render("homepage", { products, pageTitle: "Toys for Little Angels" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
