import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { SignupPage } from '../pages/SignupPage';
import { LoginPage } from '../pages/LoginPage';
import CryptoList from './CryptoList/CryptoList';
import CryptoDetails from './CryptoDetails/CryptoDetails';
import { fetchCoins } from '../redux/coins/coinsSlice';

export default function App() {
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector((state) => state.coins);

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="nav-links">
          <NavLink to="/register" className="nav-link">Register</NavLink>
          <NavLink to="/login" className="nav-link">Login</NavLink>
          <NavLink to="/coins" className="nav-link">Coins</NavLink>
        </div>
      </nav>
      
      <div className="content-container">
        {status === 'loading' && <p className="loading-full">Loading application...</p>}
        {status === 'failed' && <p className="error-full">Error: {error}</p>}
        
        <Routes>
          <Route path="/register" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/coins" element={<CryptoList />} />
          <Route path="/coins/:id" element={<CryptoDetails />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}