import { createSlice } from '@reduxjs/toolkit';
import { 
  TreatmentPlanState, 
  UpdateAddPatientStagePayload, 
  StageStatusPayload, 
  StageTypePayload, 
  SetDiagnosisPayload,
  DiagnosIdPayload as DiagnosIdPayload,
  ActivityOrMedicationIdPayload,
  TreatmentPlanMeta,
  SetPatientIdPayload,
  TreatmentStateType
} from './types';

const initialState: TreatmentPlanState = {
  currentStage: 'addPatient',
  stages: {
    addPatient: {
      status: 'checked',
      data: {
        firstName: '',
        lastName: '',
        phoneOrEmail: '',
        birthDate: '',
        gender: undefined
      }
    },
    treatmentPlan: {
      status: 'checked',
      data: {
        name: '',
        description: '',
        patientId: '',
        selectedTreatments: [],
      }
    },
  },
  preparedData: {
    diagnosis: [],
    selectedDiagnosis: []
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
      state.currentStage = initialState.currentStage;
      state.stages = {...initialState.stages};
      state.preparedData.selectedDiagnosis = [];
    },
    setDiagnosis: (state: TreatmentPlanState, { payload }: SetDiagnosisPayload) => {
      state.preparedData.diagnosis = payload;
    },
    selectDiagnos: (state: TreatmentPlanState, { payload }: DiagnosIdPayload) => {
      const { selectedDiagnosis } = state.preparedData;
      const alreadySelected = selectedDiagnosis.find(x => x.id === payload);
      if (alreadySelected) {
        state.preparedData.selectedDiagnosis = selectedDiagnosis.filter(x => x.id !== alreadySelected.id);
        return;
      }

      const diagnos = state.preparedData.diagnosis.find(item => item.id === payload);
      if (diagnos) {
        state.preparedData.selectedDiagnosis.push(diagnos);
      }
    },
    setTreatmentPlanMetadata: (state: TreatmentPlanState, { payload }: TreatmentPlanMeta) => {
      const { treatmentPlan } = state.stages;
      
      treatmentPlan.data.name = payload.name;
      treatmentPlan.data.description = payload.description;
    },
    selectedActivityOrMedication: (state: TreatmentPlanState, { payload }: ActivityOrMedicationIdPayload) => {
      const { selectedTreatments } = state.stages.treatmentPlan.data;
      let activity: TreatmentStateType | null = null;
      let diagnosId: string = '';

      for (const diagnos of state.preparedData.selectedDiagnosis) {
        const selectedActivity = diagnos.recommendedActivities.find(item => item.id === payload);
        if (!selectedActivity) {
          continue;
        }

        activity = selectedActivity;
        diagnosId = diagnos.id;
        break;
      }

      if (activity !== null) {
        const isAdded = selectedTreatments.find(item => item.treatment.id === activity.id);

        if (isAdded) {
          return;
        }

        const selectedTreatment = {
          diagnosId,
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
    setPatientId: (state: TreatmentPlanState, { payload }: SetPatientIdPayload) => {
      state.stages.treatmentPlan.data.patientId = payload;
    }
  },
});

export const treatmentPlanReducer = treatmentPlanSlice.reducer;
export const treatmentPlanActions = treatmentPlanSlice.actions;
