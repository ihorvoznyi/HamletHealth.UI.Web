import type { PayloadAction } from '@reduxjs/toolkit';
import type { Patient, PatientSelection } from './model';
import type { RangeType } from '@components/ui/controls/date-range-picker';

export type SetCurrentPatientPayload = PayloadAction<Patient>
export type SetDateRangePayload = PayloadAction<RangeType>
export type SetSelectionPayload = PayloadAction<Partial<PatientSelection>>
export type SetKeyHealthIndicatorPayload = PayloadAction<Partial<string>>