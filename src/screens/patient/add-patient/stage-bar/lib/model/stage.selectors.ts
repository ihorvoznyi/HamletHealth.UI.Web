import { RootState } from '@app/store';

export const selectStageStatuses = (state: RootState) => {
  const { current: _, ...statuses } = state.stageReducer;

  return {...statuses};
};

export const selectStages = (state: RootState) => state.stageReducer;
export const selectCurrentStage = (state: RootState) => state.stageReducer.current;
