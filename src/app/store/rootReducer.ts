import { combineReducers } from '@reduxjs/toolkit';
import { stageReducer } from '@screens/patient/add-patient/stage-bar/lib';

export const rootReducer = combineReducers({
  stageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
