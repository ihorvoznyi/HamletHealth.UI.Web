import EntryCard from './entry-card';

import { classes } from './index.tailwind';

const EntryCards = () => {
  return (
    <ul className={classes.container}>
      {/* TODO: Intergrate with BE data */}
      <EntryCard />
      <EntryCard />
      <EntryCard />
      <EntryCard />
    </ul>
  );
};

export default EntryCards;