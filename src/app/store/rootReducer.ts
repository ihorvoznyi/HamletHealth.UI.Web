import { combineReducers } from '@reduxjs/toolkit';

import { patientApi, treatmentPlanReducer } from '@entities/treatment-plan';
import { appReducer } from './app/index.slice';
import { userReducer, userApi } from '@entities/user';

export const rootReducer = combineReducers({
  appReducer,
  userReducer,
  treatmentPlanReducer,
  [userApi.reducerPath]: userApi.reducer,
  [patientApi.reducerPath]: patientApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
