/* eslint-disable no-mixed-spaces-and-tabs */
import { useMemo } from 'react';
import { endOfDay } from 'date-fns';

import { useDashboardContext } from '@pages/protected/dashboard/context';
import { useGetPatientsPlansQuery } from '@app/store/entities/treatment';

import { monthShortMap, weekDayMap, sortByDate } from '@utils/date.util';
import { mapPatientPlanToPatient } from '@app/store/entities/patient/helpers/patient.mapper';

import type { Patient } from '@app/store/entities/patient/model/types';

export const useConnect = () => {
	const { data = [], isLoading, isError } = useGetPatientsPlansQuery();
	const { selectionRange } = useDashboardContext();

	const patientsGroup = useMemo(() => {
		const items = data.map(mapPatientPlanToPatient);
		const group = groupPatientCardsByDay(items);
		const entries = Object.entries(group).sort((a, b) => sortByDate(b[1].date, a[1].date));
		if (!selectionRange) {
			return entries;
		}

		return entries.filter(([_, item]) => {
			const date = new Date(item.date);
			return selectionRange.startDate <= date && date <= endOfDay(selectionRange.endDate);
		});
	}, [data, isLoading, selectionRange]);

	return {
		patientsGroup,
		isError,
		isLoading,
	};
};

export type PatientCardGroup = {
	[key: string]: {
		date: string
		items: Patient[]
	}
}

function groupPatientCardsByDay(patients: Patient[]) {
  const groupedByDay: PatientCardGroup = {};

	patients.forEach(patient => {
		patient.journalEntries.forEach(entry => {
			const key = formatGroupDateKey(entry.date);
			const groupEntry = groupedByDay[key];

			if (groupEntry) {
				const exist = groupEntry.items.find(item => item.id === patient.id);
				if (!exist) {
					const { journalEntries: _, ...other } = patient;
					groupEntry.items.push({
						...other,
						journalEntries: [entry]
					});

					return;
				}

				exist.journalEntries.push(entry);
				return;
			}

			const { journalEntries: _, ...other } = patient;
			groupedByDay[key] = {
				date: entry.date,
				items: [{ 
					...other,
					journalEntries: [entry]
				 }]
			};
		});
	});

  return groupedByDay;
}

function formatGroupDateKey(isoString: string) {
  const date = new Date(isoString);
	const day = date.getUTCDate();
	const month = date.getUTCMonth();
	const weekDay = date.getUTCDay();

	return `${monthShortMap[month]} ${day}, ${weekDayMap[weekDay]}`;
}