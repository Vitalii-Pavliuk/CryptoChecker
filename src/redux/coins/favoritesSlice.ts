import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface FavoritesState {
  favoriteCoins: string[];
}

const loadFavoritesFromStorage = (): string[] => {
  try {
    const favorites = localStorage.getItem('favoriteCoins');
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error('Error loading favorites from localStorage:', error);
    return [];
  }
};

const initialState: FavoritesState = {
  favoriteCoins: loadFavoritesFromStorage(),
};


const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const coinId = action.payload;
      const index = state.favoriteCoins.indexOf(coinId);
      if (index === -1) {
        state.favoriteCoins.push(coinId);
      } else {
        state.favoriteCoins.splice(index, 1);
      }
      localStorage.setItem('favoriteCoins', JSON.stringify(state.favoriteCoins));
    },
    setFavorites: (state, action: PayloadAction<string[]>) => {
      state.favoriteCoins = action.payload;
      localStorage.setItem('favoriteCoins', JSON.stringify(state.favoriteCoins));
    },
  },
  extraReducers: () => {},
});

export const { toggleFavorite, setFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;