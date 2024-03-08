import React from 'react';

import { PlusSvg } from '@components/ui/svg';
import PrimaryButton from '@components/ui/button';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';

const ActivityItem: React.FC<{ id: string; name: string; category: number; }> = ({ id, name, category }) => {
  const isActivity = category === 0;

  return (
    <li className={classes.container}>
      <div className={classes.contentContainer}>
        <p className={classes.name}>{name}</p>
        <span className={cn(
            classes.type, 
            isActivity ? 'text-vivid-cerulean' : 'text-orange'
          )}
        >{isActivity ? 'Activity' : 'Medicine'}</span>
      </div>

      <PrimaryButton styles={classes.btn} type="outlined" onClick={() => {}}>
        <PlusSvg className={classes.icon.width} color={classes.icon.color} />
        <span className={classes.btnText}>Add</span>
      </PrimaryButton>
    </li>
  );
};

export default ActivityItem;
