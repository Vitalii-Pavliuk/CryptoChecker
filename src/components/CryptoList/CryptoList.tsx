import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
// import type { Coin } from '../../redux/coins/coinTypes';

const CryptoList: React.FC = () => {
  const { coins, status, error } = useAppSelector((state) => state.coins);

  if (status === 'loading') return <div className="loading">Loading coins...</div>;
  if (status === 'failed') return <div className="error">Error: {error}</div>;
  
  return (
    <div className="crypto-list-page">
      <h1 className="page-title">Top Cryptocurrencies</h1>
      <div className="coins-container">
        {coins.map((coin) => (
          <div key={coin.id} className="coin-card">
            <Link to={`/coins/${coin.id}`} className="coin-link">
              <div className="coin-header">
                <img src={coin.image} alt={coin.name} className="coin-image" />
                <h3 className="coin-name">{coin.name} ({coin.symbol.toUpperCase()})</h3>
              </div>
            </Link>
            <div className="coin-details">
              <p className="coin-price">Price: ${coin.current_price.toLocaleString()}</p>
              <p className="coin-market-cap">Market Cap: ${coin.market_cap.toLocaleString()}</p>
              <p className="coin-rank">Rank: #{coin.market_cap_rank}</p>
              <p className="coin-change">
                24h Change: 
                <span style={{ 
                  color: coin.price_change_percentage_24h >= 0 ? 'green' : 'red',
                  fontWeight: 'bold',
                  marginLeft: '5px'
                }}>
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoList;