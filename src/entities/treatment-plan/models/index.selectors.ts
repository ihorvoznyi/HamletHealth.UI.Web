import { RootState } from '@shared/model';
import { ActivitiesFilterType, TreatmentPlanDataType } from './types';

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

export const selectTreatmentPlanStage = ({ treatmentPlanReducer }: RootState) => {
  const { status, data } = treatmentPlanReducer.stages.treatmentPlan;
  const { diagnosis, activeDiagnosis } = treatmentPlanReducer.preparedData;

  return {
    stageStatus: status,
    diagnosis: diagnosis,
    selectedDiagnosis: activeDiagnosis,
    selectedActivities: data.selectedTreatments
  };
};

export const selectActivitiesByType = (filterBy: ActivitiesFilterType, { treatmentPlanReducer }: RootState) => {
  const recommendedActivities = treatmentPlanReducer.preparedData.activeDiagnosis?.recommendedActivities ?? [];
  if (filterBy === 'all') {
    return recommendedActivities;
  }

  const category = filterBy === 'activity' ? 0 : 1;
  return recommendedActivities.filter(item => item.category === category); 
};

export const selectSelectedActivities = ({ treatmentPlanReducer }: RootState) => {
  return treatmentPlanReducer.stages.treatmentPlan.data.selectedTreatments;
};

export const selectTreatmentPlanData = ({ treatmentPlanReducer }: RootState): TreatmentPlanDataType => {
  const { data: treatmentPlanStageData } = treatmentPlanReducer.stages.treatmentPlan;
  const { diagnosis: diagnosisList } = treatmentPlanReducer.preparedData;

  return {
    name: treatmentPlanStageData.name,
    description: treatmentPlanStageData.description,
    invitedPatientId: treatmentPlanStageData.invitedPatientId,
    treatmentPlanItems: treatmentPlanStageData.selectedTreatments.map(item => {
      const activityDiagnosis = diagnosisList.find(d => d.id === item.diagnosisId);
      return {
        diagnosis: activityDiagnosis!,
        treatment: item.treatment,
      };
    }),
  };
};

export const selectActiveDiagnosisId = ({ 
  treatmentPlanReducer 
}: RootState) => treatmentPlanReducer.preparedData.activeDiagnosis?.id;