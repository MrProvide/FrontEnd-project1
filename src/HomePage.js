import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Our Website!</h1>
      <h2>Choose an Option:</h2>
      <div>
        <h3>Register</h3>
        <p>If you don't have an account yet, you can register here:</p>
        <Link to="/register">Register</Link>
      </div>
      <div>
        <h3>Login</h3>
        <p>If you already have an account, you can login here:</p>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default HomePage;

