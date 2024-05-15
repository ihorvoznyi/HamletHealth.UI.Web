import { createSlice } from '@reduxjs/toolkit';
import { endOfMonth, startOfMonth } from 'date-fns';

import type {
	PatientState,
	SetCurrentPatientPayload,
	SetDateRangePayload,
	SetKeyHealthIndicatorPayload,
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
	},
	selection: {
		range: {
			startDate: startOfMonth(new Date()),
			endDate: endOfMonth(new Date()),
		},
		activities: [],
		keyHealthIndicator: '',
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
	},
});

export const patientReducer = patientSlice.reducer;
export const patientActions = patientSlice.actions;
