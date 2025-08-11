import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login= () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateRegister = () => {
    const { firstname, lastname, email, phone, password, confirmPassword } = form;

    if (!firstname || !lastname || !email || !phone || !password || !confirmPassword) {
      alert('All fields are required.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email format.');
      return false;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert('Phone number must be 10 digits.');
      return false;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters.');
      return false;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return false;
    }

    return true;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateRegister()) return;

    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', form);
      alert(res.data.msg || 'Registered successfully');
      setIsLogin(true);
    } catch (err) {
      alert(err.response?.data?.msg || 'Registration failed');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = form;

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      alert(res.data.msg || 'Login successful');
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div className="page-container">
      <div className="login-container">
        <form onSubmit={isLogin ? handleLogin : handleRegister} className="login-form">
          <h2>{isLogin ? 'Login' : 'Register'}</h2>

          {!isLogin && (
            <>
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                value={form.firstname}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={form.lastname}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Retype Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          )}

          <button type="submit">{isLogin ? 'Login' : 'Register'}</button>

          <p style={{ marginTop: '15px', fontSize: '14px', textAlign: 'center' }}>
            {isLogin ? 'New user?' : 'Already have an account?'}{' '}
            <span
              onClick={() => setIsLogin(!isLogin)}
              style={{ color: '#007bff', cursor: 'pointer', textDecoration: 'underline' }}
            >
              {isLogin ? 'Register here' : 'Login here'}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
