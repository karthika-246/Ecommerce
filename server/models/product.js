const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true }, // ✅ will store full image URL
  new_price: { type: Number, required: true },
  old_price: { type: Number }
});

module.exports = mongoose.model("Product", productSchema);
