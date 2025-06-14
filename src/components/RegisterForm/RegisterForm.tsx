import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/User/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { useTranslation } from 'react-i18next';
import './RegisterForm.css';

const RegisterForm: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError(t('auth.passwordsDoNotMatch'));
      return;
    }

    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      dispatch(
        setUser({
          email: userCredential.user.email,
          uid: userCredential.user.uid,
        }),
      );
      navigate('/coins');
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message || t('auth.registerError'));
      } else {
        setError(t('auth.registerError'));
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="register-form" onSubmit={handleRegister}>
      <h2 className="form-title">{t('auth.createAccount')}</h2>

      <div className="form-group">
        <label className="form-label" htmlFor="email">
          {t('auth.email')}
        </label>
        <input
          id="email"
          type="email"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder={t('auth.emailPlaceholder')}
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="password">
          {t('auth.password')}
        </label>
        <input
          id="password"
          type="password"
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder={t('auth.createPasswordPlaceholder')}
          minLength={6}
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="confirmPassword">
          {t('auth.confirmPassword')}
        </label>
        <input
          id="confirmPassword"
          type="password"
          className="form-input"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          placeholder={t('auth.confirmPasswordPlaceholder')}
          minLength={6}
        />
      </div>

      {error && <ErrorMessage error={{ message: error }} />}

      <button type="submit" className="submit-button" disabled={isLoading}>
        {isLoading ? t('auth.creating') : t('auth.register')}
      </button>

      <div className="form-footer">
        {t('auth.alreadyHaveAccount')} <Link to="/login">{t('auth.login')}</Link>
      </div>
    </form>
  );
};

export default RegisterForm;
