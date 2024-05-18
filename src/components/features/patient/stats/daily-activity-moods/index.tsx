import { FC } from 'react';

import ActivityStreakLine from './mood-streak';
import ActivityHeader from './activity-header';

import { classes } from './index.tailwind';

interface PropsType {
  activity: string;
}

const ActivityStreak: FC<PropsType> = ({ activity }) => {
  return (
    <div className={classes.container}>
      <ActivityHeader activity={activity} />
      <ActivityStreakLine />
    </div>
  );
};

export default ActivityStreak;
