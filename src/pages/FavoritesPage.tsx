import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../hooks/hooks';
import { fetchCoinById } from '../redux/coins/favoritesSlice';
import type { RootState } from '../redux/store';
import { FavoritesList } from '../components/FavoritesList/FavoritesList';

const FavoritesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { favoriteCoins, favoriteCoinsData, status, error } = useSelector(
    (state: RootState) => state.favorites
  );

  useEffect(() => {
    favoriteCoins.forEach((id) => {
      if (!favoriteCoinsData[id]) {
        dispatch(fetchCoinById(id));
      }
    });
  }, [dispatch, favoriteCoins, favoriteCoinsData]);

  return (
    <div>
      <h1>Your Favorite Cryptocurrencies</h1>
      {status === 'loading' && favoriteCoins.length === 0 ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <FavoritesList />
      )}
    </div>
  );
};

export { FavoritesPage };
