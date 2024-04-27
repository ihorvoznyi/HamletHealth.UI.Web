import { FC, ElementType } from 'react';

import { ISvgProps } from '@shared/lib/types';

import { classes } from './index.tailwind';

export interface IActivity {
  Icon: ElementType<ISvgProps>;
  text: string;
  times: number;
  percentage: number;
}

const Activity: FC<IActivity> = ({ Icon, text, percentage, times }) => {
  return (
    <div className={classes.container}>
      <Icon width={32} height={32} />
      <p className={classes.text}>{text}</p>
      <span className={classes.span}>{percentage}% ({times}X)</span>
    </div>
  );
};

export default Activity;