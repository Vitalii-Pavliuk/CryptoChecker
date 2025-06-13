import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';
import authReducer from './User/authSlice';
import favoritesReducer from './coins/favoritesSlice';
import { coinGeckoApi } from '../redux/services/coinGeckoApi';

const rootReducer = combineReducers({
  auth: authReducer,
  favorites: favoritesReducer,
  [coinGeckoApi.reducerPath]: coinGeckoApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(coinGeckoApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>;
