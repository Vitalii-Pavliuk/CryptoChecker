import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  Coin,
  CoinSearchResult,
  CoinDetails,
  CoinChart,
  CoinData,
} from '../../types/coinTypes';

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
      transformResponse: (response: Coin[]) => {
        console.log('getCoins response:', response);
        return response;
      },
    }),
    searchCoins: builder.query<CoinSearchResult[], string>({
      query: (query) => ({
        url: 'search',
        params: { query },
      }),
      transformResponse: (response: { coins: CoinSearchResult[] }) => {
        console.log('searchCoins response:', response);
        return response.coins;
      },
    }),
    getCoinDetails: builder.query<CoinDetails, string>({
      query: (id) => `coins/${id}`,
      transformResponse: (response: CoinDetails) => {
        console.log('getCoinDetails response:', response);
        return response;
      },
    }),
    getCoinChart: builder.query<CoinChart, { id: string; days: number }>({
      query: ({ id, days }) => `coins/${id}/market_chart?vs_currency=usd&days=${days}`,
      transformResponse: (response: CoinChart) => {
        console.log('getCoinChart response:', response);
        return response;
      },
    }),
    getCoinById: builder.query<CoinData, string>({
      query: (id) => `coins/${id}`,
      transformResponse: (response: CoinData) => {
        console.log('getCoinById response:', response);
        return response;
      },
    }),
    getCoinsByIds: builder.query<Coin[], string[]>({
      query: (ids) => ({
        url: 'coins/markets',
        params: {
          vs_currency: 'usd',
          ids: ids.join(','),
          order: 'market_cap_desc',
          per_page: ids.length,
          sparkline: false,
          price_change_percentage: '24h',
        },
      }),
      transformResponse: (response: Coin[]) => {
        console.log('getCoinsByIds response:', response);
        return response;
      },
    }),
  }),
});

export const {
  useGetCoinsQuery,
  useSearchCoinsQuery,
  useGetCoinDetailsQuery,
  useGetCoinChartQuery,
  useGetCoinByIdQuery,
  useGetCoinsByIdsQuery,
  useLazyGetCoinChartQuery,
} = coinGeckoApi;
