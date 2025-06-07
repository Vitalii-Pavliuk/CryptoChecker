import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import { FavoritesList } from '../components/FavoritesList/FavoritesList';

const FavoritesPage: React.FC = () => {
  const { favoriteCoins } = useSelector((state: RootState) => state.favorites);

  return (
    <div>
      <h1>Your Favorite Cryptocurrencies</h1>
      {favoriteCoins.length === 0 ? <p>No favorite coins added yet.</p> : <FavoritesList />}
    </div>
  );
};

export { FavoritesPage };