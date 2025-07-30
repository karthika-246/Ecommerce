import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const uploadProduct = async () => {
    try {
      await axios.post('http://localhost:5000/api/product/upload', {
        imageUrl,
        name,
        price,
      });
      alert('Product uploaded');
    } catch (err) {
      alert('Failed to upload product');
    }
  };

  return (
    <div>
      <h2>Upload Product</h2>
      <input placeholder="Image URL" onChange={(e) => setImageUrl(e.target.value)} />
      <input placeholder="Product Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Price" type="number" onChange={(e) => setPrice(e.target.value)} />
      <button onClick={uploadProduct}>Upload</button>
    </div>
  );
};

export default ProductForm;
