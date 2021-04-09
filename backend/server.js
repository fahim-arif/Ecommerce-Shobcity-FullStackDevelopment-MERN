const express = require("express");
const products = require("./data/products");
const app = express();

app.get("/", (req, res, next) => {
  res.send("API IS RUNNING");
});

app.get("/api/products", (req, res, next) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res, next) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(5000, () => {
  console.log("Server is running on port");
});
