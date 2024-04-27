import { MoodType, RecordOf } from '@shared/lib/types';
import { IDayHit } from './interfaces';

export const groupByMood = (days: IDayHit[]) => {
  const group: RecordOf<MoodType, number> = {
    great: 0,
    good: 0,
    meh: 0,
    bad: 0,
    awful: 0
  };

  days.forEach(day => {
    if (day.isDone) {
      ++group[day.mood];
    }
  });

  const entries = Object.entries(group) as [MoodType, number][];

  return entries.sort((a, b) => b[1] - a[1]);
};

export const getMoodColor = (mood: MoodType): string => {
  const colors: RecordOf<MoodType, string> = {
    great: '#12C28D',
    good: '#34BAE4',
    meh: '#595959',
    bad: '#EF7650',
    awful: '#FF0000'
  };

  return colors[mood];
};
