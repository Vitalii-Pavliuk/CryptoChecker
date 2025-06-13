import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/User/authSlice';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import './LoginForm.css';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
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
        setError(error.message || 'Failed to sign in. Please check your credentials.');
      } else {
        setError('Failed to sign in. Please check your credentials.');
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form className="login-form" onSubmit={handleLogin}>
      <h2 className="form-title">Login</h2>

      <div className="form-group">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Enter your password"
        />
      </div>

      {error && <ErrorMessage error={{ message: error }} />}

      <button type="submit" className="submit-button" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </button>

      <div className="form-footer">
        Don't have an account? <Link to="/register">Register</Link>
      </div>
    </form>
  );
};

export default LoginForm;
