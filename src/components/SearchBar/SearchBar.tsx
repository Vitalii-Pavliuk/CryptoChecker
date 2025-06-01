// src/components/SearchBar/SearchBar.tsx
import React, { useState, useEffect } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { setSearchQuery, searchCoins, resetSearchResults } from '../../redux/coins/coinsSlice';

const SearchBar: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValue.trim() !== '') {
        dispatch(searchCoins(inputValue));
      } else {
        dispatch(resetSearchResults());
        dispatch(setSearchQuery(''));
      }
    }, 300);
    
    return () => clearTimeout(timer);
  }, [inputValue, dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="search-container">
      <div className="search-form">
        <input
          type="text"
          placeholder="Search cryptocurrencies..."
          value={inputValue}
          onChange={handleChange}
          className="search-input"
        />
      </div>
    </div>
  );
};

export default SearchBar;