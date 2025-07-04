// const express = require('express');
// const bcrypt = require('bcrypt');
// const router = express.Router();
// const User = require('../models/User'); // your Mongoose model

// // Register
// router.post('/register', async (req, res) => {
//   try {
//     const { firstname, lastname, email, phone, password } = req.body;

//     const existing = await User.findOne({ email });
//     if (existing) return res.status(400).json({ msg: 'Email already exists' });

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({ firstname, lastname, email, phone, password: hashedPassword });
//     await newUser.save();

//     res.status(201).json({ msg: 'Registered successfully!' });
//   } catch (err) {
//     res.status(500).json({ msg: 'Server error' });
//   }
// });
