import JorunalEntriesCarousel from '@components/ui/common/mood-card-list';

import { classes } from './index.tailwind';

const EntryCard = () => {
  return (
    <div className={classes.container}>
      <div className={classes.dateContainer}>
        <h2 className={classes.day}>Jun 5</h2>
        <p className={classes.weekday}>Tue</p>
      </div>
      
      <JorunalEntriesCarousel entries={[]} />
    </div>
  );
};

export default EntryCard;