import { createSlice } from '@reduxjs/toolkit';

import type { PatientState, SetCurrentPatientPayload } from './types';
import { toNormalCase } from '@utils/text.util';

const initialState: PatientState = {
  current: {
    id: '',
    firstName: '',
    lastName: '',
    fullname: '',
    birthDate: '',
    gender: undefined,
    plan: {
      id: '',
      name: '',
      goal: '',
      diagnos: '',
      medications: []
    },
    journalEntries: []
  }
};

export const patientSlice = createSlice({
  name: 'patientSlice',
  initialState,
  reducers: {
    setCurrentPatient: (state: PatientState, { payload }: SetCurrentPatientPayload) => {      
      Object.assign(state.current, payload);
    }
  }
});

export const patientReducer = patientSlice.reducer;
export const patientActions = patientSlice.actions;