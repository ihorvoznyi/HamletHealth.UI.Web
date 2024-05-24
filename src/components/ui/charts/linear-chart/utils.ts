import { parseISO, format, formatISO, addDays, differenceInDays, startOfDay } from 'date-fns';
import { MoodMehSvg, MoodGoodSvg, MoodBadSvg, MoodAwfulSvg, MoodGreatSvg } from '@components/ui/svg';
import { KeyHealthIndicatorRate } from '@shared/lib/types';

export const formatXAxisLabel = (label: string): string => {
  const date = parseISO(label);
  return format(date, 'd.MM');
};

export type DataPoint = {
  date: string;
  rate: number | null;
} & { id?: string };

export const khiVisualizationMap = {
  0: { color: '#595959', MoodSvg: MoodMehSvg },
  1: { color: '#34BAE4', MoodSvg: MoodGoodSvg },
  2: { color: '#EF7650', MoodSvg: MoodBadSvg },
  3: { color: '#F00000', MoodSvg: MoodAwfulSvg },
  4: { color: '#12C28D', MoodSvg: MoodGreatSvg },
};

export const mapRate = (value: KeyHealthIndicatorRate | null): KeyHealthIndicatorRate | null => {
  if (value === null) {
    return null;
  }

  return {
    0: 4 as KeyHealthIndicatorRate,
    1: 3 as KeyHealthIndicatorRate,
    2: 2 as KeyHealthIndicatorRate,
    3: 1 as KeyHealthIndicatorRate,
    4: 0 as KeyHealthIndicatorRate,
  }[value];
};
