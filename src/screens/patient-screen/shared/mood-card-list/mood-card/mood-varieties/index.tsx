import { FC } from 'react';
import MoodItem, { MoodType } from '../mood-item';

import { classes } from './index.tailwind';

interface PropsType {
  moods: MoodType[];
}

const MoodVarieties: FC<PropsType> = ({ moods }) => {
  return (
    <div className={classes.container}>
      {moods.map(mood => <MoodItem key={mood} mood={mood} />)}
    </div>
  );
};

export default MoodVarieties;