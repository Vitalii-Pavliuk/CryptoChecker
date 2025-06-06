import React from 'react';
import type { CoinSearchResult } from '../../types/coinTypes';
import CoinCard from '../CoinCard/CoinCard';

interface SearchResultsProps {
  results: CoinSearchResult[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  query: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  status,
  error,
  query,
}) => {
  return (
    <div className="search-results">
      {status === 'loading' && <div className="loading">Searching coins...</div>}
      {status === 'failed' && <div className="error">Search error: {error}</div>}
      {results.length > 0 ? (
        <div className="coins-grid">
          {results.map((coin) => (
            <CoinCard
              key={coin.id}
              id={coin.id}
              image={coin.thumb}
              name={coin.name}
              symbol={coin.symbol}
              rank={coin.market_cap_rank || undefined}
              to={`/coins/${coin.id}`}
              showFavoriteButton={false}
            />
          ))}
        </div>
      ) : (
        status === 'succeeded' && query !== '' && (
          <div className="no-results">
            No cryptocurrencies found for "{query}"
          </div>
        )
      )}
    </div>
  );
};

export default SearchResults;
