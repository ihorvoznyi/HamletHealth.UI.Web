import { createSlice } from '@reduxjs/toolkit';
import { 
  TreatmentPlanState, 
  UpdateAddPatientStagePayload, 
  StageStatusPayload, 
  StageTypePayload, 
  SetDiagnosisPayload,
  DiagnosisIdPayload
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
      data: {}
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
    }
  },
});

export const treatmentPlanReducer = treatmentPlanSlice.reducer;
export const treatmentPlanActions = treatmentPlanSlice.actions;
