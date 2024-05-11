import { IActivity } from '@app/store/entities/treatment/api';
import { Gender } from '@shared/lib/enums';

export type StageType = 'addPatient' | 'treatmentPlan';
export type StageStatusType = 'checked' | 'unchecked' | 'filled';

interface Stage<T = object> {
  data: T;
  status: StageStatusType;
}

export interface TreatmentPlanState {
  currentStage: StageType,
  stages: {
    addPatient: Stage<IPatientStageData>,
    treatmentPlan: Stage<ITreatmentPlanStateData>
  },
  preparedData: {
    selectedDiagnosis: IDiagnosisStateType[];
    diagnosis: IDiagnosisStateType[];
  },
}

export interface IPatientStageData {
  firstName: string;
  lastName: string;
  phoneOrEmail: string;
  birthDate?: string | undefined;
  gender?: Gender | undefined;
}

export type ActivitiesFilterType = 'all' | 'activity' | 'medicine';
export type TreatmentStateType = Pick<IActivity, 'id' | 'name' | 'category' | 'icon'>;

export interface IDiagnosisStateType {
  id: string;
  code: string;
  name: string;
  recommendedActivities: TreatmentStateType[],
}

type SelectedTreatmentType = {
  diagnosId: string;
  treatment: TreatmentStateType;
};

export interface ITreatmentPlanStateData {
  name: string;
  description: string;
  patientId: string,
  selectedTreatments: SelectedTreatmentType[];
}

export type TreatmentPlanItemType = {
  diagnosis: IDiagnosisStateType; 
  treatment: TreatmentStateType; 
}

export type TreatmentPlanDataType = {
  name: string;
  description: string;
  patientId: string;
  treatmentPlanItems: TreatmentPlanItemType[];
};