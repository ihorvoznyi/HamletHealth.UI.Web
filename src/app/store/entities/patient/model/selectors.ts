import { endOfDay } from 'date-fns';
import { createSelector } from 'reselect';

import { sortByDate } from '@utils/date.util';
import { formatGroupDateKey } from '@utils/patient.utils';

import type { RootState } from '@shared/model';
import type { JournalEntry, KeyHealthIndicator, Patient } from './types';

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

		const end = endOfDay(selection.range.endDate);
		const start = selection.range.startDate;

		journalEntries.forEach(entry => {
			const date = new Date(entry.date);
			const inRange = start <= date && date <= end;
			if (!inRange) {
				return;
			}

			if (
				selection.activities.length &&
				!entry.activities.some(activity => selection.activities.includes(activity.id))
			) {
				return;
			}

			const key = formatGroupDateKey(entry.date);
			if (group[key]) {
				group[key].items.push(entry);
			} else {
				group[key] = { date: entry.date, items: [entry] };
			}
		});

		return Object.entries(group).sort((a, b) => sortByDate(b[1].date, a[1].date));
	}
);

export const selectPatientSelection = ({ patientReducer }: RootState) => {
	return patientReducer.selection;
};

export const selectPatientActions = ({ patientReducer }: RootState) => {
	return patientReducer.current.plan?.activities ?? [];
};

export const selectPatientKeyHealthIndicators = createSelector(
	[(state: RootState) => state.patientReducer],
	patientReducer => {
		const { journalEntries } = patientReducer.current;
		const keyHealthIndicators: KeyHealthIndicator[] = [];

		journalEntries.forEach(entry => {
			entry.healthIndicatorRates.forEach(healthRate => {
				const keyHealthIndicator = healthRate.keyHealthIndicator;
				const exist = keyHealthIndicators.find(i => i.id === keyHealthIndicator.id);
				if (exist) {
					return;
				}

				keyHealthIndicators.push(keyHealthIndicator);
			});
		});

		return keyHealthIndicators.sort(sortByName);
	}
);

// Types
type JournalEntriesGroup = {
	[key in string]: {
		date: string;
		items: JournalEntry[];
	};
};

function sortByName<T extends { name: string }>(a: T, b: T) {
	if (a.name < b.name) {
		return -1;
	}
	if (a.name > b.name) {
		return 1;
	}
	return 0;
}
