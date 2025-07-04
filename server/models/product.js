const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  image: String,
  new_price: Number,
  old_price: Number,
});

module.exports = mongoose.model('Product', productSchema);
