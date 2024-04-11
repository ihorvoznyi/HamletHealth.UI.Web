import { PayloadAction } from '@reduxjs/toolkit';

import { 
  IDiagnosisStateType, 
  IPatientStageData, 
  ITreatmentPlanStateData, 
  StageStatusType, 
  StageType
} from './model.interfaces';

export type StageDataPayload<TData> = PayloadAction<{
  stage: StageType;
  data: TData;
}>;

export type StageStatusPayload = PayloadAction<StageStatusType>;
export type StageTypePayload = PayloadAction<StageType>;
export type UpdateAddPatientStagePayload = PayloadAction<IPatientStageData>;

export type SetDiagnosisPayload = PayloadAction<IDiagnosisStateType[]>;
export type DiagnosisIdPayload = PayloadAction<string>;
export type ActivityOrMedicationIdPayload = PayloadAction<string>;
export type SetPatientIdPayload = PayloadAction<string>;

export type TreatmentPlanMeta = PayloadAction<Pick<ITreatmentPlanStateData, 'name' | 'description'>>;