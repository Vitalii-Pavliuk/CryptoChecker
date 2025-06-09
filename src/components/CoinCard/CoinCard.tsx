import React from 'react';
import { Link } from 'react-router-dom';
import './CoinCard.css';

interface CoinCardProps {
  id: string;
  image: string;
  name: string;
  symbol: string;
  price?: number;
  change24h?: number;
  rank?: number;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
  showFavoriteButton?: boolean;
  to: string;
}

const CoinCard: React.FC<CoinCardProps> = ({
  id,
  image,
  name,
  symbol,
  price,
  change24h,
  rank,
  isFavorite = false,
  onToggleFavorite,
  showFavoriteButton = false,
  to,
}) => (
  <div className="coin-card">
    <Link to={to} className="coin-link">
      <div className="coin-header">
        <img src={image} alt={name} className="coin-image" />
        <div className="coin-header-info">
          <h3 className="coin-name">
            {name}
            <span className="coin-symbol">({symbol.toUpperCase()})</span>
          </h3>
          {rank && <p className="coin-rank">Rank: #{rank}</p>}
        </div>
      </div>
      {price !== undefined && (
        <p className="coin-price">
          <span className="label">Price:</span>
          <span className="value">${price.toLocaleString()}</span>
        </p>
      )}
      {change24h !== undefined && (
        <p
          className="coin-change"
          style={{ color: change24h > 0 ? 'green' : 'red', fontWeight: 'bold' }}
        >
          {change24h > 0 ? '+' : ''}{change24h.toFixed(2)}%
        </p>
      )}
    </Link>
    {showFavoriteButton && onToggleFavorite && (
      <button
        onClick={() => onToggleFavorite(id)}
        className="favorite-button"
        title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      >
        {isFavorite ? '★' : '☆'}
      </button>
    )}
  </div>
);

export default CoinCard;
