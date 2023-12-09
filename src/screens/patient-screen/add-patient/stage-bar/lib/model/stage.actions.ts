import { PayloadAction } from '@reduxjs/toolkit';
import { IActionStageStatus, IStageState, StageType } from './stage.interfaces';

export const actions = {
  setStageStatus: (state: IStageState, { payload }: PayloadAction<IActionStageStatus>) => {
    state[payload.stage] = payload.status;
  },
  setCurrentStage: (stage: IStageState, { payload }: PayloadAction<StageType>) => {
    stage.current = payload;
  },
  resetStages: (stage: IStageState) => {
    stage.current = 'patient';
    stage.patientStatus = 'unchecked';
    stage.treatmentStatus = 'unchecked';
    stage.supporterStatus = 'unchecked';
  }
};
