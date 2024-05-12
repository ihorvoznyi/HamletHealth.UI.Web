import { FC } from 'react';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';
import type { Activity } from '@app/store/entities/patient/model/types';

interface PropsType {
  activities: Activity[];
}

const RecipesList: FC<PropsType> = ({ activities }) => (
  <ul className={classes.container}>
    {activities.map(({ id, icon, name }, idx) => (
      <li
        key={id}
        className={cn(
          classes.item,
          idx !== activities.length - 1 && classes.sep
        )}
      >
        <img src={icon} alt={name} className="w-5 h-5" />
        {name}
      </li>
    ))}
  </ul>
);

export default RecipesList;
