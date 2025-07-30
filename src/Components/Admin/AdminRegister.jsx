import React, { useState } from 'react';
import axios from 'axios';
import '../Admin/register.css';
const AdminRegister = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/admin/register', form);
      alert(res.data.message);
    } catch (err) {
      alert(err.response.data.message || 'Register failed');
    }
  };

  return (
    <div className="register-container">
  <h2>Admin Register</h2>
  <input name="name" placeholder="Name" onChange={handleChange} />
  <input name="email" placeholder="Email" onChange={handleChange} />
  <input name="password" placeholder="Password" type="password" onChange={handleChange} />
  <button onClick={handleRegister}>Register</button>
</div>

  );
};

export default AdminRegister;
