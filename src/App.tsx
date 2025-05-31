// src/App.tsx
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { fetchCoins } from './redux/coins/coinsSlice';
import CryptoCard from './components/CryptoCard/CryptoCard';

export default function App() {
  const dispatch = useAppDispatch();
  const { coins, status, error } = useAppSelector((state) => state.coins);

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {coins.map((coin) => (
        <CryptoCard key={coin.id} coin={coin} />
      ))}
    </div>
  );
}


//CG-e4U47ZbWLzRrPEaPmQmYCbw1	 - api
