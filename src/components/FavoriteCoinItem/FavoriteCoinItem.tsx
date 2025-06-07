import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/hooks';
import { toggleFavorite } from '../../redux/coins/favoritesSlice';
import type { RootState } from '../../redux/store';
import { useGetCoinByIdQuery } from '../../redux/services/coinGeckoApi';

interface FavoriteCoinItemProps {
  coinId: string;
}

const FavoriteCoinItem: React.FC<FavoriteCoinItemProps> = ({ coinId }) => {
  const dispatch = useAppDispatch();
  const favoriteCoins = useSelector((state: RootState) => state.favorites.favoriteCoins);

  const { data: coin, isLoading } = useGetCoinByIdQuery(coinId);

  const isFavorite = favoriteCoins.includes(coinId);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(coinId));
  };

  return (
    <div className="coin-item">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Link to={`/coins/${coinId}`}>
          <img src={coin?.image?.large} alt={coin?.name} />
          <div>
            <h2>
              {coin?.name} ({coin?.symbol.toUpperCase()})
            </h2>
            <p>
              Price: $
              {coin?.market_data?.current_price?.usd?.toLocaleString() ?? 'N/A'}
            </p>
            <p>
              24h Change{' '}
              {coin?.market_data?.price_change_percentage_24h?.toFixed(2) ?? 'N/A'}%
            </p>
          </div>
        </Link>
      )}
      <button
        onClick={handleToggleFavorite}
        className="favorite-button"
        title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      >
        {isFavorite ? '★' : '☆'}
      </button>
    </div>
  );
};

export { FavoriteCoinItem };