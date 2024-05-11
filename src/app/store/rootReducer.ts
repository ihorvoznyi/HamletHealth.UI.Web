import { combineReducers } from '@reduxjs/toolkit';

import { api } from './app';
import { treatmentPlanReducer } from '@app/store/entities/treatment';
import { appReducer } from './app/index.slice';
import { patientReducer } from './entities/patient';
import { userReducer } from '@app/store/entities/user';

export const rootReducer = combineReducers({
  appReducer,
  userReducer,
  patientReducer,
  treatmentPlanReducer,
  [api.reducerPath]: api.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
