
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import type { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';
import coinsReducer from "./coins/coinsSlice";
import coinDetailsReducer from "./coins/coinDetailsSlice";

const rootReducer = combineReducers({
  coins: coinsReducer,
  coinDetails: coinDetailsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>;