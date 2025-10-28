//server side js
const express = require("express");
const app = express();

app.post("/api/products", (req, res) => {
  return res.send([]);
});
app.get("/api/products", (req, res) => {
  return res.send(["Hello"]);
});

app.listen(3000, () => {
  console.log("server started");
});
