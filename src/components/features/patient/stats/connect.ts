import { useEffect } from "react";

import {
  MoodMehSvg,
  MoodGoodSvg,
  MoodBadSvg,
  MoodAwfulSvg,
  MoodGreatSvg,
} from "@components/ui/svg";

import { useAppDispatch, useAppSelector } from "@shared/model";
import { useLazyGetStatsForPeriodQuery } from "@app/store/entities/statistics/api/stats.api";
import {
  patientActions,
  selectCurrentPatient,
  selectPatientSelection,
} from "@app/store/entities/patient";
import { KeyHealthIndicator } from "@app/store/entities/patient/model/types";

export const khiVisualizationMap = {
  0: { color: "#595959", MoodSvg: MoodMehSvg },
  1: { color: "#34BAE4", MoodSvg: MoodGoodSvg },
  2: { color: "#EF7650", MoodSvg: MoodBadSvg },
  3: { color: "#F00000", MoodSvg: MoodAwfulSvg },
  4: { color: "#12C28D", MoodSvg: MoodGreatSvg },
};

export const useConnect = () => {
  const dispatch = useAppDispatch();
  const patient = useAppSelector(selectCurrentPatient);
  const { range, keyHealthIndicator } = useAppSelector(selectPatientSelection);
  const [getStatsByPeriodAsync, { isLoading }] =
    useLazyGetStatsForPeriodQuery();

  useEffect(() => {
    const beginAction = async () => {
      if (!patient.plan?.id) {
        return;
      }

      const { data } = await getStatsByPeriodAsync({
        treatmentPlanId: patient.plan.id,
        startDate: range.startDate.toISOString(),
        endDate: range.endDate.toISOString(),
      });
      if (data?.khiStatistic && data?.activityKhi) {
        const khi = data.khiStatistic[keyHealthIndicator];
        const activityKhiEntries = Object.entries(data.activityKhi).filter(
          ([key, value]) => key.includes(keyHealthIndicator)
        );
        const activities = data?.activities;
        if (khi && activityKhiEntries.length > 0) {
          const activityKhi = activityKhiEntries.reduce((acc, [key, value]) => {
            const newKey = key.split("_")[0];
            acc[newKey] = value;
            return acc;
          }, {});
          const total = khi.reduce((acc, item) => acc + item, 0);
          const khiStatistics = khi.map((value, idx) => ({
            value,
            rate: idx as unknown as KeyHealthIndicator,
            percentage: total === 0 ? 20 : (value / total) * 100,
          }));

          dispatch(
            patientActions.setStatistics({
              khiStatistics,
              activityKhi,
              activities,
            })
          );
        }
      }
    };

    beginAction();
  }, [patient, range]);

  return { isLoading };
};
