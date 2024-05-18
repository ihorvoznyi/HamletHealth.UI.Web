import { useEffect } from 'react';

import { MoodMehSvg, MoodGoodSvg, MoodBadSvg, MoodAwfulSvg, MoodGreatSvg } from '@components/ui/svg';

import { useAppDispatch, useAppSelector } from '@shared/model';
import { HealthIndicatorRates, useLazyGetStatsForPeriodQuery } from '@app/store/entities/statistics/api/stats.api';
import { patientActions, selectCurrentPatient, selectPatientSelection } from '@app/store/entities/patient';
import { isObjectEmpty } from '@utils/object.util';
import { KeyHealthIndicatorRate } from '@shared/lib/types';

export const khiVisualizationMap = {
  0: { color: '#595959', MoodSvg: MoodMehSvg },
  1: { color: '#34BAE4', MoodSvg: MoodGoodSvg },
  2: { color: '#EF7650', MoodSvg: MoodBadSvg },
  3: { color: '#F00000', MoodSvg: MoodAwfulSvg },
  4: { color: '#12C28D', MoodSvg: MoodGreatSvg },
};

export const useConnect = () => {
  const dispatch = useAppDispatch();
  const patient = useAppSelector(selectCurrentPatient);
  const selection = useAppSelector(selectPatientSelection);
  const [getStatsByPeriodAsync, { isLoading, isFetching }] = useLazyGetStatsForPeriodQuery();

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
        console.info('here');
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

  return { isLoading: isLoading || isFetching };
};
