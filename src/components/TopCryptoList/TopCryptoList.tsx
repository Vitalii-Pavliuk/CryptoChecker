import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { Coin } from '../../types/coinTypes';
import CoinCard from '../CoinCard/CoinCard';
import { toggleFavorite } from '../../redux/coins/favoritesSlice';
import type { RootState } from '../../redux/store';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

interface TopCryptoListProps {
  coins: Coin[];
  isLoading: boolean;
  error: unknown;
  hasMore: boolean;
  onLoadMore: () => void;
}

const TopCryptoList: React.FC<TopCryptoListProps> = ({
  coins,
  isLoading,
  error,
  hasMore,
  onLoadMore,
}) => {
  const dispatch = useDispatch();
  const favoriteCoins = useSelector((state: RootState) => state.favorites.favoriteCoins);

  const isFavorite = (coinId: string) => favoriteCoins.includes(coinId);
  const handleToggleFavorite = (coinId: string) => {
    dispatch(toggleFavorite(coinId));
  };

  return (
    <div className="top-crypto-list">
      {isLoading && coins.length === 0 && <div className="loading">Loading coins...</div>}
      {!!error && <ErrorMessage error={error} />}
      {coins.length > 0 && (
        <>
          <div className="coins-grid">
            {coins.map((coin) => (
              <CoinCard
                key={coin.id}
                id={coin.id}
                image={coin.image}
                name={coin.name}
                symbol={coin.symbol}
                price={coin.current_price}
                change24h={coin.price_change_percentage_24h}
                rank={coin.market_cap_rank}
                isFavorite={isFavorite(coin.id)}
                onToggleFavorite={handleToggleFavorite}
                showFavoriteButton={true}
                to={`/coins/${coin.id}`}
              />
            ))}
          </div>
          {hasMore && (
            <div className="load-more-container">
              <button onClick={onLoadMore} disabled={isLoading} className="load-more-button">
                {isLoading ? 'Loading...' : 'Load More'}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default TopCryptoList;
