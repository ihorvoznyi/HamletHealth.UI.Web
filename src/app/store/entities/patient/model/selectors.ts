import { endOfDay } from 'date-fns';
import { createSelector } from 'reselect';

import { sortByDate } from '@utils/date.util';
import { formatGroupDateKey } from '@utils/patient.utils';

import type { RootState } from '@shared/model';
import type { JournalEntry, Patient } from './types';

export const selectCurrentPatient = ({ patientReducer }: RootState): Patient => {
	return patientReducer.current;
};

export const selectPatientEntriesGroup = createSelector(
	[(state: RootState) => state.patientReducer],
	patientReducer => {
		const group: JournalEntriesGroup = {};
		const {
			selection,
			current: { journalEntries },
		} = patientReducer;

		journalEntries.forEach(entry => {
			const key = formatGroupDateKey(entry.date);
			if (group[key]) {
				group[key].items.push(entry);
			} else {
				group[key] = { date: entry.date, items: [entry] };
			}
		});

		const entries = Object.entries(group);
		if (!selection) {
			return entries.sort((a, b) => sortByDate(b[1].date, a[1].date));
		}

		const start = selection.startDate;
		const end = endOfDay(selection.endDate);

		return entries
		.filter(([_, item]) => {
			const date = new Date(item.date);
			return start <= date && date <= end;
		})
		.sort((a, b) => sortByDate(b[1].date, a[1].date));
	}
);

// Types
type JournalEntriesGroup = {
	[key in string]: {
		date: string;
		items: JournalEntry[];
	};
};
