import Chart from './chart';
import Filter from '../filter';
import RelatedActivities from './related-activities';
import DailyActivityMoods from './daily-activity-moods';

import { ACTIVITY_STREAKS } from './daily-activity-moods/constants';

import { classes } from './index.tailwind';

const Stats = () => {
  return (
    <div className={classes.container}>
      <Filter />
      
      <div className={classes.streaks}>
        {ACTIVITY_STREAKS.map(({ activity }) => <DailyActivityMoods key={activity} activity={activity} />)}
      </div>

      <div className={classes.chart}>
        <Chart />
        <RelatedActivities />
      </div>
    </div>
  );
};

export default Stats;