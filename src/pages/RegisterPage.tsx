import React from 'react';
import  RegisterForm  from '../components/RegisterForm/RegisterForm';

const RegisterPage: React.FC = () => (
  <div className="auth-container">
    <div className="auth-card">
      <h2>Create Account</h2>
      <RegisterForm />
    </div>
  </div>
);

export { RegisterPage };
