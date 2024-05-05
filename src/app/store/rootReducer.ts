import { combineReducers } from '@reduxjs/toolkit';

import { api } from './app';
import { treatmentPlanReducer } from '@app/store/entities/patient';
import { appReducer } from './app/index.slice';
import { userReducer } from '@app/store/entities/user';

export const rootReducer = combineReducers({
  appReducer,
  userReducer,
  treatmentPlanReducer,
  [api.reducerPath]: api.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
