import { FC } from 'react';

import Button from '@components/ui/button';
import Devider from '@components/ui/devider';
import MoodVarieties from './mood-varieties';
import RecipesList, { RecipeType } from './recipes-list';
import { ImageSvg } from '@components/ui/icons';

import { classes } from './index.tailwind';
import { MoodType } from './mood-item';

export interface IMoodCard {
  id: string;
  time: string;
  text: string;
  moods: MoodType[];
  recipes: RecipeType[];
}

const MoodCard: FC<IMoodCard> = ({ time, recipes, moods, text }) => {
  return (
    <div className={classes.container}>
      <p className={classes.time}>{time}</p>
      <Devider />

      <MoodVarieties moods={moods} />
      <Devider />
      
      <RecipesList recipes={recipes} />
      <Devider />

      <p className={classes.moodText}>{text}</p>
      <Button onClick={() => {}} styles={classes.btn}>
        <ImageSvg />
        Image
      </Button>
    </div>
  );
};

export default MoodCard;
