import React from 'react';

import CommitmentRange from '../commitment-range';
import CommitmentHeader from '../commitment-header';

import type { MoodType } from '@shared/lib/types';
import type { TCommitmentRangeProps } from '../commitment-range';

import { classes } from './index.tailwind';

interface PropsType {
  activity: string;
  streaks: Array<{ mood: MoodType; streak: number }>;
  commitmentRange: TCommitmentRangeProps;
}

const CommitmentCard: React.FC<PropsType> = ({ activity, streaks }) => {
  return (
    <div className={classes.container}>
      <CommitmentHeader activity={activity} streaks={streaks} />
      <CommitmentRange data={[]} />
    </div>
  );
};

export default CommitmentCard;
