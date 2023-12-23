import { FC } from 'react';

import { MoodType } from '@shared/lib/interfaces';

import { toNormalCase } from '@utils/text.util';
import { getMoodComponent } from '@utils/mood.util';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';

interface PropsType {
  mood: MoodType;

  color: string;
  width: number;
  height: number;

  styles?: Partial<{ text: string }>
  
  onClick: () => void;
}

const MoodSvg: FC<PropsType> = ({ mood, styles, ...props}) => {
  const MoodComponent = getMoodComponent(mood)!;

  return (
    <div className={classes.container}>
      <MoodComponent {...props} />
      <p className={cn(classes.text, styles?.text)}>{toNormalCase(mood)}</p>
    </div>
  );
};

export default MoodSvg;