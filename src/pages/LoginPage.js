import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, register } from '../utils/api';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  const handleRegister = async () => {
    await register(role, { username, password });
    alert(`${role} registered`);
  };

  const handleLogin = async () => {
    const res = await login(role, { username, password });
    localStorage.setItem('token', res.data.token);
    alert(`${role} logged in`);
    if (role === 'admin') navigate('/admin');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login/Register</h2>
      <select onChange={(e) => setRole(e.target.value)} value={role}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select><br /><br />
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} /><br /><br />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br /><br />
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;