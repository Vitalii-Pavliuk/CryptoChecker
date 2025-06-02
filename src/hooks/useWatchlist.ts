import { useState, useEffect } from 'react';

const WATCHLIST_KEY = 'crypto_watchlist';

export const useWatchlist = () => {
  const [watchlist, setWatchlist] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(WATCHLIST_KEY);
    if (stored) setWatchlist(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchlist));
  }, [watchlist]);

  const toggleCoin = (id: string) => {
    setWatchlist(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const isInWatchlist = (id: string) => watchlist.includes(id);

  return { watchlist, toggleCoin, isInWatchlist };
};
