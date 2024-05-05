import { FC } from 'react';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';

export type RecommendedActivity = {
  id: string;
  icon: string;
  text: string;
}

interface PropsType {
  recipes: RecommendedActivity[];
}

const RecipesList: FC<PropsType> = ({ recipes }) => (
  <ul className={classes.container}>
    {recipes.map(({ icon, text }, idx) => (
      <li
        key={text}
        className={cn(
          classes.item,
          idx !== recipes.length - 1 && classes.sep
        )}
      >
        <img src={icon} alt={text} className="w-5 h-5" />
        {text}
      </li>
    ))}
  </ul>
);

export default RecipesList;
