import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Coin, CoinSearchResult, CoinDetails, CoinChart, CoinData } from '../../types/coinTypes';

export const coinGeckoApi = createApi({
  reducerPath: 'coinGeckoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coingecko.com/api/v3' }),
  endpoints: (builder) => ({
    getCoins: builder.query<Coin[], number>({
      query: (page = 1) => ({
        url: 'coins/markets',
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 20,
          page,
          sparkline: false,
          price_change_percentage: '24h',
        },
      }),
    }),
    searchCoins: builder.query<CoinSearchResult[], string>({
      query: (query) => ({
        url: 'search',
        params: { query },
      }),
      transformResponse: (response: { coins: CoinSearchResult[] }) => response.coins,
    }),
    getCoinDetails: builder.query<CoinDetails, string>({
      query: (id) => `coins/${id}`,
    }),
    getCoinChart: builder.query<CoinChart, { id: string; days: number }>({
      query: ({ id, days }) => `coins/${id}/market_chart?vs_currency=usd&days=${days}`,
    }),
    getCoinById: builder.query<CoinData, string>({
      query: (id) => `coins/${id}`,
    }),
  }),
});

export const {
  useGetCoinsQuery,
  useSearchCoinsQuery,
  useGetCoinDetailsQuery,
  useGetCoinChartQuery,
  useGetCoinByIdQuery,
  useLazyGetCoinChartQuery,
} = coinGeckoApi;