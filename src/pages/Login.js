import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'learner@example.com' && password === 'pass') {
      localStorage.setItem('token', 'mock-token');
      localStorage.setItem('role', 'learner');
      window.location.href = '/tutorials';
    } else if (email === 'admin@example.com' && password === 'pass') {
      localStorage.setItem('token', 'mock-token');
      localStorage.setItem('role', 'admin');
      window.location.href = '/dashboard';
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2 className="accent">Login</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required style={{ display: 'block', margin: '10px 0' }} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required style={{ display: 'block', margin: '10px 0' }} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;