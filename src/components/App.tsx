import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
import { loadFavorites } from '../redux/coins/favoritesThunks';
import { setFavorites } from '../redux/coins/favoritesSlice';
import { useTranslation } from 'react-i18next';
import './App.scss';
import CryptoDetailsPage from '../pages/CryptoDetailsPage';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

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
        dispatch(loadFavorites(firebaseUser.uid));
      } else {
        dispatch(clearUser());
        dispatch(setFavorites([]));
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
      <Navbar
        isAuthenticated={isAuthenticated}
        userEmail={user?.email || null}
        changeLanguage={changeLanguage}
      />
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
      <Footer />
    </BrowserRouter>
  );
}
