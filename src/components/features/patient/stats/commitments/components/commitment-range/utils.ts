import { format, addDays, startOfDay, parseISO, endOfDay } from 'date-fns';

import type { RangeType } from '@components/ui/controls/date-range-picker';
import type { TCommitmentData } from '@app/store/entities/patient/model/types';

const startOfDayISO = (dateISO: string) => startOfDay(parseISO(dateISO));
const compareISOwithDate = (dateISO: string, date: Date) =>
  format(startOfDayISO(dateISO), 'd.MM') === format(date, 'd.MM');

export const fillGaps = (data: TCommitmentData[], range: RangeType) => {
  let current = startOfDayISO(range.startDate);
  const endDate = startOfDayISO(range.endDate);

  const result: TCommitmentData[] = [];

  do {
    const exist = data.find((d) => compareISOwithDate(d.date, current));
    result.push({
      date: format(current, 'd.MM'),
      moods: exist ? exist.moods : [],
    });

    current = addDays(current, 1);
  } while (current <= endDate);

  return result;
};

type TStreakGroup = {
  isStreak: boolean;
  data: TCommitmentData[];
};

export const getStreakPointsFrom = (data: TCommitmentData[]) => {
  const groups: TStreakGroup[] = [];
  let group: TStreakGroup | null = null;

  const addToGroup = (record: TCommitmentData) => {
    if (group) {
      group.data.push(record);
    }
  };

  const pushGroup = () => {
    if (group) {
      groups.push(group);
    }
    group = null;
  };

  const createGroup = (record: TCommitmentData) => {
    group = {
      isStreak: Boolean(record.moods.length),
      data: [record],
    };
  };

  data.forEach((record, idx) => {
    if (!group) {
      void createGroup(record);
      return;
    }

    const isStreak = Boolean(record.moods.length);
    if (group.isStreak === isStreak) {
      void addToGroup(record);

      const isLastIteration = data.length - 1 === idx;
      if (isLastIteration) {
        void pushGroup();
      }

      return;
    }

    void pushGroup();
    void createGroup(record);
  });

  return groups;
};
