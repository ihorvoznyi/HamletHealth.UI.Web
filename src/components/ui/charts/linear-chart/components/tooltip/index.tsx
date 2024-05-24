import React from 'react';

import JournalEntry from '@components/ui/common/journal-entries-carousel/mood-card';
import { useAppSelector } from '@shared/model';

import { selectJournalEntryBy } from '@app/store/entities/patient';

import type { DataPoint } from '../../utils';
import type { TooltipProps } from 'recharts';

type TJournalTooltipProps = TooltipProps<string, number>;

const JournalTooltip: React.FC<TJournalTooltipProps> = ({ payload }) => {
  const exist = payload?.[0]?.payload as DataPoint | null;
  if (!exist?.id) {
    return;
  }

  const journalEntry = useAppSelector((state) => selectJournalEntryBy(state, { id: exist.id }));
  if (!journalEntry) {
    return null;
  }

  return <JournalEntry {...journalEntry} />;
};

export default JournalTooltip;
