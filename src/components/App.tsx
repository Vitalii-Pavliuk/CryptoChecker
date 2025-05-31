import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { fetchCoins } from '../redux/coins/coinsSlice';
import CryptoList from './CryptoList/CryptoList';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { SignupPage } from '../pages/SignupPage';
import { LoginPage } from '../pages/LoginPage';
import CryptoCard from './CryptoList/CryptoList';

export default function App() {
  const dispatch = useAppDispatch();
  const { coins, status, error } = useAppSelector((state) => state.coins);

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <BrowserRouter>
      <nav>
          <>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
          <>
            <NavLink to="/CoinList">Coins</NavLink>
          </>
      </nav>
      
      <Routes>
        <Route
          path="/register"
          element={
              <SignupPage />
          }
        />
        <Route
          path="/login"
          element={
              <LoginPage />
          }
        />
        <Route
          path="/CoinList"
          element={
              coins.map((coin) => (
        <CryptoList key={coin.id} coin={coin} />
      ))
          }          
        />
         <Route
          path="/CoinList/:id"
          element={
            <h1>Coin Details</h1>
              // <CryptoCard />
          }
        />
        <Route path="/" element={<Navigate to={ "/login"} />} />
        <Route path="*" element={<Navigate to={ "/login"} />} />
      </Routes>
    </BrowserRouter>
    

  );

}


//CG-e4U47ZbWLzRrPEaPmQmYCbw1	 - api
