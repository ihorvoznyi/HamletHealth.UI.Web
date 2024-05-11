import { FC } from 'react';

import PrimaryButton from '@components/ui/controls/button';
import Divider from '@components/ui/common/divider';
import MoodVarieties from './mood-varieties';
import RecipesList from './recipes-list';
import { ImageSvg } from '@components/ui/svg';

import type { JournalEntry } from '@app/store/entities/patient/model/types';

import { classes } from './index.tailwind';

const JournalEntry: FC<JournalEntry> = ({ time, recipes, keyHealthIndicators: moods, note: text }) => {
  return (
    <div className={classes.container}>
      <p className={classes.time}>{time}</p>
      <Divider />

      <MoodVarieties moods={moods} />
      <Divider />
      
      <RecipesList recipes={recipes ?? []} />
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

export default JournalEntry;
