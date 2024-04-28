import { FC } from 'react';

import PrimaryButton from '@components/ui/controls/button';
import Divider from '@components/ui/common/divider';
import MoodVarieties from './mood-varieties';
import RecipesList, { RecommendedActivity } from './recipes-list';
import { ImageSvg } from '@components/ui/svg';

import { classes } from './index.tailwind';
import { KeyHealthIndicatorRate } from '@shared/lib/types';

export type HealthIndicator = {
  rate: KeyHealthIndicatorRate;
  name: string;
}

export interface JournalEntryProps {
  id: string;
  time: string;
  note: string;
  keyHealthIndicators: HealthIndicator[];
  recipes?: RecommendedActivity[] | [];
}

const JournalEntry: FC<JournalEntryProps> = ({ time, recipes, keyHealthIndicators: moods, note: text }) => {
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
