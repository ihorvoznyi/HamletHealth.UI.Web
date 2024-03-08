import { IActivity } from '@entities/treatment-plan/api';

export type StageType = 'addPatient' | 'treatmentPlan';
export type StageStatusType = 'checked' | 'unchecked' | 'filled';

interface Stage<T = object> {
  data: T;
  status: StageStatusType;
}

export interface IPatientStageData {
  firstName: string;
  lastName: string;
  emailOrPhoneNumber: string;
  birthDate?: string | undefined;
  gender?: string | undefined;
}

export type ActivitiesFilterType = 'all' | 'activity' | 'medicine';
export type ActivityStateType = Pick<IActivity, 'id' | 'name' | 'category' | 'icon'>;

export interface IDiagnosisStateType {
  id: string;
  name: string;
  recommendedActivities: ActivityStateType[],
}

export interface TreatmentPlanState {
  currentStage: StageType,
  stages: {
    addPatient: Stage<IPatientStageData>,
    treatmentPlan: Stage<object>
  },
  preparedData: {
    activeDiagnosis: IDiagnosisStateType | null;
    diagnosis: IDiagnosisStateType[];
  },
}