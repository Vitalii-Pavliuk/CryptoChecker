import React from 'react';
import { useSelector } from 'react-redux';
import type { Coin } from '../../types/coinTypes';
import CoinCard from '../CoinCard/CoinCard';
import { toggleFavoriteAndSync } from '../../redux/coins/favoritesThunks';
import type { RootState } from '../../redux/store';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Loader } from '../Loader/Loader';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../hooks/hooks';
import './TopCryptoList.scss';

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
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const favoriteCoins = useSelector((state: RootState) => state.favorites.favoriteCoins);

  const isFavorite = (coinId: string) => favoriteCoins.includes(coinId);
  const handleToggleFavorite = (coinId: string) => {
    dispatch(toggleFavoriteAndSync(coinId));
  };

  return (
    <div>
      {isLoading && coins.length === 0 && <Loader />}
      {!!error && <ErrorMessage error={error} />}
      {coins.length > 0 && (
        <>
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
          {hasMore && (
            <div className="load-more-container">
              <button onClick={onLoadMore} disabled={isLoading} className="load-more-button">
                {isLoading ? <Loader /> : t('list.loadMore')}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default TopCryptoList;
