import { FC } from 'react';

import { cn } from '@utils/style.util';
import { classes } from '../index.tailwind';
import { StageStatusType } from '@entities/patient';

interface PropsType {
  isActive: boolean;
  status: StageStatusType;
  position: 'left' | 'center' | 'right';
}

const StageCircle: FC<PropsType> = ({ position, status, isActive }) => {
  const mapStyle = (stage: StageStatusType) => {
    if (isActive) {
      return status === 'filled' 
        ? classes.circle.filled
        : classes.circle.active;
    }

    switch (stage) {
      case 'filled':
        return classes.circle.filled;
      case 'checked':
        return classes.circle.checked;
      case 'unchecked':
        return classes.circle.unchecked;
    }
  };

  return <div className={cn(classes.circle.base, classes.circle[position], mapStyle(status))} />;
};

export default StageCircle;
