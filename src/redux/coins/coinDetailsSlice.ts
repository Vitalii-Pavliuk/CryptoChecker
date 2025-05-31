
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


interface CoinDetails {
  id: string;
  symbol: string;
  name: string;
  image: {
    small: string;
    thumb: string;
    large: string;
  };
  market_data: {
    current_price: {
      [key: string]: number;
    };
    market_cap: {
      [key: string]: number;
    };
    total_volume: {
      [key: string]: number;
    };
    price_change_percentage_24h: number;
  };
  description: {
    [key: string]: string;
  };
  links: {
    homepage: string[];
  };
}

interface CoinDetailsState {
  coin: CoinDetails | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CoinDetailsState = {
  coin: null,
  status: 'idle',
  error: null,
};

export const fetchCoinDetails = createAsyncThunk<CoinDetails, string>(
  'coins/fetchCoinDetails',
  async (id: string) => {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
    return response.data;
  }
);

const coinDetailsSlice = createSlice({
  name: 'coinDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoinDetails.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCoinDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.coin = action.payload;
      })
      .addCase(fetchCoinDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Unknown error';
      });
  },
});

export default coinDetailsSlice.reducer;
