import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchCoins } from '../../redux/coins/coinsSlice';
import SearchBar from '../SearchBar/SearchBar';
import TopCryptoList from '../TopCryptoList/TopCryptoList';
import SearchResults from '../SearchResults/SearchResults';

const CryptoList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { 
    coins, 
    searchResults,
    status, 
    searchStatus,
    error, 
    hasMore,
    searchQuery,
    page,
  } = useAppSelector((state) => state.coins);

  useEffect(() => {
    if (searchQuery === '' && coins.length === 0) {
      dispatch(fetchCoins(page));
    }
  }, [searchQuery, dispatch, coins.length]);

  const loadMore = () => {
    if (hasMore && searchQuery === '') {
      dispatch(fetchCoins(page-1));
    }
  };

  return (
    <div className="crypto-list">
      <h1 className="list-header">
        {searchQuery ? 'Search Results' : 'Top Cryptocurrencies'}
      </h1>
      <SearchBar />
      
      {searchQuery ? (
        <SearchResults 
          results={searchResults}
          status={searchStatus}
          error={error}
          query={searchQuery}
        />
      ) : (
        <TopCryptoList 
          coins={coins}
          status={status}
          error={error}
          hasMore={hasMore}
          onLoadMore={loadMore}
        />
      )}
    </div>
  );
};

export default CryptoList;