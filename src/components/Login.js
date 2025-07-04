import React, { useState } from 'react';
import { saveUser } from '../utils/localStorage';
import '../styles/Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      saveUser(username.trim());
      onLogin(username.trim());
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Task Tracker</h1>
        <p>Welcome! Please enter your username to get started.</p>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
              autoFocus
            />
          </div>
          
          <button type="submit" className="login-btn">
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login; 