<<<<<<< HEAD
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  phone: { type: String, required: true },
  dob: { type: String, required: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model("User", userSchema);
=======
// server/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: { type: String, unique: true },
  password: String,
  phone: String,
});

module.exports = mongoose.model('User', userSchema);
>>>>>>> 5b91bf0 (updation1)
