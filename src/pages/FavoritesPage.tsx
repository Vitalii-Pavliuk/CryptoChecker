import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../hooks/hooks';
import { fetchCoinById } from '../redux/coins/favoritesSlice';
import type { RootState } from '../redux/store';
import { Link } from 'react-router-dom';
import { toggleFavorite } from '../redux/coins/favoritesSlice';

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

  const favoriteCoinsList = useMemo(() => {
    return favoriteCoins
      .map((id) => favoriteCoinsData[id])
      .filter((coin): coin is any => Boolean(coin));
  }, [favoriteCoins, favoriteCoinsData]);

    const isFavorite = (coinId: string) => favoriteCoins.includes(coinId);
      const handleToggleFavorite = (coinId: string) => {
        dispatch(toggleFavorite(coinId));
      };

return (
  <div>
    <h1>Your Favorite Cryptocurrencies</h1>

    {status === 'loading' && favoriteCoinsList.length === 0 ? (
      <p>Loading...</p>
    ) : error ? (
      <p>{error}</p>
    ) : favoriteCoinsList.length === 0 ? (
      <p>No favorite coins added yet.</p>
    ) : (
      <div>
        {favoriteCoinsList.map((coin) => (
          <div key={coin.id} className="coin-item">
            <Link to={`/coins/${coin.id}`}>
              <img src={coin.image?.large} alt={coin.name} />
              <div>
                <h2>{coin.name} ({coin.symbol.toUpperCase()})</h2>
                <p>Price: ${coin.market_data?.current_price?.usd?.toLocaleString() ?? 'N/A'}</p>
                <p>24h Change: {coin.market_data?.price_change_percentage_24h?.toFixed(2) ?? 'N/A'}%</p>
              </div>
            </Link>

            <button
              onClick={() => handleToggleFavorite(coin.id)}
              className="favorite-button"
              title={isFavorite(coin.id) ? 'Remove from Favorites' : 'Add to Favorites'}
            >
              {isFavorite(coin.id) ? '★' : '☆'}
            </button>
          </div>
        ))}
      </div>
    )}
  </div>
);
}

export default FavoritesPage;
