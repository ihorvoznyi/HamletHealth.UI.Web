import { FC } from 'react';

import { MoodHappySvg, MoodEmptySvg } from '@components/ui/svg';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';

export type MoodType = 'great' | 'normal';

interface PropsType {
  mood: MoodType;
}

const MoodItem: FC<PropsType> = ({ mood }) => {
  switch(mood) {
    case 'great':
      return (
        <div className={cn(classes.container, 'text-[#12C28D]')}>
          <MoodHappySvg />
          <p className={classes.p}>Great</p>
          <span className={classes.span}>(Mood)</span>
        </div>
      );
      
    default:
      return (
        <div className={classes.container}>
          <MoodEmptySvg />
          <p className={classes.p}>Normal</p>
          <span className={classes.span}>(Anxiety)</span>
        </div>
      );
  }
};

export default MoodItem;
