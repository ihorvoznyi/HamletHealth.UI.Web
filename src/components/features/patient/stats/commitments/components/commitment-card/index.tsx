import React from 'react';

import CommitmentRange from '../commitment-range';
import CommitmentHeader from '../commitment-header';

import type { KeyHealthIndicatorRate } from '@shared/lib/types';

import { classes } from './index.tailwind';
import { TCommitmentData } from '@app/store/entities/patient/model/types';

interface PropsType {
  activity: string;
  data: TCommitmentData[];
}

const CommitmentCard: React.FC<PropsType> = ({ activity, data }) => {
  if (data.length === 0) {
    return;
  }

  return (
    <div className={classes.container}>
      <CommitmentHeader activity={activity} data={data} />
      <CommitmentRange data={[]} />
    </div>
  );
};

export default CommitmentCard;
