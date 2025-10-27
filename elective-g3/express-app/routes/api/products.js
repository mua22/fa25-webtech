const express = require("express");
let ProductModel = require("../../models/product.model");
let router = express.Router();
router.get("/:id", async (req, res) => {
  const product = await ProductModel.findById(req.params.id);
  res.send(product);
});
router.delete("/:id", async (req, res) => {
  const product = await ProductModel.findByIdAndDelete(req.params.id);
  res.send(product);
});

router.get("/", async (req, res) => {
  const products = await ProductModel.find();
  res.send(products);
});
router.post("/", async (req, res) => {
  let data = req.body;
  let record = new ProductModel(data);
  await record.save();
  res.send(record);
});
router.put("/:id", async (req, res) => {
  let data = req.body;
  // let record = await ProductModel.findByIdAndUpdate(req.params.id, data, {
  //   new: true,
  // });
  let record = await ProductModel.findById(req.params.id);
  record.name = data.name;
  record.price = data.price;
  record.description = data.description;
  await record.save();
  res.send(record);
});

module.exports = router;
