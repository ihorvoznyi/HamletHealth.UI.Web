import { createSlice } from '@reduxjs/toolkit';
import { endOfMonth, startOfMonth } from 'date-fns';

import type {
  PatientState,
  SetCurrentPatientPayload,
  SetDateRangePayload,
  SetKeyHealthIndicatorPayload,
  SetPatientStatisticsPayload,
  SetSelectionPayload,
} from './types';

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
      activities: [],
      medications: [],
    },
    journalEntries: [],
    keyHealthIndicators: [],
  },
  selection: {
    range: {
      startDate: startOfMonth(new Date()).toISOString(),
      endDate: endOfMonth(new Date()).toISOString(),
    },
    activities: [],
    keyHealthIndicator: '',
  },
  statistics: {
    khiStatistics: [],
    activityKhi: {},
    relatedActivities: [],
  },
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
    setSelection: (state: PatientState, { payload }: SetSelectionPayload) => {
      Object.assign(state.selection, payload);
    },
    setKeyHealthIndicator: (state: PatientState, { payload }: SetKeyHealthIndicatorPayload) => {
      state.selection.keyHealthIndicator = payload;
    },
    setStatistics: (state: PatientState, { payload }: SetPatientStatisticsPayload) => {
      Object.assign(state.statistics, payload);
    },
  },
});

export const patientReducer = patientSlice.reducer;
export const patientActions = patientSlice.actions;
