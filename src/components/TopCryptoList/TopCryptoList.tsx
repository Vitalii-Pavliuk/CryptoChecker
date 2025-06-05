import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { Coin } from '../../types/coinTypes';
import { toggleFavorite } from '../../redux/coins/favoritesSlice';
import type { RootState } from '../../redux/store';

interface TopCryptoListProps {
  coins: Coin[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  hasMore: boolean;
  onLoadMore: () => void;
}

const TopCryptoList: React.FC<TopCryptoListProps> = ({
  coins,
  status,
  error,
  hasMore,
  onLoadMore
}) => {
  const dispatch = useDispatch();
  const favoriteCoins = useSelector((state: RootState) => state.favorites.favoriteCoins);

  const isFavorite = (coinId: string) => favoriteCoins.includes(coinId);

  const handleToggleFavorite = (coinId: string) => {
    dispatch(toggleFavorite(coinId));
  };

  return (
    <div className="top-crypto-list">
      {status === 'loading' && coins.length === 0 && (
        <div className="loading">Loading coins...</div>
      )}

      {status === 'failed' && (
        <div className="error">Error: {error}</div>
      )}

      {coins.length > 0 && (
        <>
          <div className="coins-grid">
            {coins.map((coin) => (
              <div key={coin.id} className="coin-card">
                <div className="coin-header">
                  <Link to={`/coins/${coin.id}`} className="coin-link">
                    <img
                      src={coin.image}
                      alt={coin.name}
                      className="coin-image"
                    />

                    <div className="coin-header-info">
                      <h3 className="coin-name">
                        {coin.name}
                        <span className="coin-symbol">
                          ({coin.symbol.toUpperCase()})
                        </span>
                      </h3>
                      {coin.market_cap_rank && (
                        <p className="coin-rank">Rank: #{coin.market_cap_rank}</p>
                      )}
                    </div>
                  </Link>
                  <button
                    onClick={() => handleToggleFavorite(coin.id)}
                    className="favorite-button"
                    title={
                      isFavorite(coin.id)
                        ? 'Remove from Favorites'
                        : 'Add to Favorites'
                    }
                  >
                    {isFavorite(coin.id) ? '★' : '☆'}
                  </button>
                </div>

                <div className="coin-details">
                  <p className="coin-price">
                    <span className="label">Price:</span>
                    <span className="value">
                      ${coin.current_price.toLocaleString()}
                    </span>
                  </p>
                  <p className="coin-change">
                    <span className="label">24h Change:</span>
                    <span
                      className="value"
                      style={{
                        color:
                          coin.price_change_percentage_24h > 0
                            ? 'green'
                            : 'red',
                        fontWeight: 'bold'
                      }}
                    >
                      {coin.price_change_percentage_24h > 0 ? '+' : ''}
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {hasMore && (
            <div className="load-more-container">
              <button
                onClick={onLoadMore}
                disabled={status === 'loading'}
                className="load-more-button"
              >
                {status === 'loading' ? 'Loading...' : 'Load More'}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default TopCryptoList;
