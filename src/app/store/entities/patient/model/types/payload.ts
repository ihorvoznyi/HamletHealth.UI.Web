import type { PayloadAction } from '@reduxjs/toolkit';
import type { Patient } from './model';
import type { RangeType } from '@components/ui/controls/date-range-picker';

export type SetCurrentPatientPayload = PayloadAction<Patient>
export type SetDateRangePayload = PayloadAction<RangeType>