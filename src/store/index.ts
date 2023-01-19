import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { tickerApi } from '../service/tickerApi';

export const store = configureStore({
  reducer: {
    [tickerApi.reducerPath]: tickerApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tickerApi.middleware)
})