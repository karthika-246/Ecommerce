<<<<<<< HEAD
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
const app = express();


// Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json()); // Allows JSON request body parsing

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/ecomdb")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);
app.use("/api/products", productRoutes);
// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
=======
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// DB Connection
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB error: ", err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
>>>>>>> 5b91bf0 (updation1)
