import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/hooks';
import { toggleFavoriteAndSync } from '../../redux/coins/favoritesThunks';
import type { RootState } from '../../redux/store';
import type { Coin } from '../../types/coinTypes';
import { useTranslation } from 'react-i18next';
import './FavoriteCoinItem.css';
import i18n from '../../i18n';

interface FavoriteCoinItemProps {
  coin: Coin;
}

const FavoriteCoinItem: React.FC<FavoriteCoinItemProps> = ({ coin }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const favoriteCoins = useSelector((state: RootState) => state.favorites.favoriteCoins);

  const isFavorite = favoriteCoins.includes(coin.id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavoriteAndSync(coin.id));
  };

  return (
    <div className="coin-item">
      <Link to={`/coins/${coin.id}`}>
        <img src={coin.image} alt={coin.name} />
        <div>
          <h2>
            {coin.name} ({coin.symbol.toUpperCase()})
          </h2>
          <p>
            {t('coin.currentPrice')}: ${coin.current_price.toLocaleString(i18n.language)}
          </p>
          <p>
            24h {t('coin.change')}: {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        </div>
      </Link>
      <button
        onClick={handleToggleFavorite}
        className="favorite-button"
        title={isFavorite ? t('favorites.remove') : t('favorites.add')}
      >
        {isFavorite ? '★' : '☆'}
      </button>
    </div>
  );
};

export { FavoriteCoinItem };
