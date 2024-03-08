import { configureStore } from '@reduxjs/toolkit';

import { userApi } from '@entities/user';
import { patientApi } from '@entities/treatment-plan';

import { rootReducer } from './rootReducer';

const middlewares = [patientApi.middleware, userApi.middleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middlewares)
});
