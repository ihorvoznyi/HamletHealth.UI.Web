import { FC, ReactElement } from 'react';
import { classes } from './index.tailwind';

export type recipeType = {
  Icon: ReactElement;
  text: string;
}

interface PropsType {
  recipes: recipeType[];
}

const RecipesList: FC<PropsType> = ({ recipes }) => (
  <ul className={classes.container}>
    {recipes.map((recipe, idx) => (
      <>
        <li key={recipe.text} className={classes.item}>{recipe.text}</li>
        {idx !== recipes.length - 1 ? <div className={classes.sep} /> : null}
      </>
    ))}
  </ul>
);

export default RecipesList;
