import DateItem from '@screens/patient-screen/shared/date-item';
import { classes } from './index.tailwind';

const DateBar = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.h2}>All entries</h2>
      <DateItem />
    </div>
  );
};

export default DateBar;