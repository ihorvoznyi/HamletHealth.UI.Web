/* eslint-disable no-mixed-spaces-and-tabs */
import { useMemo } from 'react';

import { useGetPatientsPlansQuery } from '@entities/patient';

import { toNormalCase } from '@utils/text.util';
import { getGenderName } from '@utils/gender.util';
import { formatISOString, formatTimeISOString } from '@utils/date.util';

import { IPatientCard } from './patient-card';

const sortByDate = (dateISOA: string, dateISOB: string) => {
	const dateA = new Date(dateISOA).getTime();
	const dateB = new Date(dateISOB).getTime();

	return dateA - dateB;
};

export const useConnect = () => {
	const { data = [], isLoading, isError } = useGetPatientsPlansQuery();

	const patients: IPatientCard[] = useMemo(() => {
		const items = data.map(({ userDto: user, entries, plan }) => {
			const activityById = new Map();
			const planItems = plan?.treatmentPlanItems ?? [];

			planItems.forEach(planItem => {
				planItem?.activities.forEach(activity => {
					activityById.set(activity.id, {
						id: activity.id,
						icon: `data:image/svg;base64,${activity.icon}`,
						text: activity.name,
					});
				});
			});

			// TODO: Optimize mapping
			return {
				id: user.id,
				fullname: `${toNormalCase(user.firstName)} ${toNormalCase(user.lastName)}`,
				gender: getGenderName(user.gender),
				diagnos: user.diagnos,
				birthDate: formatISOString(user.birthDate),
				entries: entries
					? [...entries]
							.sort((a, b) => sortByDate(a.date, b.date))
							.map(entry => {
								return {
									id: entry.id,
									time: formatTimeISOString(entry.date),
									note: entry.note,
									recipes: entry.activityIds
										.map(id => activityById.get(id))
										.filter(activity => !!activity),
									keyHealthIndicators: entry.keyHealthIndicatorRates.map(r => ({
										id: r.id,
										rate: r.rate,
										name: r.keyHealthIndicator.name.split(' ').pop() ?? '',
									})),
								};
							})
					: [],
			};
		});

		return items;
	}, [data, isLoading]);

	return {
		patients,
		isError,
		isLoading,
	};
};
