import { DateItem } from '@components/ui/common';

import { classes } from './index.tailwind';

const DateBar = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.h2}>All entries</h2>
      <DateItem date="June" />
    </div>
  );
};

export default DateBar;