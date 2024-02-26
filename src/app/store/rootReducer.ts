import { combineReducers } from '@reduxjs/toolkit';

import { patientApi } from '@entities/patient';
import { userReducer, userApi } from '@entities/user';
import { stageReducer } from '@screens/patient-screen/add-patient/stage-bar/lib';

export const rootReducer = combineReducers({
  userReducer,
  stageReducer,
  [userApi.reducerPath]: userApi.reducer,
  [patientApi.reducerPath]: patientApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
