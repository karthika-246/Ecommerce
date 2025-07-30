const express = require('express');
const jwt = require('jsonwebtoken');
const Product = require('../models/product');
const router = express.Router();

const verifyAdmin = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).send('Access denied');
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== 'admin') return res.status(403).send('Admins only');
    req.user = decoded;
    next();
  } catch {
    res.status(400).send('Invalid token');
  }
};

router.post('/add', verifyAdmin, async (req, res) => {
  const { imageUrl, name, price } = req.body;
  const product = new Product({ imageUrl, name, price });
  await product.save();
  res.send('Product added');
});

module.exports = router;
