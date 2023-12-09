import Filter from './filter';
import DateItem from '@screens/patient-screen/shared/date-item';

import { classes } from './index.tailwind';
import EntryCards from './entry-cards';

const Entries = () => {
  return (
    <div className={classes.container}>
      <div className={classes.filterContainer}>
        <p className={classes.paragraph}>Filter by tasks:</p>
        <div className={classes.filterBar}>
          <Filter />
          <DateItem />
        </div>
      </div>

      <EntryCards />
    </div>
  );
};

export default Entries;
