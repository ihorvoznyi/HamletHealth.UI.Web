import { RootState } from '@shared/model';
import { ActivitiesFilterType } from './types';

export const selectCurrentStage = (state: RootState) => {
  const currentStageType = state.treatmentPlanReducer.currentStage;
  return state.treatmentPlanReducer.stages[currentStageType];
};
export const selectCurrentStageType = ({ treatmentPlanReducer }: RootState) => treatmentPlanReducer.currentStage;

export const selectAddPatientStageData = ({ 
  treatmentPlanReducer 
}: RootState) => treatmentPlanReducer.stages.addPatient.data;

export const selectTreatmentPlanStageData = ({ 
  treatmentPlanReducer 
}: RootState) => treatmentPlanReducer.stages.treatmentPlan.data;

export const selectPatientStageStatus = ({ 
  treatmentPlanReducer 
}: RootState) => treatmentPlanReducer.stages.addPatient.status;

export const selectTreatmentStageStatus = ({ 
  treatmentPlanReducer 
}: RootState) => treatmentPlanReducer.stages.treatmentPlan.status;

export const selectStageStatusesAndCurrentStage = ({ treatmentPlanReducer }: RootState) => ({
  currentStage: treatmentPlanReducer.currentStage,
  patientStageStatus: treatmentPlanReducer.stages.addPatient.status,
  treatmentStageStatus: treatmentPlanReducer.stages.treatmentPlan.status,
});

export const selectDiagnosisRecommendations = (
  id: string, 
  { 
    treatmentPlanReducer 
  }: RootState) => {
  const diagnosis = treatmentPlanReducer.preparedData.diagnosis.find(item => item.id === id);
  return diagnosis?.recommendedActivities;
};

export const selectTreatmentPlanStage = ({ treatmentPlanReducer }: RootState) => ({
  stageStatus: treatmentPlanReducer.stages.treatmentPlan.status,
  diagnosis: treatmentPlanReducer.preparedData.diagnosis,
  selectedDiagnosis: treatmentPlanReducer.preparedData.activeDiagnosis,
});

export const selectActivitiesByType = (filterBy: ActivitiesFilterType, { treatmentPlanReducer }: RootState) => {
  const recommendedActivities = treatmentPlanReducer.preparedData.activeDiagnosis?.recommendedActivities ?? [];
  if (filterBy === 'all') {
    return recommendedActivities;
  }

  const category = filterBy === 'activity' ? 0 : 1;
  return recommendedActivities.filter(item => item.category === category); 
};

export const selectActiveDiagnosisId = ({ 
  treatmentPlanReducer 
}: RootState) => treatmentPlanReducer.preparedData.activeDiagnosis?.id;