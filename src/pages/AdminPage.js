import React from 'react';
import ProductForm from '../components/ProductForm';

const AdminPage = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Panel - Add Product</h2>
      <ProductForm />
    </div>
  );
};

export default AdminPage;