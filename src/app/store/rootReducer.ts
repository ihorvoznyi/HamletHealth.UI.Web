import { combineReducers } from '@reduxjs/toolkit';

import { patientApi, treatmentPlanReducer } from '@app/store/entities/patient';
import { appReducer } from './app/index.slice';
import { userReducer, userApi } from '@app/store/entities/user';

export const rootReducer = combineReducers({
  appReducer,
  userReducer,
  treatmentPlanReducer,
  [userApi.reducerPath]: userApi.reducer,
  [patientApi.reducerPath]: patientApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
