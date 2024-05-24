import { FC } from 'react';

import PrimaryButton from '@components/ui/controls/button';
import Divider from '@components/ui/common/divider';
import MoodVarieties from './mood-varieties';
import RecipesList from './recipes-list';
import { ImageSvg } from '@components/ui/svg';

import type { JournalEntry } from '@app/store/entities/patient/model/types';

import { classes } from './index.tailwind';
import { cn } from '@utils/style.util';

type TJournalEntryProps = {
  styles?: Partial<{
    container: string;
  }>;
} & JournalEntry;

const JournalEntry: FC<TJournalEntryProps> = ({
  note,
  time,
  styles,
  activities,
  healthIndicatorRates: keyHealthIndicators,
}) => {
  return (
    <div className={cn(classes.container, styles?.container)}>
      <p className={classes.time}>{time}</p>
      <Divider />

      <MoodVarieties moods={keyHealthIndicators} />
      <Divider />

      <RecipesList activities={activities} />
      <Divider />

      <p className={classes.moodText}>{note}</p>
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
