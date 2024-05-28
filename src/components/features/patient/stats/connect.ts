import { useEffect, useMemo } from 'react';
import { isAfter, isBefore, parseISO, endOfDay } from 'date-fns';

import { useAppDispatch, useAppSelector } from '@shared/model';

import { isObjectEmpty } from '@utils/object.util';
import { useLazyGetStatsForPeriodQuery } from '@app/store/entities/statistics/api/stats.api';
import { patientActions, selectCurrentPatient, selectPatientSelection } from '@app/store/entities/patient';

import { mapRate, type DataPoint } from '@components/ui/charts/linear-chart/utils';
import type { HealthIndicatorRates } from '@app/store/entities/statistics/api/stats.api';
import type { KeyHealthIndicatorRate } from '@shared/lib/types';
import { RangeType } from '@components/ui/controls/date-range-picker';
import { sortByDate } from '@utils/date.util';

const withinRange = (date: string, range: RangeType) => {
  const entryDate = parseISO(date);
  const startDate = parseISO(range.startDate);
  const endDate = endOfDay(parseISO(range.endDate));

  const isWithinRange = !isBefore(entryDate, startDate) && !isAfter(entryDate, endDate);
  return isWithinRange;
};

export const useConnect = () => {
  const dispatch = useAppDispatch();
  const patient = useAppSelector(selectCurrentPatient);
  const selection = useAppSelector(selectPatientSelection);
  const [getStatsByPeriodAsync, { isLoading, isFetching }] = useLazyGetStatsForPeriodQuery();

  const lineChartData: DataPoint[] = useMemo(() => {
    const { range, keyHealthIndicator } = selection;

    const dataPoints = patient.journalEntries.reduce((acc: DataPoint[], entry) => {
      if (!withinRange(entry.date, range)) {
        return acc;
      }

      const keyHealthIndicatorRate = entry.healthIndicatorRates.find(
        (k) => k.keyHealthIndicator.id === keyHealthIndicator,
      );

      if (keyHealthIndicatorRate) {
        const dataPoint: DataPoint = {
          id: entry.id,
          date: entry.date,
          rate: mapRate(keyHealthIndicatorRate.rate),
        };

        acc.push(dataPoint);
      }

      return acc;
    }, []);

    return dataPoints.sort((a, b) => sortByDate(a.date, b.date));
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
