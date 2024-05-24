import { useEffect, useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '@shared/model';

import { fillMissingDates } from './utils';
import { isObjectEmpty } from '@utils/object.util';
import { useLazyGetStatsForPeriodQuery } from '@app/store/entities/statistics/api/stats.api';
import { patientActions, selectCurrentPatient, selectPatientSelection } from '@app/store/entities/patient';

import type { DataPoint } from '@components/ui/charts/linear-chart/utils';
import type { HealthIndicatorRates } from '@app/store/entities/statistics/api/stats.api';
import type { KeyHealthIndicatorRate } from '@shared/lib/types';

export const useConnect = () => {
  const dispatch = useAppDispatch();
  const patient = useAppSelector(selectCurrentPatient);
  const selection = useAppSelector(selectPatientSelection);
  const [getStatsByPeriodAsync, { isLoading, isFetching }] = useLazyGetStatsForPeriodQuery();

  const lineChartData: DataPoint[] = useMemo(() => {
    const { range, keyHealthIndicator } = selection;
    const journalEntries = patient.journalEntries.filter((entry) => {
      if (entry.date < range.startDate || entry.date > range.endDate) {
        return false;
      }

      const isKeyHealthIndicatorMatch = entry.healthIndicatorRates.some(
        (k) => k.keyHealthIndicator.id === keyHealthIndicator,
      );
      return isKeyHealthIndicatorMatch;
    });

    const dataPoints: DataPoint[] = journalEntries.map((e) => ({
      id: e.id,
      date: e.date,
      rate: e.healthIndicatorRates.find((k) => k.keyHealthIndicator.id === keyHealthIndicator)?.rate ?? null,
    }));

    const filledData = fillMissingDates(dataPoints, range);
    return filledData;
  }, [patient.journalEntries, selection.keyHealthIndicator, selection.range]);

  useEffect(() => {
    const beginAction = async () => {
      if (!patient.plan?.id) {
        return;
      }

      const { data } = await getStatsByPeriodAsync({
        treatmentPlanId: patient.plan.id,
        startDate: selection.range.startDate,
        endDate: selection.range.endDate,
      });

      if (data?.khiStatistic && data?.activityKhi) {
        const khi = data.khiStatistic[selection.keyHealthIndicator];
        const activityKhi = Object.entries(data.activityKhi).reduce(
          (acc: { [key in string]: HealthIndicatorRates }, [key, value]) => {
            const [activityId, keyHealthIndicatorId] = key.split('_');
            if (selection.keyHealthIndicator === keyHealthIndicatorId) {
              acc[activityId] = value;
            }

            return acc;
          },
          {},
        );

        const isEmptyStatistics = isObjectEmpty(khi) || isObjectEmpty(activityKhi);
        const khiStatistics = !isEmptyStatistics
          ? (() => {
              const total = khi.reduce((acc, item) => acc + item, 0);
              return khi.map((value, idx) => ({
                value,
                rate: idx as unknown as KeyHealthIndicatorRate,
                percentage: total === 0 ? 20 : (value / total) * 100,
              }));
            })()
          : [];
        dispatch(
          patientActions.setStatistics({
            khiStatistics,
            activityKhi,
            relatedActivities: data?.activities,
          }),
        );
      }
    };

    beginAction();
  }, [patient, selection.range, selection.keyHealthIndicator]);

  return { isLoading: isLoading || isFetching, lineChartData };
};
