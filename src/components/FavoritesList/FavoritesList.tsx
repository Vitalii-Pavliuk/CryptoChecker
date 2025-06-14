import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { FavoriteCoinItem } from '../FavoriteCoinItem/FavoriteCoinItem';
import { useGetCoinsByIdsQuery } from '../../redux/services/coinGeckoApi';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { useTranslation } from 'react-i18next';
import './FavoritesList.scss';
import { Loader } from '../Loader/Loader';

const FavoritesList: React.FC = () => {
  const { t } = useTranslation();
  const { favoriteCoins } = useSelector((state: RootState) => state.favorites);
  const {
    data: coins = [],
    isLoading,
    isError,
    error,
  } = useGetCoinsByIdsQuery(favoriteCoins, {
    skip: favoriteCoins.length === 0,
  });

  if (favoriteCoins.length === 0) return <p>{t('favorites.none')}</p>;

  if (isLoading) return <Loader />;

  if (isError) return <ErrorMessage error={error} />;

  return (
    <div>
      {coins.map((coin) => (
        <FavoriteCoinItem key={coin.id} coin={coin} />
      ))}
    </div>
  );
};

export { FavoritesList };
