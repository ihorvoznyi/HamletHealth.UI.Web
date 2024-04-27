import React from 'react';

import { DateSvg } from '@components/ui/svg';

import { classes } from './index.tailwind';

interface PropsType {
  date: string
}

const DateItem: React.FC<PropsType> = ({ date }) => {
  return (
    <div className={classes.container}>
      <DateSvg className={classes.icon} />
      <p className={classes.month}>{date}</p>
    </div>
  );
};

export default DateItem;