import { parseISO, differenceInDays, startOfDay, addDays } from 'date-fns';

import { mapRate, type DataPoint } from '@components/ui/charts/linear-chart/utils';
import type { RangeType } from '@components/ui/controls/date-range-picker';
import type { KeyHealthIndicatorRate } from '@shared/lib/types';

export const fillMissingDates = (data: DataPoint[], range: RangeType): DataPoint[] => {
  if (data.length === 0) return data;

  const processedData: DataPoint[] = [];

  const startDate = parseISO(range.startDate);
  const endDate = parseISO(range.endDate);
  const diffDays = differenceInDays(endDate, startDate);

  let currentIntervalPoint = startDate;

  for (let i = 0; i <= diffDays; i++) {
    const exist = data.find(
      (x) => startOfDay(parseISO(x.date)).toISOString() === startOfDay(currentIntervalPoint).toISOString(),
    );

    if (exist) {
      processedData.push({
        id: exist.id,
        date: exist.date,
        // reverse rate values for line chart
        rate: mapRate(exist.rate as KeyHealthIndicatorRate),
      });
    } else {
      processedData.push({
        date: currentIntervalPoint.toISOString(),
        rate: null,
      });
    }

    currentIntervalPoint = addDays(currentIntervalPoint, 1);
  }

  return processedData.sort((a, b) => parseISO(a.date).getTime() - parseISO(b.date).getTime());
};
