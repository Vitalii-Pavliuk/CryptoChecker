import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import type { Coin } from '../../types/coinTypes';

const API_URL = 'https://api.coingecko.com/api/v3';

interface FavoritesState {
  favoriteCoins: string[];
  favoriteCoinsData: Record<string, Coin>;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
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
  favoriteCoinsData: {},
  status: 'idle',
  error: null,
};

export const fetchCoinById = createAsyncThunk<Coin, string>(
  'favorites/fetchCoinById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get<Coin>(`${API_URL}/coins/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(err.response?.data || err.message || 'Failed to fetch coin');
    }
  }
);

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
        delete state.favoriteCoinsData[coinId];
      }
      localStorage.setItem('favoriteCoins', JSON.stringify(state.favoriteCoins));
    },
    setFavorites: (state, action: PayloadAction<string[]>) => {
      state.favoriteCoins = action.payload;
      localStorage.setItem('favoriteCoins', JSON.stringify(state.favoriteCoins));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoinById.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCoinById.fulfilled, (state, action) => {
        const coin = action.payload;
        state.favoriteCoinsData[coin.id] = coin;
        state.status = 'succeeded';
      })
      .addCase(fetchCoinById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = typeof action.payload === 'string' ? action.payload : 'Failed to fetch coin';
      });
  },
});

export const { toggleFavorite, setFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
