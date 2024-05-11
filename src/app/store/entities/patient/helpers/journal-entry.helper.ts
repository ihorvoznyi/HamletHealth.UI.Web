/* eslint-disable @typescript-eslint/no-explicit-any */
import { sortByDate, formatTimeISOString } from '@utils/date.util';

import type { JournalEntry } from '../model/types';
import type { PatientPlanDto, TreatmentPlanDto, JournalEntryDto } from '@app/store/entities/treatment';

export class JournalEntryHelper {
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

	private static toProps(entry: JournalEntryDto, activityById: Map<string, any>): JournalEntry & { date: string } {
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