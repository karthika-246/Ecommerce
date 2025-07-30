const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

const User = require('../models/User');
const router = express.Router();

router.post('/register/:role', async (req, res) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const Model = req.params.role === 'admin' ? Admin : User;
  const user = new Model({ username, password: hash });
  await user.save();
  res.send(`${req.params.role} registered`);
});

router.post('/login/:role', async (req, res) => {
  const { username, password } = req.body;
  const Model = req.params.role === 'admin' ? Admin : User;
  const user = await Model.findOne({ username });
  if (!user) return res.status(400).send('User not found');
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).send('Invalid credentials');
  const token = jwt.sign({ id: user._id, role: req.params.role }, process.env.JWT_SECRET);
  res.json({ token });
});

module.exports = router;
