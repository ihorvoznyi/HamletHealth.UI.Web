import MoodList from '@screens/patient-screen/shared/mood-card-list';

import { classes } from './index.tailwind';
import { MOOD_CARDS } from '@screens/patient-screen/dashboard/constants';

const EntryCard = () => {
  return (
    <div className={classes.container}>
      <div className={classes.dateContainer}>
        <h2 className={classes.day}>Jun 5</h2>
        <p className={classes.weekday}>Tue</p>
      </div>
      
      <MoodList items={MOOD_CARDS} />
    </div>
  );
};

export default EntryCard;