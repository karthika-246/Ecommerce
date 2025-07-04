import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; // ✅ import navigation hook
import "./AddProduct.css";

function ProductForm() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    category: "",
    image: "",
    new_price: "",
    old_price: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/products", product);
      toast.success(res.data.message);
      setProduct({ name: "", category: "", image: "", new_price: "", old_price: "" });
      navigate("/"); // ✅ go to NewCollections page
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to add product");
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={product.name} onChange={handleChange} placeholder="Product Name" required />
        <input name="category" value={product.category} onChange={handleChange} placeholder="Category" required />
        <input name="image" value={product.image} onChange={handleChange} placeholder="Image URL" required />
        <input name="new_price" value={product.new_price} onChange={handleChange} placeholder="New Price" required />
        <input name="old_price" value={product.old_price} onChange={handleChange} placeholder="Old Price" />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default ProductForm;
