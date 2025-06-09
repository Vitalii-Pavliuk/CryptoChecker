import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { FavoriteCoinItem } from '../FavoriteCoinItem/FavoriteCoinItem';
import './FavoritesList.css';

const FavoritesList: React.FC = () => {
  const { favoriteCoins } = useSelector((state: RootState) => state.favorites);

  if (favoriteCoins.length === 0) {
    return <p>No favorite coins added yet.</p>;
  }

  return (
    <div>
      {favoriteCoins.map((id) => (
        <FavoriteCoinItem key={id} coinId={id} />
      ))}
    </div>
  );
};

export { FavoritesList };