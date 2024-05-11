import React from 'react';

import JorunalEntriesCarousel from '@components/ui/common/journal-entries-carousel';

import { classes } from './index.tailwind';
import { JournalEntry } from '@app/store/entities/patient/model/types';

interface PropsType {
  day: string;
  weekday: string;
  journalEntries: JournalEntry[]
}

const EntryCard: React.FC<PropsType> = ({ day, weekday, journalEntries }) => {
  return (
    <div className={classes.container}>
      <div className={classes.dateContainer}>
        <h2 className={classes.day}>{day}</h2>
        <p className={classes.weekday}>{weekday}</p>
      </div>
      
      <JorunalEntriesCarousel entries={journalEntries} />
    </div>
  );
};

export default EntryCard;