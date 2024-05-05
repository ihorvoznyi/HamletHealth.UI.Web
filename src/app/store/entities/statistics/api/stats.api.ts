import { api } from '@app/store/app';
import { ApiResponse } from '@shared/lib/types';

const injectedStatsApi = api.injectEndpoints({
	endpoints: builder => ({
		getStatsForPeriod: builder.query<
			GetTreatmentStatsForPeriodResponse,
			GetTreatmentStatsForPeriodArg
		>({
			query: arg => ({
				url: `/statistics/dates/${arg.treatmentPlanId}/${arg.startDate}/${arg.endDate}`,
			}),
			transformResponse: (response: ApiResponse<GetTreatmentStatsForPeriodResponse>) =>
				response.Data,
		}),
	}),
});

export const { useGetStatsForPeriodQuery } = injectedStatsApi;

export type GetTreatmentStatsForPeriodArg = {
	treatmentPlanId: string;
	startDate: string;
	endDate: string;
};
export type GetTreatmentStatsForPeriodResponse = {
	journalEntries: [];
	activityStatistic: object;
	activityKhi: object;
	khiStatistic: object;
	activities: [];
	modifiedStatistics: object;
};
