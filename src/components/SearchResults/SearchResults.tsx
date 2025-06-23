import React from 'react';
import CoinCard from '../CoinCard/CoinCard';
import { useSearchCoinsQuery } from '../../redux/services/coinGeckoApi';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Loader } from '../Loader/Loader';
import { useTranslation } from 'react-i18next';

interface SearchResultsProps {
  query: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ query }) => {
  const { t } = useTranslation();
  const {
    data: results = [],
    isLoading,
    isError,
    error,
  } = useSearchCoinsQuery(query, {
    skip: query.trim() === '',
  });

  return (
    <div>
      {isLoading && <Loader />}
      {isError && <ErrorMessage error={error} />}
      {results.length > 0 ? (
        <>
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
        </>
      ) : (
        !isLoading &&
        query !== '' && <div>{t('list.noResults', { query })}</div>
      )}
    </div>
  );
};

export default SearchResults;
