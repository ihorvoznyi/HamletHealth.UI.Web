import { endOfDay, parseISO } from 'date-fns';
import { createSelector } from 'reselect';

import { sortByDate } from '@utils/date.util';
import { formatGroupDateKey } from '@utils/patient.utils';

import type { RootState } from '@shared/model';
import type { JournalEntry, Patient } from './types';
import { KeyHealthIndicatorRate } from '@shared/lib/types';

export const selectCurrentPatient = ({ patientReducer }: RootState): Patient => {
  return patientReducer.current;
};

export const selectPatientEntriesGroup = createSelector(
  [(state: RootState) => state.patientReducer],
  (patientReducer) => {
    const group: JournalEntriesGroup = {};
    const {
      selection,
      current: { journalEntries },
    } = patientReducer;

    const end = endOfDay(parseISO(selection.range.endDate));
    const start = parseISO(selection.range.startDate);

    journalEntries.forEach((entry) => {
      const date = parseISO(entry.date);
      const inRange = start <= date && date <= end;
      if (!inRange) {
        return;
      }

      if (
        selection.activities.length &&
        !entry.activities.some((activity) => selection.activities.includes(activity.id))
      ) {
        return;
      }

      const key = formatGroupDateKey(entry.date);
      if (group[key]) {
        group[key].items.push(entry);
      } else {
        group[key] = { date: entry.date, items: [entry] };
      }
    });

    return Object.entries(group).sort((a, b) => sortByDate(b[1].date, a[1].date));
  },
);

export const selectPatientSelection = ({ patientReducer }: RootState) => {
  return patientReducer.selection;
};

export const selectPatientActions = ({ patientReducer }: RootState) => {
  return patientReducer.current.plan?.activities ?? [];
};

export const selectJournalEntryBy = createSelector(
  [
    (state: RootState, options: TJournalEntryFilterOptions) => ({
      options,
      patientReducer: state.patientReducer,
    }),
  ],
  ({ patientReducer, options }): JournalEntry | null => {
    const { keyHealthIndicator } = patientReducer.selection;
    const journalEntry = patientReducer.current.journalEntries.find((e) => e.id === options.id);
    if (!journalEntry) {
      return null;
    }

    return {
      ...journalEntry,
      healthIndicatorRates: journalEntry.healthIndicatorRates.filter(
        (r) => r.keyHealthIndicator.id === keyHealthIndicator,
      ),
    };
  },
);

export const selectPatientKeyHealthIndicators = ({ patientReducer }: RootState) => {
  return patientReducer.current.keyHealthIndicators;
};

export const selectPatientStatistics = ({ patientReducer }: RootState) => {
  return patientReducer.statistics;
};

export const selectPatientActivities = ({ patientReducer }: RootState) => {
  return {
    activities: patientReducer.current.plan?.activities ?? [],
    activityKhi: patientReducer.statistics.activityKhi,
  };
};

// Types
type JournalEntriesGroup = {
  [key in string]: {
    date: string;
    items: JournalEntry[];
  };
};

type TJournalEntryFilterOptions = Partial<{
  id: string;
  rate: KeyHealthIndicatorRate;
  keyHealthIndicatorIds: string[];
}>;
