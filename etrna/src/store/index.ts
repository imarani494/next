
import { configureStore } from '@reduxjs/toolkit';
import tokensReducer from './slices/tokens-slice';

export const store = configureStore({
  reducer: {
    tokens: tokensReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;