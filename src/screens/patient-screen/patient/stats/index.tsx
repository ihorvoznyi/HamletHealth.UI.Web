import Chart from './chart';
import RelatedActivities from './related-activities';

import { classes } from './index.tailwind';

const Stats = () => {
  return (
    <div className={classes.container}>
      <Chart />
      <RelatedActivities />
    </div>
  );
};

export default Stats;