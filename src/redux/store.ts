import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';
import coinsReducer from './coins/coinsSlice';
import coinDetailsReducer from './coins/coinDetailsSlice';
import coinChartReducer from './coins/coinChartSlice';
import authReducer from './User/authSlice';
import favoritesReducer from './coins/favoritesSlice';
import { coinGeckoApi } from '../redux/services/coinGeckoApi';

const rootReducer = combineReducers({
  coins: coinsReducer,
  coinDetails: coinDetailsReducer,
  coinChart: coinChartReducer,
  auth: authReducer,
  favorites: favoritesReducer,
  [coinGeckoApi.reducerPath]: coinGeckoApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coinGeckoApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>;
