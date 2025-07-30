const mongoose = require('mongoose'); // ✅ Required at the top

const productSchema = new mongoose.Schema({
  imageUrl: String,
  name: String,
  price: Number
});

module.exports = mongoose.model('Product', productSchema);
