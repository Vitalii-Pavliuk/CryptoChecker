import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import { FavoritesList } from '../components/FavoritesList/FavoritesList';
import { useTranslation } from 'react-i18next';

const FavoritesPage: React.FC = () => {
  const { t } = useTranslation();
  const { favoriteCoins } = useSelector((state: RootState) => state.favorites);

  return (
    <div>
      <h1>{t('favorites.title')}</h1>
      {favoriteCoins.length === 0 ? <p>{t('favorites.none')}</p> : <FavoritesList />}
    </div>
  );
};

export { FavoritesPage };
