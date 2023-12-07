import { FC, ReactElement } from 'react';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';

export type RecipeType = {
  Icon: ReactElement;
  text: string;
}

interface PropsType {
  recipes: RecipeType[];
}

const RecipesList: FC<PropsType> = ({ recipes }) => (
  <ul className={classes.container}>
    {recipes.map(({ Icon, text }, idx) => (
      <li
        key={text}
        className={cn(
          classes.item,
          idx !== recipes.length - 1 && classes.sep
        )}
      >
        {Icon}
        {text}
      </li>
    ))}
  </ul>
);

export default RecipesList;
