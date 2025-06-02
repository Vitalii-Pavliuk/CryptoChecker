import React from 'react';
import { Link } from 'react-router-dom';
import type { Coin } from '../../types/coinTypes';
import { useWatchlist } from '../../hooks/useWatchlist';

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
  const { isInWatchlist, toggleCoin } = useWatchlist();

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
    onClick={() => toggleCoin(coin.id)}
    className="watchlist-button"
    title={
      isInWatchlist(coin.id)
        ? 'Remove from Watchlist'
        : 'Add to Watchlist'
    }
  >
    {isInWatchlist(coin.id) ? '★' : '☆'}
  </button>
</div>

{/* <Link to={`/coins/${coin.id}`} className="coin-link"> */}
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
{/* </Link> */}
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
