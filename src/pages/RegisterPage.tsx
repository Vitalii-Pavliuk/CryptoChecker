import React from 'react';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import { useTranslation } from 'react-i18next';

const RegisterPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{t('auth.createAccount')}</h2>
        <RegisterForm />
      </div>
    </div>
  );
};

export { RegisterPage };
