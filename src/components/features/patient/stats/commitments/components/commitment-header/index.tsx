import React from 'react';
import { MoodType } from '@shared/lib/types';

interface PropsType {
  activity: string;
  streaks: Array<{ mood: MoodType; streak: number }>;
}

const CommitmentHeader: React.FC<PropsType> = ({ activity, streaks }) => {
  return <div>CommitmentHeader</div>;
};

export default CommitmentHeader;
