import { configureStore } from '@reduxjs/toolkit';

import { userApi } from '@app/store/entities/user';
import { patientApi } from '@app/store/entities/patient';

import { rootReducer } from './rootReducer';

const middlewares = [patientApi.middleware, userApi.middleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middlewares)
});
