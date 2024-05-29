import { ActivityKhiDto } from '@app/store/entities/statistics/api/stats.api';
import { ActivityDto } from '@app/store/entities/treatment';
import type { RangeType } from '@components/ui/controls/date-range-picker';
import type { KeyHealthIndicatorRate } from '@shared/lib/types';

export type PatientState = {
  current: Patient;
  selection: PatientSelection;
  statistics: Statistics;
};

export type Patient = {
  id: string;
  firstName: string;
  lastName: string;
  fullname: string;
  birthDate?: string;
  gender: string;
  plan: TreatmentPlan | null;
  journalEntries: JournalEntry[];
  keyHealthIndicators: KeyHealthIndicator[];
};

export type HealthIndicatorRate = {
  id: string;
  rate: KeyHealthIndicatorRate;
  keyHealthIndicator: KeyHealthIndicator;
};

export type KeyHealthIndicator = {
  id: string;
  name: string;
};

export interface JournalEntry {
  id: string;
  time: string;
  note: string;
  date: string;
  activities: Activity[] | [];
  healthIndicatorRates: HealthIndicatorRate[];
}

export type Activity = {
  id: string;
  icon: string;
  name: string;
};

export type Medication = {
  id: string;
  code: string;
  name: string;
  dosage: string;
};

export type TreatmentPlan = {
  id: string;
  name: string;
  goal: string;
  diagnos: string;
  medications: Medication[];
  activities: Activity[];
};

export type PatientSelection = {
  range: RangeType;
  activities: string[];
  keyHealthIndicator: string;
};

export type Statistics = {
  khiStatistics: KhiStatisticsItem[];
  activityKhi: ActivityKhiDto;
  relatedActivities: ActivityDto[];
  commitments: TCommitment[];
};

export type TCommitment = {
  id: string; // activity ID
  activity: string; // activity name
  data: TCommitmentData[];
};

export type TCommitmentData = {
  date: string;
  moods: Array<{ rate: KeyHealthIndicatorRate; count: number }>; // mood identificator: count
};

export type KhiStatisticsItem = {
  value: number;
  percentage: number;
  rate: KeyHealthIndicatorRate;
};
