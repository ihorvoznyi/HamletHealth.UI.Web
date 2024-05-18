import { MoodType } from '@shared/lib/types';
import type { TCommitmentRangeProps } from './index';

type CommitmentPoint = {
  isStreak: boolean;
  days: Array<{ date: string; moods: MoodType[]; isCompleted: boolean }>;
};

export const getStreakPointsFrom = (props: TCommitmentRangeProps['data']): CommitmentPoint[] => {
  return [];
};
