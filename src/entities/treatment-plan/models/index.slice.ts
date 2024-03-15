import { createSlice } from '@reduxjs/toolkit';
import { 
  TreatmentPlanState, 
  UpdateAddPatientStagePayload, 
  StageStatusPayload, 
  StageTypePayload, 
  SetDiagnosisPayload,
  DiagnosisIdPayload,
  ActivityOrMedicationIdPayload,
  TreatmentPlanMeta,
  InvitedPatientIdPayload
} from './types';

const initialState: TreatmentPlanState = {
  currentStage: 'addPatient',
  stages: {
    addPatient: {
      status: 'checked',
      data: {
        firstName: '',
        lastName: '',
        emailOrPhoneNumber: '',
        birthDate: '',
        gender: ''
      }
    },
    treatmentPlan: {
      status: 'checked',
      data: {
        name: '',
        description: '',
        invitedPatientId: '',
        selectedTreatments: [],
      }
    },
  },
  preparedData: {
    diagnosis: [],
    activeDiagnosis: null
  }
};

export const treatmentPlanSlice = createSlice({
  name: 'treatmentPlanSlice',
  initialState: initialState,
  reducers: {
    setStageStatus: (state: TreatmentPlanState, { payload }: StageStatusPayload) => {
      const stage = state.stages[state.currentStage];
      stage.status = payload;
    },
    setAddPatientStageData: (state: TreatmentPlanState, { payload }: UpdateAddPatientStagePayload) => {
      const stage = state.stages[state.currentStage];
      stage.data = payload;
      stage.status = 'filled';
    },
    setCurrentStage: (state: TreatmentPlanState, { payload }: StageTypePayload) => {
      state.currentStage = payload;
    },
    resetStages: (state: TreatmentPlanState) => {
      state.currentStage = 'addPatient';
      state.stages.addPatient.status = 'unchecked';
      state.stages.treatmentPlan.status = 'unchecked';
    },
    setDiagnosis: (state: TreatmentPlanState, { payload }: SetDiagnosisPayload) => {
      state.preparedData.diagnosis = payload;
    },
    setActiveDiagnosis: (state: TreatmentPlanState, { payload }: DiagnosisIdPayload) => {
      const diagnosis = state.preparedData.diagnosis.find(item => item.id === payload);
      if (diagnosis) {
        state.preparedData.activeDiagnosis = diagnosis;
      }
    },
    setTreatmentPlanMetadata: (state: TreatmentPlanState, { payload }: TreatmentPlanMeta) => {
      const { treatmentPlan } = state.stages;
      
      treatmentPlan.data.name = payload.name;
      treatmentPlan.data.description = payload.description;
    },
    addSelectedActivityOrMedication: (state: TreatmentPlanState, { payload }: ActivityOrMedicationIdPayload) => {
      const activeDiagnosis = state.preparedData.activeDiagnosis;
      if (!activeDiagnosis) {
        return;
      }

      const { selectedTreatments } = state.stages.treatmentPlan.data;
      const activity = activeDiagnosis.recommendedActivities.find(item => item.id === payload);

      if (activity) {
        const isAdded = selectedTreatments.find(item => item.treatment.id === activity.id);

        if (isAdded) {
          return;
        }

        const selectedTreatment = {
          diagnosisId: activeDiagnosis.id,
          treatment: activity,
        };

        selectedTreatments.push(selectedTreatment);
      }
    },
    deleteSelectedActivityOrMedication: (state: TreatmentPlanState, { payload }: ActivityOrMedicationIdPayload) => {
      const { selectedTreatments: selectedActivities } = state.stages.treatmentPlan.data;
      state.stages.treatmentPlan.data.selectedTreatments = 
        selectedActivities.filter(item => item.treatment.id !== payload);
    },
    setInvitedPatientId: (state: TreatmentPlanState, { payload }: InvitedPatientIdPayload) => {
      state.stages.treatmentPlan.data.invitedPatientId = payload;
    }
  },
});

export const treatmentPlanReducer = treatmentPlanSlice.reducer;
export const treatmentPlanActions = treatmentPlanSlice.actions;
