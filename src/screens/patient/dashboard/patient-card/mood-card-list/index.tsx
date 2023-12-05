import MoodCard from '../mood-card';
import { classes } from './index.tailwind';

const MoodList = () => {
  return (
    <div className={classes.container}>
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
    </div>
  );
};

export default MoodList;