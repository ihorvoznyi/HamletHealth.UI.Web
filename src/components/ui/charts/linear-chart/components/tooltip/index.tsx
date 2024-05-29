import React from 'react';

import JournalEntry from '@components/ui/common/journal-entries-carousel/mood-card';

import type { DataPoint } from '../../utils';
import type { TooltipProps } from 'recharts';

type TJournalTooltipProps = TooltipProps<string, number> & {
  journalEntries: JournalEntry[] | null;
  keyHealthIndicator: string;
};

const JournalTooltip: React.FC<TJournalTooltipProps> = ({ payload, active, journalEntries, keyHealthIndicator }) => {
  if (!active || !payload || !payload.length) {
    return null;
  }

  const exist = payload?.[0].payload as DataPoint | null;
  if (!exist?.id) {
    return null;
  }

  if (!keyHealthIndicator || !journalEntries) {
    return null;
  }

  const journalEntry = findJournalEntry(journalEntries, keyHealthIndicator, exist.id);
  if (!journalEntry) {
    return null;
  }

  return (
    <div className="custom-tooltip">
      <JournalEntry {...journalEntry} />
    </div>
  );
};

export default JournalTooltip;

const findJournalEntry = (journalEntries: JournalEntry[], keyHealthIndicator: string, id: string) => {
  const journalEntry = journalEntries.find((e) => e.id === id);
  if (!journalEntry) {
    return null;
  }

  return {
    ...journalEntry,
    healthIndicatorRates: journalEntry.healthIndicatorRates.filter(
      (r) => r.keyHealthIndicator.id === keyHealthIndicator,
    ),
  };
};
