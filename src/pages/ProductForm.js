import React, { useState } from 'react';
import { addProduct } from '../utils/api';

const ProductForm = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    const token = localStorage.getItem('token');
    const res = await addProduct({ imageUrl, name, price }, token);
    setMessage(res.data);
  };

  return (
    <div>
      <input placeholder="Image URL" onChange={(e) => setImageUrl(e.target.value)} /><br /><br />
      <input placeholder="Product Name" onChange={(e) => setName(e.target.value)} /><br /><br />
      <input type="number" placeholder="Price" onChange={(e) => setPrice(e.target.value)} /><br /><br />
      <button onClick={handleSubmit}>Add Product</button>
      <p>{message}</p>
    </div>
  );
};

export default ProductForm;