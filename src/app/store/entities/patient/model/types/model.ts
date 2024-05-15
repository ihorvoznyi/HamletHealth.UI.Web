import { RangeType } from '@components/ui/controls/date-range-picker';
import { KeyHealthIndicatorRate } from '@shared/lib/types';

export type PatientState = {
  current: Patient;
  selection: PatientSelection;
}

export type Patient = {
  id: string;
  firstName: string;
	lastName: string;
	fullname: string;
  birthDate?: string;
  gender: string;
  plan: TreatmentPlan | null
  journalEntries: JournalEntry[]
}

export type HealthIndicatorRate = {
  id: string;
  rate: KeyHealthIndicatorRate;
  keyHealthIndicator: KeyHealthIndicator;
}

export type KeyHealthIndicator = {
  id: string;
  name: string;
}

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
}

export type Medication = {
  id: string;
  code: string;
  name: string;
  dosage: string;
}

export type TreatmentPlan = {
  id: string
  name: string
  goal: string
  diagnos: string
  medications: Medication[]
  activities: Activity[];
}

export type PatientSelection = {
  range: RangeType;
  activities: string[];
  keyHealthIndicator: string;
}
