import React, { useMemo } from 'react';

import { getStreakPointsFrom } from './utils';

import type { MoodType } from '@shared/lib/types';

export interface TCommitmentRangeProps {
  data: Array<{ mood: MoodType; date: string }>;
}

const CommitmentRange: React.FC<TCommitmentRangeProps> = ({ data }) => {
  const streakPoints = useMemo(() => getStreakPointsFrom(data), [data]);
  return <ul></ul>;
};

export default CommitmentRange;
