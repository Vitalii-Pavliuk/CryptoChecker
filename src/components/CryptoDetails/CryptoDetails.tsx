import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchCoinDetails } from '../../redux/coins/coinDetailsSlice';
import { useParams } from 'react-router-dom';
import type { CoinDetails } from '../../redux/coins/types';

const CryptoDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const { coin, status, error } = useAppSelector((state) => state.coinDetails);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      dispatch(fetchCoinDetails(id));
    }
  }, [dispatch, id]);

  if (status === 'loading') return <div className="loading">Loading coin details...</div>;
  if (status === 'failed') return <div className="error">Error: {error}</div>;
  if (!coin) return <div className="no-data">No coin data available</div>;

  return (
    <div className="coin-details-page">
      <div className="coin-header">
        <img src={coin.image.large} alt={coin.name} className="coin-image-large" />
        <div className="coin-title">
          <h1>{coin.name} ({coin.symbol.toUpperCase()})</h1>
        </div>
      </div>

      <div className="coin-stats">
        <div className="stat-card">
          <h3>Current Price</h3>
          <p className="stat-value">${coin.market_data.current_price.usd.toLocaleString()}</p>
        </div>
        <div className="stat-card">
          <h3>Market Cap</h3>
          <p className="stat-value">${coin.market_data.market_cap.usd.toLocaleString()}</p>
        </div>
        <div className="stat-card">
          <h3>24h Change</h3>
          <p className="stat-value" style={{ 
            color: coin.market_data.price_change_percentage_24h >= 0 ? 'green' : 'red',
            fontWeight: 'bold'
          }}>
            {coin.market_data.price_change_percentage_24h.toFixed(2)}%
          </p>
        </div>
      </div>

      <div className="coin-description">
        <h2>About {coin.name}</h2>
        <div 
          className="description-content" 
          dangerouslySetInnerHTML={{ __html: coin.description.en }} 
        />
      </div>

      <div className="coin-links">
        <h2>Official Links</h2>
        <ul>
          {coin.links.homepage.filter(link => link).map((link, index) => (
            <li key={index}>
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="link-button"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CryptoDetails;