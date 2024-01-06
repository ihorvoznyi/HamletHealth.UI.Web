import Filter from '../filter';

import { classes } from './index.tailwind';
import EntryCards from './entry-cards';

const Entries = () => {
  return (
    <div className={classes.container}>
      <Filter />
      <EntryCards />
    </div>
  );
};

export default Entries;
