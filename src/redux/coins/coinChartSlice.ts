import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import type { CoinChart } from './coinTypes';

interface CoinChartState {
  coin: CoinChart | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CoinChartState = {
  coin: null,
  status: 'idle',
  error: null,
};

export const fetchCoinChart = createAsyncThunk<CoinChart, string>(
  'coins/fetchCoinChart',
  async (id: string) => {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=360
`);
    return response.data;
  }
);

const coinChartSlice = createSlice({
  name: 'coinChart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoinChart.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCoinChart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.coin = action.payload;
      })
      .addCase(fetchCoinChart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch coin Chart';
      });
  },
});

export default coinChartSlice.reducer;