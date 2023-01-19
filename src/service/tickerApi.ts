import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CoinResponseType, CoinsResponseType, TickerById } from 'src/types';

export const tickerApi = createApi({
  reducerPath: 'tickerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coinlore.net/api/' }),
  tagTypes: ['Tickers'],
  endpoints: (builder) => ({
    getTickers: builder.query<CoinsResponseType, void>({
      query: () => 'tickers/?start=0&limit=50',
      providesTags: ['Tickers']
    }),
    getTickerById: builder.query<CoinResponseType, string>({
      query: (id) => `ticker/?id=${id}`
    })
  })
})

export const { useGetTickersQuery, useGetTickerByIdQuery } = tickerApi;
