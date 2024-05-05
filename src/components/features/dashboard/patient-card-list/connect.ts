/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-mixed-spaces-and-tabs */
import { useMemo } from 'react';
import { endOfDay } from 'date-fns';

import {
	EntryDto,
	PatientPlanDto,
	TreatmentPlanDto,
	useGetPatientsPlansQuery,
} from '@app/store/entities/patient';

import { toNormalCase } from '@utils/text.util';
import { getGenderName } from '@utils/gender.util';
import { formatISOString, formatTimeISOString, monthShortMap, weekDayMap } from '@utils/date.util';

import type { IPatientCard } from './patient-card';
import type { JournalEntryProps } from '@components/ui/common/journal-entries-carousel/mood-card';
import { useDashboardContext } from '@pages/protected/dashboard/context';

const sortByDate = (dateISOA: string, dateISOB: string) => {
	const dateA = new Date(dateISOA).getTime();
	const dateB = new Date(dateISOB).getTime();

	return dateA - dateB;
};

export type PatientCardProps = Omit<IPatientCard, 'entries'> & {
	entries: (JournalEntryProps & { date: string })[]
}

export const useConnect = () => {
	const { data = [], isLoading, isError } = useGetPatientsPlansQuery();
	const { selectionRange } = useDashboardContext();

	const patientsGroup = useMemo(() => {
		const items = data.map(patientPlan => {
			const { userDto: user } = patientPlan;

			return {
				id: user.id,
				fullname: `${toNormalCase(user.firstName)} ${toNormalCase(user.lastName)}`,
				gender: getGenderName(user.gender),
				diagnos: user.diagnos,
				birthDate: formatISOString(user.birthDate),
				entries: JournalEntry.from(patientPlan),
			};
		});

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

class JournalEntry {
	public static from(patientPlanDto: PatientPlanDto) {
		const activityById = this.activitiesMapFrom(patientPlanDto?.plan);
		const entriesDto = patientPlanDto?.entries ?? [];
		const sortedEntries = [...entriesDto].sort((a, b) => sortByDate(a.date, b.date));

		return sortedEntries.map(entry => this.toProps(entry, activityById));
	}

	private static activitiesMapFrom(treatmentPlan?: TreatmentPlanDto) {
		const activityById = new Map();

		if (!treatmentPlan) {
			return activityById;
		}

		const planItems = treatmentPlan?.treatmentPlanItems ?? [];
		planItems.forEach(planItem => {
			planItem?.activities.forEach(activity => {
				activityById.set(activity.id, {
					id: activity.id,
					icon: `data:image/svg;base64,${activity.icon}`,
					text: activity.name,
				});
			});
		});

		return activityById;
	}

	private static toProps(entry: EntryDto, activityById: Map<string, any>): JournalEntryProps & { date: string } {
		return {
			id: entry.id,
			time: formatTimeISOString(entry.date),
			date: entry.date,
			note: entry.note,
			recipes: entry.activityIds.map(id => activityById.get(id)).filter(activity => !!activity),
			keyHealthIndicators: entry.keyHealthIndicatorRates.map(r => ({
				id: r.id,
				rate: r.rate,
				name: r.keyHealthIndicator.name.split(' ').pop() ?? '',
			})),
		};
	}
}

export type PatientCardGroup = {
	[key: string]: {
		date: string
		items: IPatientCard[]
	}
}

function groupPatientCardsByDay(patientCards: PatientCardProps[]) {
  const groupedByDay: PatientCardGroup = {};

	patientCards.forEach(patientCard => {
		patientCard.entries.forEach(entry => {
			const key = formatGroupDateKey(entry.date);
			const groupEntry = groupedByDay[key];

			if (groupEntry) {
				const exist = groupEntry.items.find(patient => patient.id === patientCard.id);
				if (!exist) {
					const { entries: _, ...patient } = patientCard;
					groupEntry.items.push({
						...patient,
						entries: [entry]
					});

					return;
				}

				exist.entries.push(entry);
				return;
			}

			const { entries: _, ...patient } = patientCard;
			groupedByDay[key] = {
				date: entry.date,
				items: [{ 
					...patient,
					entries: [entry]
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