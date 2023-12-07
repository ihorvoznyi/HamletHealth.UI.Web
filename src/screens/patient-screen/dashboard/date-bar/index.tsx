import { DateSvg } from '@components/ui/icons';
import { classes } from './index.tailwind';

const DateBar = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.h2}>All entries</h2>
      <div className={classes.dateContainer}>
        <DateSvg className={classes.icon} />
        {/* Dynamic value */}
        <p className={classes.month}>June</p>
      </div>
    </div>
  );
};

export default DateBar;