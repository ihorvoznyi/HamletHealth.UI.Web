import { combineReducers } from '@reduxjs/toolkit';

import { stageReducer } from '@screens/patient-screen/add-patient/stage-bar/lib';
import { userApi, userReducer } from '@entities/user';

export const rootReducer = combineReducers({
  userReducer,
  stageReducer,
  [userApi.reducerPath]: userApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
