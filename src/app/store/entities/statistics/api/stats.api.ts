import { api } from '@app/store/app';
import { ApiResponse, KeyHealthIndicatorRate } from '@shared/lib/types';
import { ActivityDto } from '../../treatment';

const injectedStatsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getStatsForPeriod: builder.query<GetTreatmentStatsForPeriodResponse, GetTreatmentStatsForPeriodArg>({
      query: (arg) => ({
        url: `/statistics/dates/${arg.treatmentPlanId}/${arg.startDate}/${arg.endDate}`,
      }),
      transformResponse: (response: ApiResponse<GetTreatmentStatsForPeriodResponse>) => response.Data,
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
  activities: ActivityDto[];
  modifiedStatistics: ModifiedStatisticDto;
};

// DTOs
export type ActivityKhiDto = {
  [key in KeyPattern]: HealthIndicatorRates;
};

export type KhiStatisticDto = {
  [key in string]: HealthIndicatorRates;
};

export type ModifiedStatisticDto = {
  [key in string]: {
    [key in string]: {
      [key in DateKey]: Record<KeyHealthIndicatorRate, number>;
    };
  };
};

export type DateKey = string;
export type KeyPattern = `${string}_${string}`;
export type HealthIndicatorRates = [number, number, number, number, number];
