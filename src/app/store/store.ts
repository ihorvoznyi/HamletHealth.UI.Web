import { configureStore } from '@reduxjs/toolkit';
import { api } from './app';
import { rootReducer } from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware)
});
