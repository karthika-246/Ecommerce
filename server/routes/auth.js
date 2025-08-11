<<<<<<< HEAD
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
=======
const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();
  


router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: 'User not found. Please register.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    res.json({ msg: 'Login successful' });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ email, password: hashedPassword });
    await user.save();

    res.json({ msg: 'User registered successfully' });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
>>>>>>> 5b91bf0 (updation1)
