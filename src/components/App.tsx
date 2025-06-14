// Зміна тем 
// Переписати все на sass

import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import RequireAuth from './RequireAuth';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import CryptoList from '../components/CryptoList/CryptoList';
import { FavoritesPage } from '../pages/FavoritesPage';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { setUser, clearUser } from '../redux/User/authSlice';
import { useTranslation } from 'react-i18next';
import './App.css';
import CryptoDetailsPage from '../pages/CryptoDetailsPage';

export default function App() {
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const [authChecked, setAuthChecked] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        dispatch(
          setUser({
            email: firebaseUser.email,
            uid: firebaseUser.uid,
          }),
        );
      } else {
        dispatch(clearUser());
      }
      setAuthChecked(true);
    });

    return () => unsubscribe();
  }, [dispatch]);

  if (!authChecked) {
    return <div className="loading">{t('common.loading')}</div>;
  }

  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="nav-links">
          {!isAuthenticated && (
            <>
              <NavLink to="/register" className="nav-link">
                {t('navbar.register')}
              </NavLink>
              <NavLink to="/login" className="nav-link">
                {t('navbar.login')}
              </NavLink>
            </>
          )}
          <NavLink to="/coins" className="nav-link">
            {t('navbar.coins')}
          </NavLink>
          {isAuthenticated && (
            <>
              <NavLink to="/favorites" className="nav-link">
                {t('navbar.favorites')}
              </NavLink>
              <div className="user-info">
                <span>{user?.email}</span>
                <button onClick={() => auth.signOut()} className="logout-button">
                  {t('navbar.logout')}
                </button>
              </div>
            </>
          )}
          <div className="language-switcher">
            <button 
              onClick={() => changeLanguage('en')} 
              className={`lang-button ${i18n.language === 'en' ? 'active' : ''}`}
            >
              EN
            </button>
            <button 
              onClick={() => changeLanguage('uk')} 
              className={`lang-button ${i18n.language === 'uk' ? 'active' : ''}`}
            >
              UA
            </button>
          </div>
        </div>
      </nav>

      <div className="content-container">
        <Routes>
          <Route
            path="/register"
            element={!isAuthenticated ? <RegisterPage /> : <Navigate to="/coins" />}
          />
          <Route
            path="/login"
            element={!isAuthenticated ? <LoginPage /> : <Navigate to="/coins" />}
          />
          <Route
            path="/coins"
            element={
              <RequireAuth>
                <CryptoList />
              </RequireAuth>
            }
          />
          <Route
            path="/favorites"
            element={
              <RequireAuth>
                <FavoritesPage />
              </RequireAuth>
            }
          />
          <Route
            path="/coins/:id"
            element={
              <RequireAuth>
                <CryptoDetailsPage />
              </RequireAuth>
            }
          />
          <Route
            path="/"
            element={<Navigate to={isAuthenticated ? '/coins' : '/login'} replace />}
          />
          <Route
            path="*"
            element={<Navigate to={isAuthenticated ? '/coins' : '/login'} replace />}
          />
        </Routes>
      </div>
      <footer className="footer">
        <span>{t('footer.copyright')}</span>
      </footer>
    </BrowserRouter>
  );
}
