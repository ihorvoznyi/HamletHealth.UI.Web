import Button from '@components/ui/button';
import Devider from '@components/ui/devider';
import MoodVarieties from './mood-varieties';
import RecipesList from './recipes-list';
import { BedSvg, ImageSvg, PizzaSvg, SyropSvg } from '@components/ui/icons';

import { classes } from './index.tailwind';

const MoodCard = () => {
  return (
    <div className={classes.container}>
      <p className={classes.time}>14:14</p>
      <Devider />

      <MoodVarieties moods={['great', 'normal']} />
      <Devider />
      
      <RecipesList recipes={recipes} />
      <Devider />

      <p className={classes.moodText}>I&rsquo;m having a great day. I feel positive!</p>
      <Button onClick={() => {}} styles={classes.btn}>
        <ImageSvg />
        Image
      </Button>
    </div>
  );
};

export default MoodCard;

const recipes = [
  {
    Icon: <BedSvg />,
    text: 'Sleep early'
  },
  {
    Icon: <SyropSvg />,
    text: 'Omindon 8mg'
  },
  {
    Icon: <PizzaSvg />,
    text: 'Fast food'
  },
];