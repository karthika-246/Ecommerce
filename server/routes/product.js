const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

// Product schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  new_price: { type: Number, required: true },
  old_price: { type: Number }
});

const Product = mongoose.model("Product", productSchema);

// POST - Add Product
router.post("/", async (req, res) => {
  try {
    const { name, category, image, new_price, old_price } = req.body;

    if (!name || !category || !image || !new_price) {
      return res.status(400).json({ message: "All required fields must be filled" });
    }

    const newProduct = new Product({ name, category, image, new_price, old_price });
    await newProduct.save();

    res.status(201).json({ message: "Product added successfully", product: newProduct });
  } catch (err) {
    console.error("Error adding product:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// GET - Fetch All Products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
