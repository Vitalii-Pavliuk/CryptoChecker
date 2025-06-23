import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { setUser } from '../../redux/User/authSlice';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../hooks/hooks';
import './LoginForm.scss';

const LoginForm: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/coins';

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      dispatch(
        setUser({
          email: userCredential.user.email,
          uid: userCredential.user.uid,
        }),
      );
      navigate(from, { replace: true });
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message || t('auth.loginError'));
      } else {
        setError(t('auth.loginError'));
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form className="login-form" onSubmit={handleLogin}>
      <h2 className="form-title">{t('auth.signIn')}</h2>

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
          placeholder={t('auth.passwordPlaceholder')}
        />
      </div>

      {error && <ErrorMessage error={{ message: error }} />}

      <button type="submit" className="submit-button" disabled={isLoading}>
        {isLoading ? t('auth.loggingIn') : t('auth.login')}
      </button>

      <div className="form-footer">
        {t('auth.dontHaveAccount')} <Link to="/register">{t('auth.register')}</Link>
      </div>
    </form>
  );
};

export default LoginForm;
