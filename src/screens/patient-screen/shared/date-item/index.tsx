import { DateSvg } from '@components/ui/svg';

import { classes } from './index.tailwind';

const DateItem = () => {
  return (
    <div className={classes.container}>
      <DateSvg className={classes.icon} />
      {/* Dynamic value */}
      <p className={classes.month}>June</p>
    </div>
  );
};

export default DateItem;