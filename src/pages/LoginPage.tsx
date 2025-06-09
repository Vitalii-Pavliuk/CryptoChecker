import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';

const LoginPage: React.FC = () => (
  <div className="auth-container">
    <div className="auth-card">
      <h2>Sign In</h2>
      <LoginForm />
    </div>
  </div>
);

export { LoginPage };
