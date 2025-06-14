import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './SearchBar.scss';

interface SearchBarProps {
  onSearchQueryChange: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchQueryChange }) => {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearchQueryChange(inputValue.trim());
    }, 300);

    return () => clearTimeout(timer);
  }, [inputValue, onSearchQueryChange]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="search-container">
      <div className="search-form">
        <input
          type="text"
          placeholder={t('search.placeholder')}
          value={inputValue}
          onChange={handleChange}
          className="search-input"
        />
      </div>
    </div>
  );
};

export default SearchBar;
