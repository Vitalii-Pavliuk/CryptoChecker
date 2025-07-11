import React, { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import TopCryptoList from '../TopCryptoList/TopCryptoList';
import SearchResults from '../SearchResults/SearchResults';
import { useGetCoinsQuery } from '../../redux/services/coinGeckoApi';
import type { Coin } from '../../types/coinTypes';
import { useTranslation } from 'react-i18next';

const CryptoList: React.FC = () => {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [coins, setCoins] = useState<Coin[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const {
    data: coinsData = [],
    isLoading,
    error,
  } = useGetCoinsQuery(page, {
    skip: searchQuery !== '',
  });

  useEffect(() => {
    if (coinsData.length > 0) {
      setCoins((prev) => [
        ...prev,
        ...coinsData.filter((coin) => !prev.some((c) => c.id === coin.id)),
      ]);
    }
  }, [coinsData]);

  const loadMore = () => {
    if (coinsData.length === 20 && searchQuery === '') {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div>
      <h1>
        {searchQuery ? t('list.searchResults') : t('list.topCryptocurrencies')}
      </h1>
      <SearchBar onSearchQueryChange={setSearchQuery} />

      {searchQuery ? (
        <SearchResults query={searchQuery} />
      ) : (
        <TopCryptoList
          coins={coins}
          isLoading={isLoading}
          error={error}
          hasMore={coinsData.length === 20}
          onLoadMore={loadMore}
        />
      )}
    </div>
  );
};

export default CryptoList;
