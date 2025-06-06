import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import {RegisterPage} from '../pages/RegisterPage';
import {LoginPage} from '../pages/LoginPage';
import CryptoList from '../components/CryptoList/CryptoList';
import CryptoDetails from '../components/CryptoDetails/CryptoDetails';
import CryptoChart from '../components/CryptoChart/CryptoChart';
import { FavoritesPage } from '../pages/FavoritesPage';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { setUser, clearUser } from '../redux/User/authSlice';

export default function App() {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        dispatch(
          setUser({
            email: firebaseUser.email,
            uid: firebaseUser.uid,
          })
        );
      } else {
        dispatch(clearUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="nav-links">
          {!isAuthenticated && (
            <>
              <NavLink to="/register" className="nav-link">
                Register
              </NavLink>
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
            </>
          )}
          <NavLink to="/coins" className="nav-link">
            Coins
          </NavLink>
          {isAuthenticated && (
            <>
              <NavLink to="/favorites" className="nav-link">
                Favorites
              </NavLink>
              <div className="user-info">
                <span>{user?.email}</span>
                <button onClick={() => auth.signOut()} className="logout-button">
                  Logout
                </button>
              </div>
            </>
          )}
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
            element={isAuthenticated ? <CryptoList /> : <Navigate to="/login" />}
          />
          <Route
            path="/favorites"
            element={isAuthenticated ? <FavoritesPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/coins/:id"
            element={
              isAuthenticated ? (
                <>
                  <CryptoDetails />
                  <CryptoChart />
                </>
              ) : (
                <Navigate to="/login" />
              )
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
    </BrowserRouter>
  );
}