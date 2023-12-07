export type StageStatusType = 'checked' | 'unchecked' | 'filled';
export type StageType = 'patient' | 'supporter' | 'treatment';

export interface IActionStageStatus {
  stage: keyof Pick<IStageState, 'patientStatus' | 'supporterStatus' | 'treatmentStatus'>;
  status: StageStatusType;
}

export interface IStageState {
  current: StageType;
  patientStatus: StageStatusType;
  supporterStatus: StageStatusType;
  treatmentStatus: StageStatusType;
}
