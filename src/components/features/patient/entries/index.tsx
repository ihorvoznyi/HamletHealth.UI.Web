import Filter from '../filter';
import EntryCards from './entry-cards';

import { classes } from './index.tailwind';

const PatientEntries = () => {
  return (
    <div className={classes.container}>
      <Filter />
      <EntryCards />
    </div>
  );
};

export default PatientEntries;
