import React from 'react';
import { Link } from 'react-router-dom';
import type { CoinSearchResult } from '../../types/coinTypes';

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
  query
}) => {
  return (
    <div className="search-results">
      {status === 'loading' && (
        <div className="loading">Searching coins...</div>
      )}
      
      {status === 'failed' && (
        <div className="error">Search error: {error}</div>
      )}
      
      {results.length > 0 ? (
        <div className="coins-grid">
          {results.map((coin) => (
            <div key={coin.id} className="coin-card">
              <Link to={`/coins/${coin.id}`} className="coin-link">
                <div className="coin-header">
                  <img 
                    src={coin.thumb} 
                    alt={coin.name} 
                    className="coin-image" 
                  />
                  <div>
                    <h3 className="coin-name">
                      {coin.name} 
                      <span className="coin-symbol">
                        ({coin.symbol})
                      </span>
                    </h3>
                    {coin.market_cap_rank && (
                      <p className="coin-rank">Rank: #{coin.market_cap_rank}</p>
                    )}
                  </div>
                </div>
              </Link>
            </div>
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