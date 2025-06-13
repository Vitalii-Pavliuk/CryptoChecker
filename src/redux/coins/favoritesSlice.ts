import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface FavoritesState {
  favoriteCoins: string[];
}

const initialState: FavoritesState = {
  favoriteCoins: [],
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
    },
    setFavorites: (state, action: PayloadAction<string[]>) => {
      state.favoriteCoins = action.payload;
    },
  },
  extraReducers: () => {},
});

export const { toggleFavorite, setFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;