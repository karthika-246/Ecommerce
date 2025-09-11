import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './register.css';

const AdminRegister = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/admin/register', form);
      setMessage(res.data.message);
      setTimeout(() => {
        navigate('/admin/login');
      }, 1000);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="auth-container">
      <h2>Admin Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" onChange={handleChange} placeholder="Name" required />
        <input name="email" onChange={handleChange} placeholder="Email" required />
        <input name="password" onChange={handleChange} type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
      <p>Already registered? <Link to="/admin/login" className="auth-link">Login here</Link></p>
    </div>
  );
};

export default AdminRegister;