import { createSlice } from '@reduxjs/toolkit';

import type { PatientState, SetCurrentPatientPayload, SetDateRangePayload } from './types';
import { endOfMonth, startOfMonth } from 'date-fns';

const initialState: PatientState = {
  current: {
    id: '',
    firstName: '',
    lastName: '',
    fullname: '',
    birthDate: '',
    gender: '',
    plan: {
      id: '',
      name: '',
      goal: '',
      diagnos: '',
      medications: []
    },
    journalEntries: []
  },
  selection: {
    range: {
      startDate: startOfMonth(new Date()),
      endDate: endOfMonth(new Date()),
    },
    activities: [],
    keyHealthIndicator: ''
  }
};

export const patientSlice = createSlice({
  name: 'patientSlice',
  initialState,
  reducers: {
    setCurrentPatient: (state: PatientState, { payload }: SetCurrentPatientPayload) => {      
      Object.assign(state.current, payload);
    },
    setDateRange: (state: PatientState, { payload }: SetDateRangePayload) => {
      state.selection.range = payload;
    },
  }
});

export const patientReducer = patientSlice.reducer;
export const patientActions = patientSlice.actions;
