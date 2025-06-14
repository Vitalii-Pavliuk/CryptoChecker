import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import { useTranslation } from 'react-i18next';

const LoginPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{t('auth.signIn')}</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export { LoginPage };
