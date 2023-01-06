import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { coinApi } from 'src/service/coinApi';

export const store = configureStore({
  reducer: {
    [coinApi.reducerPath]: coinApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(coinApi.middleware)
})