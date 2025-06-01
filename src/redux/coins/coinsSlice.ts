import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { Coin, CoinSearchResult } from '../../types/coinTypes';

const API_URL = 'https://api.coingecko.com/api/v3';

interface CoinsState {
  coins: Coin[];
  searchResults: CoinSearchResult[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  searchStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  page: number;
  hasMore: boolean;
  searchQuery: string;
}

const initialState: CoinsState = {
  coins: [],
  searchResults: [],
  status: 'idle',
  searchStatus: 'idle',
  error: null,
  page: 1,
  hasMore: true,
  searchQuery: '',
};

export const fetchCoins = createAsyncThunk<Coin[], number>(
  'coins/fetchCoins',
  async (page, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/coins/markets`, {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 20,
          page,
          sparkline: false,
          price_change_percentage: '24h'
        },
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to fetch coins');
    }
  }
);

export const searchCoins = createAsyncThunk<CoinSearchResult[], string>(
  'coins/searchCoins',
  async (query, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/search`, {
        params: { query }
      });
      return response.data.coins;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to search coins');
    }
  }
);

const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    resetSearchResults: (state) => {
      state.searchResults = [];
      state.searchStatus = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoins.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCoins.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.coins = [...state.coins, ...action.payload];
        state.page += 1;
        state.hasMore = action.payload.length === 20;
      })
      .addCase(fetchCoins.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(searchCoins.pending, (state) => {
        state.searchStatus = 'loading';
      })
      .addCase(searchCoins.fulfilled, (state, action) => {
        state.searchStatus = 'succeeded';
        state.searchResults = action.payload;
      })
      .addCase(searchCoins.rejected, (state, action) => {
        state.searchStatus = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { setSearchQuery, resetSearchResults } = coinsSlice.actions;
export default coinsSlice.reducer;