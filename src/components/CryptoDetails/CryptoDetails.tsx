import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/hooks';
import { toggleFavoriteAndSync } from '../../redux/coins/favoritesThunks';
import type { RootState } from '../../redux/store';
import type { CoinDetails } from '../../types/coinTypes';
import './CryptoDetails.scss';
import { useTranslation } from 'react-i18next';
import DOMPurify from 'dompurify';

const CryptoDetails: React.FC<{ coin: CoinDetails }> = ({ coin }) => {
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const favoriteCoins = useSelector((state: RootState) => state.favorites.favoriteCoins);
  const id = coin.id;

  const isFavorite = favoriteCoins.includes(id);
  const handleToggleFavorite = () => {
    dispatch(toggleFavoriteAndSync(id));
  };
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
            title={isFavorite ? t('favorites.remove') : t('favorites.add')}
          >
            {isFavorite ? '★' : '☆'}
          </button>
        </div>
      </div>

      <div className="coin-stats">
        <div>
          <div className="stat-card">
            <h3>{t('coin.currentPrice')}</h3>
            <p className="stat-value">
              ${coin.market_data.current_price.usd.toLocaleString(i18n.language)}
            </p>
          </div>
          <p className="stat-value">
            ${coin.market_data.market_cap.usd.toLocaleString(i18n.language)}
          </p>
          <div className="stat-card">
            <h3>{t('coin.change24h')}</h3>
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
      </div>

      <div className="coin-description">
        <h2>
          {t('coin.about')} {coin.name}
        </h2>
        <div
          className="description-content"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(coin.description[i18n.language] || coin.description.en),
          }}
        />
      </div>

      <div className="coin-links">
        <h2>{t('coin.officialLinks')}</h2>
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
