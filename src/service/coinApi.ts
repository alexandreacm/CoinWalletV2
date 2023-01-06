import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const coinApi = createApi({
  reducerPath: 'coinApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coinlore.net/api/' }),
  endpoints: (builder) => ({
    getTickers: builder.query({
      query: () => 'tickers/?start=0&limit=50'
    }),
    getTickerById: builder.query({
      query: ({ id }: {id: number}) => `ticker/?id=${id}`
    })
  })
})

export const { useGetTickersQuery, useLazyGetTickerByIdQuery } = coinApi;
