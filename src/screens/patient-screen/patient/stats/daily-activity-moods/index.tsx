import { FC } from 'react';

import ActivityHeader from './activity-header';
import ActivityStreak from './mood-streak';

import { classes } from './index.tailwind';

interface PropsType {
  activity: string;
}

const DailyActivityMoods: FC<PropsType> = ({ activity }) => {
  return (
    <div className={classes.container}>
      <ActivityHeader activity={activity} />
      <ActivityStreak />
    </div>
  );
};

export default DailyActivityMoods;
