import React from 'react';
import { classes } from './index.tailwind';

const StreakIndicator: React.FC<{ streak: number }> = ({ streak }) => {
  return (
    <div className={classes.container}>
      <div className={classes.line} />
      <p className={classes.text}>{streak} continuous days</p>
    </div>
  );
};

export default StreakIndicator;
