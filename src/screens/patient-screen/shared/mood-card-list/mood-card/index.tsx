import { FC } from 'react';

import PrimaryButton from '@components/ui/button';
import Divider from '@components/ui/divider';
import MoodVarieties from './mood-varieties';
import RecipesList, { RecipeType } from './recipes-list';
import { ImageSvg } from '@components/ui/svg';

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
      <Divider />

      <MoodVarieties moods={moods} />
      <Divider />
      
      <RecipesList recipes={recipes} />
      <Divider />

      <p className={classes.moodText}>{text}</p>
      <div className={classes.btnContainer}>
        <PrimaryButton onClick={() => {}} styles={classes.btn}>
          <ImageSvg />
          Image
        </PrimaryButton>
      </div>
    </div>
  );
};

export default MoodCard;
