import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";

dotenv.config();

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV} port on ${PORT}`);
});
