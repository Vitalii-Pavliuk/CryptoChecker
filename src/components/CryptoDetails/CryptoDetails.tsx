import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetCoinDetailsQuery } from '../../redux/services/coinGeckoApi';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../redux/coins/favoritesSlice';
import type { RootState } from '../../redux/store';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import './CryptoDetails.css';

const CryptoDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: coin, isLoading, isError, error } = useGetCoinDetailsQuery(id ?? '', { skip: !id });
  const dispatch = useDispatch();
  const favoriteCoins = useSelector((state: RootState) => state.favorites.favoriteCoins);

  const isFavorite = id ? favoriteCoins.includes(id) : false;
  const handleToggleFavorite = () => {
    if (id) {
      dispatch(toggleFavorite(id));
    }
  };

  if (isLoading) return <div className="loading">Loading coin details...</div>;
  if (isError) return <ErrorMessage error={error} />;
  if (!coin) return <div className="no-data">No coin data available</div>;
  return (
    <div className="coin-details-page">
      <div className="coin-header">
        <img src={coin.image.large} alt={coin.name} className="coin-image-large" />
        <div className="coin-title">
          <h1>
            {coin.name} ({coin.symbol.toUpperCase()})
          </h1>
          <button
            onClick={handleToggleFavorite}
            className="favorite-button"
            title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          >
            {isFavorite ? '★' : '☆'}
          </button>
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
          <p
            className="stat-value"
            style={{
              color: coin.market_data.price_change_percentage_24h >= 0 ? 'green' : 'red',
              fontWeight: 'bold',
            }}
          >
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
          {coin.links.homepage
            .filter((link) => link)
            .map((link, index) => (
              <li key={index}>
                <a href={link} target="_blank" rel="noopener noreferrer" className="link-button">
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
