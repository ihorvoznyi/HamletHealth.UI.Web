import { createSlice } from '@reduxjs/toolkit'; 

import { actions } from './stage.actions';
import { IStageState } from './stage.interfaces';

const initialState: IStageState = {
  current: 'patient',
  patientStatus: 'unchecked',
  treatmentStatus: 'unchecked',
  supporterStatus: 'unchecked',
};

const stageSlice = createSlice({
  name: 'stageSlice',
  initialState: initialState,
  reducers: actions
});

export const stageReducer = stageSlice.reducer;
export const { setStageStatus, setCurrentStage } = stageSlice.actions;
