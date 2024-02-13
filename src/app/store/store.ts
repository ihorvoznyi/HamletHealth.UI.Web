import { configureStore } from '@reduxjs/toolkit';

import { userApi } from '@entities/user';
import { rootReducer } from './rootReducer';

const middlewares = [userApi.middleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middlewares)
});
