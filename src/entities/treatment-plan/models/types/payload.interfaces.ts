import { PayloadAction } from '@reduxjs/toolkit';

import { IDiagnosisStateType, IPatientStageData, StageStatusType, StageType } from './model.interfaces';

export type StageDataPayload<TData> = PayloadAction<{
  stage: StageType;
  data: TData;
}>;

export type StageStatusPayload = PayloadAction<StageStatusType>;
export type StageTypePayload = PayloadAction<StageType>;
export type UpdateAddPatientStagePayload = PayloadAction<IPatientStageData>;

export type SetDiagnosisPayload = PayloadAction<IDiagnosisStateType[]>;
export type DiagnosisIdPayload = PayloadAction<string>;