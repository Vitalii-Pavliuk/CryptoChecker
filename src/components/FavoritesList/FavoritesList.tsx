import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { FavoriteCoinItem } from '../FavoriteCoinItem/FavoriteCoinItem';
import type { CoinData } from '../../types/coinTypes';

const FavoritesList: React.FC = () => {
  const { favoriteCoins, favoriteCoinsData } = useSelector(
    (state: RootState) => state.favorites
  );

  const favoriteCoinsList = useMemo(() => {
    return favoriteCoins
      .map((id) => favoriteCoinsData[id])
      .filter((coin): coin is CoinData => Boolean(coin));
  }, [favoriteCoins, favoriteCoinsData]);

  if (favoriteCoinsList.length === 0) {
    return <p>No favorite coins added yet.</p>;
  }

  return (
    <div>
      {favoriteCoinsList.map((coin) => (
        <FavoriteCoinItem key={coin.id} coin={coin} />
      ))}
    </div>
  );
};

export { FavoritesList };
