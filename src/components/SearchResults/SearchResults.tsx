import React from 'react';
import CoinCard from '../CoinCard/CoinCard';
import { useSearchCoinsQuery } from '../../redux/services/coinGeckoApi';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

interface SearchResultsProps {
  query: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ query }) => {
  const { data: results = [], isLoading, isError, error } = useSearchCoinsQuery(query, {
    skip: query.trim() === '',
  });

  return (
    <div className="search-results">
      {isLoading && <div className="loading">Searching coins...</div>}
      {isError && <ErrorMessage error={error} />}
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
        !isLoading && query !== '' && (
          <div className="no-results">
            No cryptocurrencies found for "{query}"
          </div>
        )
      )}
    </div>
  );
};

export default SearchResults;
