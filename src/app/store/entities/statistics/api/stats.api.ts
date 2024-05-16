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

export const { useGetStatsForPeriodQuery, useLazyGetStatsForPeriodQuery } = injectedStatsApi;

export type GetTreatmentStatsForPeriodArg = {
	treatmentPlanId: string;
	startDate: string;
	endDate: string;
};
export type GetTreatmentStatsForPeriodResponse = {
	journalEntries: [];
	activityStatistic: object;
	activityKhi: ActivityKhiDto;
	khiStatistic: KhiStatisticDto;
	activities: [];
	modifiedStatistics: object;
};

// DTOs
export type ActivityKhiDto = {
	[key in KeyPattern]: HealthIndicatorRates;
}

export type KhiStatisticDto = {
	[key in string]: HealthIndicatorRates;
}

export type KeyPattern = `${string}_${string}`
export type HealthIndicatorRates = [number, number, number, number, number];
