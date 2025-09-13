import React, { useState, useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const ProductForm = () => {
  const { addProduct } = useContext(ShopContext);
  const [form, setForm] = useState({ name: "", price: "", quantity: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.quantity) {
      alert("⚠️ Please fill all fields");
      return;
    }
    addProduct({
      name: form.name,
      price: parseInt(form.price),
      quantity: parseInt(form.quantity),
    });
    setForm({ name: "", price: "", quantity: "" });
    alert("✅ Product Added!");
  };

  return (
    <div className="product-form">
      <h2>➕ Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={form.quantity}
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
